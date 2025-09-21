declare module "react-syntax-highlighter" {
  import { ComponentType } from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: string;
    [key: string]: any;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>;
  export const Light: ComponentType<SyntaxHighlighterProps>;
  export default Light;
}
