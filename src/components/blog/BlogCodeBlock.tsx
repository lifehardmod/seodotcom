import { isValidElement, type ReactNode } from "react";
import CodeBlock from "@/components/common/CodeBlock";
import CopyCodeButton from "./CopyCodeButton";

export default function BlogCodeBlock({ children }: { children?: ReactNode }) {
  const child = isValidElement<{ children?: ReactNode; className?: string }>(
    children,
  )
    ? children
    : null;
  const code =
    typeof child?.props.children === "string" ? child.props.children : "";
  const language =
    child?.props.className?.match(/language-([^\s]+)/)?.[1] ?? "text";
  if (!child || !code) return <pre>{children}</pre>;

  return (
    <div className="blog-code-block">
      <div className="blog-code-toolbar">
        <span>{language}</span>
        <CopyCodeButton text={code.replace(/\n$/, "")} />
      </div>
      <CodeBlock language={language}>{code}</CodeBlock>
    </div>
  );
}
