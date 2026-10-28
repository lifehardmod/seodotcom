import pageFont from "@/lib/fonts/programming";
import { pageMetadata } from "@/lib/seo";
import Preparing from "@/components/programming/Preparing";

export const metadata = pageMetadata("/programming");

export default function Programming() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <Preparing path="/programming" />
    </div>
  );
}
