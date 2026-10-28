# 블로그 글 작성

글은 `content/posts/<slug>.mdx`에 저장합니다. 파일명이 `/blog/<slug>` 주소가 되므로 발행 후에는 파일명을 유지합니다. AI 작성 규칙은 [AGENTS.md](./AGENTS.md)에 고정합니다.

글은 공통 페이지·MDX 컴포넌트·CSS로 표시됩니다. 본문·목차 구성은 렌더러가 담당하므로 새 글마다 UI 코드를 만들 필요가 없습니다. MDX 파일에는 frontmatter와 Markdown 본문만 작성합니다. import/export·실행식·HTML·개별 CSS·커스텀 JSX는 허용하지 않습니다.

```sh
pnpm new:post my-post-slug
```

생성된 파일의 제목·요약·날짜·태그를 작성하고 본문을 채웁니다. 날짜는 `"2026-10-28"`처럼 따옴표로 감싼 `YYYY-MM-DD` 형식입니다. 본문 제목은 페이지가 출력하므로 `##`부터 시작합니다.

```yaml
---
title: "글 제목"
description: "목록과 검색 결과에 표시할 짧은 설명"
publishedAt: "2026-10-28"
tags: ["React", "문제 해결"]
published: false
---
```

- `published: false`: 로컬 개발 서버에서 초안으로 확인할 수 있습니다. 프로덕션 페이지·사이트맵·RSS에는 포함하지 않습니다.
- `published: true`: 다음 빌드에서 목록·본문·메타데이터·사이트맵·RSS에 반영됩니다.
- `updatedAt`: 발행 후 본문을 수정했다면 실제 수정 날짜를 기록합니다.

이 저장소는 공개 저장소입니다. `published: false`는 사이트 표시만 제어합니다. 비공개 내용은 커밋·푸시 전에 검토해야 합니다.

코드 블록의 언어는 `python`, `typescript`, `tsx`, `javascript`, `jsx`, `bash`, `json`, `css`, `text`를 지원합니다. 제목에서 목차를 자동 생성하며, 코드 강조는 서버에서 처리합니다.

게시용 이미지는 항상 **WebP로 압축**해 `public/blog/<slug>/`에 둡니다. Markdown 이미지 또는 아래처럼 공통으로 등록된 정적 `Image`만 사용합니다. `Image`는 `src`, `alt`, 양의 정수 `width`·`height`만 허용하며 크기는 압축한 파일의 실제 픽셀 크기입니다. 본문의 이미지가 WebP가 아니면 형식 검사와 빌드가 실패합니다.

```mdx
<Image
  src="/blog/my-post-slug/example.webp"
  alt="예제의 실행 흐름"
  width={1200}
  height={630}
/>
```

생성한 PNG 원본은 생성 도구의 원본 저장 위치에 보관하고, 게시 폴더에는 압축본만 둡니다. 기본은 긴 변 최대 1600px·품질 85입니다. 예를 들어 2:1 가로 이미지가 1600px보다 크다면 `cwebp`로 아래처럼 변환할 수 있습니다. 더 작은 원본은 확대하지 않고 `-resize`를 생략합니다.

```sh
cwebp -q 85 -m 6 -resize 1600 0 /path/to/generated.png -o public/blog/my-post-slug/example.webp
```

실행 흐름·비교·상태 변화처럼 그림이 이해를 도울 위치를 골라 생성하고, 본문 크기에서 글자와 선이 읽히는지 확인합니다. 기존 이미지의 검정·회색·초록 스타일을 따르고 예시와 실제 측정값을 구분합니다.

블로그 본문은 시스템 한글 글꼴을 사용하므로 글을 추가할 때 페이지별 폰트를 재생성할 필요가 없습니다.

## AI에 글을 맡길 때

이 저장소를 읽을 수 있는 AI에는 다음처럼 요청하면 됩니다. 저장소를 읽을 수 없는 도구에는 `content/AGENTS.md`와 생성된 MDX 초안을 함께 제공합니다.

```text
content/AGENTS.md와 content/README.md를 읽고,
[원자료 링크 또는 설명]을 바탕으로 [주제]에 대한 블로그 초안을 작성해.
계기·판단 기록은 [있는 경우에만 첨부]. 없으면 코드 해설로 써.
공통 디자인은 유지하고 content/posts/<slug>.mdx의 메타데이터와 본문만 작성해.
설명에 도움이 되는 위치에는 이미지를 생성하고, 검수한 뒤 WebP로 압축해 public/blog/<slug>/에 넣어.
확인된 사실과 예시를 구분하고, published: false로 둬.
초안의 반복을 덜어내고 pnpm check:blog로 검사한 뒤 로컬 미리보기 주소를 알려줘.
```

`pnpm new:post <slug>`가 글의 뼈대를 만들고 `pnpm check:blog`가 모든 초안·발행 글의 본문 형식을 검사합니다. 같은 검사기는 MDX 컴파일에도 연결되어 있고, `pnpm build` 전에 전체 글을 검사하므로 스타일을 우회하는 글은 빌드가 실패합니다. 메타데이터는 기존 글 로더에서 검증합니다. 이 검사는 사실 정확성이나 글의 품질을 자동 판정하지는 않습니다.

화면의 기준은 `src/styles/blog.css`입니다. 페이지 배경은 사이트 상단과 이어지는 기존 검정으로 고정합니다. 글 영역에 별도 배경색을 넣지 않고, 글자·간격·중성 회색 코드 블록·초록 포인트로 읽기 편하게 구성합니다. 본문·목차 배치는 Josh Comeau를 참고합니다. 남색·청회색을 추가하거나 글마다 다른 테마·레이아웃을 만들지 않습니다.

개발 서버를 유지하면서 별도 디렉터리에 프로덕션 빌드를 만들려면 다음을 사용합니다.

```sh
NEXT_BUILD_DIR=.next-build pnpm build
```
