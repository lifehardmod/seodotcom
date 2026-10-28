import { visit } from "unist-util-visit";

const executableNodes = new Set([
  "mdxjsEsm",
  "mdxFlowExpression",
  "mdxTextExpression",
  "html",
]);

function checkImageSource(source, node, file) {
  if (
    typeof source !== "string" ||
    !source.startsWith("/blog/") ||
    !source.endsWith(".webp")
  ) {
    file.fail(
      "본문 이미지는 WebP로 압축해 /blog/<slug>/ 경로에서 사용하세요.",
      node,
      "blog:webp-image",
    );
  }
}

function isStaticImage(node) {
  if (node.name !== "Image" || node.children.length > 0) return false;
  const attributes = new Map();
  for (const attribute of node.attributes) {
    if (
      attribute.type !== "mdxJsxAttribute" ||
      !["src", "alt", "width", "height"].includes(attribute.name) ||
      attributes.has(attribute.name)
    ) {
      return false;
    }
    attributes.set(attribute.name, attribute.value);
  }
  if (
    typeof attributes.get("src") !== "string" ||
    !attributes.get("src").startsWith("/blog/") ||
    typeof attributes.get("alt") !== "string" ||
    !attributes.get("alt").trim()
  ) {
    return false;
  }
  return ["width", "height"].every((name) => {
    const value = attributes.get(name);
    const literal =
      typeof value === "string"
        ? value
        : value?.type === "mdxJsxAttributeValueExpression"
          ? value.value
          : "";
    return /^[1-9]\d*$/.test(literal);
  });
}

/** Articles supply content; the shared renderer owns all presentation. */
export default function remarkBlogFormat() {
  return (tree, file) => {
    const definitions = new Map();
    visit(tree, "definition", (node) => {
      definitions.set(node.identifier.toLowerCase(), node.url);
    });
    visit(tree, (node) => {
      if (executableNodes.has(node.type)) {
        file.fail(
          "글은 Markdown 본문만 작성하세요. import/export, 실행식, HTML, 개별 스타일은 사용할 수 없습니다.",
          node,
          "blog:content-only",
        );
      }
      if (["mdxJsxFlowElement", "mdxJsxTextElement"].includes(node.type)) {
        if (!isStaticImage(node)) {
          file.fail(
            "JSX는 /blog/ 경로의 정적 Image만 허용합니다. src·alt·width·height를 지정하고 레이아웃은 공통 템플릿에 맡기세요.",
            node,
            "blog:shared-layout",
          );
        }
        checkImageSource(
          node.attributes.find((attribute) => attribute.name === "src").value,
          node,
          file,
        );
      }
      if (node.type === "image") checkImageSource(node.url, node, file);
      if (node.type === "imageReference") {
        checkImageSource(
          definitions.get(node.identifier.toLowerCase()),
          node,
          file,
        );
      }
      if (node.type === "heading" && node.depth === 1) {
        file.fail(
          "제목은 페이지가 출력합니다. 본문 소제목은 ##부터 시작하세요.",
          node,
          "blog:heading",
        );
      }
      if (node.type === "code" && !node.lang) {
        file.fail(
          "코드 블록에 언어를 지정하세요. 일반 텍스트는 text를 사용하세요.",
          node,
          "blog:code-language",
        );
      }
    });
  };
}
