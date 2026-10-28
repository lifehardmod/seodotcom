import pageFont from "@/lib/fonts/programming-classon";
import { pageMetadata } from "@/lib/seo";
import Preparing from "@/components/programming/Preparing";

export const metadata = pageMetadata("/programming/classon");

export default function ClassOn() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <Preparing path="/programming/classon" />
    </div>
  );
}
