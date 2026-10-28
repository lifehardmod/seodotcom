import pageFont from "@/lib/fonts/programming-rabbit";
import { pageMetadata } from "@/lib/seo";
import Preparing from "@/components/programming/Preparing";

export const metadata = pageMetadata("/programming/rabbit");

export default function Rabbit() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <Preparing path="/programming/rabbit" />
    </div>
  );
}
