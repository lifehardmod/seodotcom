import Prism from "prismjs";
import "prismjs/components/prism-jsx";

// Highlight static examples during server rendering, without a browser-side
// highlighter or the complete Prism language bundle.
export default function CodeBlock({
  children,
}: {
  children: string;
  language?: string;
}) {
  return (
    <pre className="code-example" tabIndex={0} aria-label="코드 예제">
      <code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(children.trim(), Prism.languages.jsx, "jsx"),
        }}
      />
    </pre>
  );
}
