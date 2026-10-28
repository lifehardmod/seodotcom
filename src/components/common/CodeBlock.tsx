import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";

// Highlight static examples during server rendering, without a browser-side
// highlighter or the complete Prism language bundle.
export default function CodeBlock({
  children,
  language = "jsx",
}: {
  children: string;
  language?: string;
}) {
  const aliases: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    py: "python",
    sh: "bash",
    shell: "bash",
    plaintext: "plain",
    text: "plain",
    txt: "plain",
  };
  const name = aliases[language] ?? language;
  const grammar = Prism.languages[name] ?? Prism.languages.plain;
  return (
    <pre className="code-example" tabIndex={0} aria-label="코드 예제">
      <code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(children.replace(/\n$/, ""), grammar, name),
        }}
      />
    </pre>
  );
}
