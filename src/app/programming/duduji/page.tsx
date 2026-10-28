import pageFont from "@/lib/fonts/programming-duduji";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/programming/duduji");

const duduji = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/programming/duduji" />
      <div>
        <h1 className="text-3xl font-bold">두더지 게임</h1>
        <p className="my-6 leading-relaxed">
          사과게임 형식의 웹 게임입니다. React를 활용해 프론트엔드와 백엔드를
          구현한 프로젝트로, 아래 링크에서 직접 플레이할 수 있습니다.
        </p>
        <a
          href="https://duduji.site"
          className="inline-block rounded border px-4 py-2"
        >
          두더지 게임 플레이
        </a>
      </div>
    </div>
  );
};

export default duduji;
