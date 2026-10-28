import pageFont from "@/lib/fonts/programming-mimo";
import { pageMetadata } from "@/lib/seo";
import Preparing from "@/components/programming/Preparing";

export const metadata = pageMetadata("/programming/mimo");

export default function Mimo() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <Preparing path="/programming/mimo" />
    </div>
  );
}
