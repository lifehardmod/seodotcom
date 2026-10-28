import pageFont from "@/lib/fonts/programming-duduji";
import { pageMetadata } from "@/lib/seo";
import Preparing from "@/components/programming/Preparing";

export const metadata = pageMetadata("/programming/duduji");

export default function Duduji() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <Preparing path="/programming/duduji" />
    </div>
  );
}
