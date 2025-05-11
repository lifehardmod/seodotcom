import React from "react";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex bg-white/10 hover:bg-white/20 active:translate-y-[1px] transition-all cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "border border-white",
        gradient: "border-gradient",
        glass: "border-gradient bg-glass",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        primary:
          "bg-brand-primary text-black shadow-xs hover:bg-brand-primary/80",
        secondary: "bg-white text-black shadow-xs hover:bg-white/80",
        positive: "bg-positive  shadow-xs hover:bg-positive/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const DesignSystem = () => {
  return (
    <div className="space-y-12 p-6">
      {/* 브랜드 컬러 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">브랜드 컬러</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[#00FF66]"></div>
            <p className="text-base">Primary</p>
            <p className="text-sm text-gray-400">#00FF66</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[#037DD6]"></div>
            <p className="text-base">Positive</p>
            <p className="text-sm text-gray-400">#037DD6</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[#FF4646]"></div>
            <p className="text-base">Fail</p>
            <p className="text-sm text-gray-400">#FF4646</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[#FFD700]"></div>
            <p className="text-base">Caution</p>
            <p className="text-sm text-gray-400">#FFD700</p>
          </div>
        </div>
      </div>

      {/* 버튼 변형 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">버튼 변형</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xl font-medium">Variants</h4>
              <div className="flex flex-wrap gap-4">
                <button className={buttonVariants({ variant: "default" })}>
                  Default
                </button>
                <button className={buttonVariants({ variant: "gradient" })}>
                  Gradient
                </button>
                <button className={buttonVariants({ variant: "glass" })}>
                  Glass
                </button>
                <button className={buttonVariants({ variant: "destructive" })}>
                  Destructive
                </button>
                <button className={buttonVariants({ variant: "outline" })}>
                  Outline
                </button>
                <button className="inline-flex bg-brand-primary text-black shadow-xs hover:bg-brand-primary/80 active:translate-y-[1px] transition-all cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3">
                  Primary
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-medium">Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <button className={buttonVariants({ size: "sm" })}>
                  Small
                </button>
                <button className={buttonVariants({ size: "default" })}>
                  Default
                </button>
                <button className={buttonVariants({ size: "lg" })}>
                  Large
                </button>
                <button className={buttonVariants({ size: "icon" })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xl font-medium">States</h4>
              <div className="flex flex-wrap gap-4">
                <button className={buttonVariants()} disabled>
                  Disabled
                </button>
                <button className={buttonVariants()} aria-invalid>
                  Invalid
                </button>
                <button className={buttonVariants()} data-state="hover">
                  Hover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 그라데이션 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">그라데이션</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[radial-gradient(126.48%_117.29%_at_46.91%_0%,#000_0%,#333_71.6%,#00010f_100%)]"></div>
            <p className="text-base">Radial Large</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[radial-gradient(126.48%_117.29%_at_46.91%_0%,#232323_49.5%,#333_99.99%)]"></div>
            <p className="text-base">Radial Small</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-[radial-gradient(50%_20%_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(44,44,44,0.4)_100%)]"></div>
            <p className="text-base">Radial Accent</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-gradient-to-r from-[#00FF37] to-[#F6FF00]"></div>
            <p className="text-base">Brand Gradient</p>
            <p className="text-sm text-gray-400">
              94deg, #00FF37 -15.54%, #F6FF00 111.18%
            </p>
          </div>
        </div>
      </div>

      {/* 테두리 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">테두리</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-24 rounded-lg border-gradient"></div>
            <p className="text-base">Border Gradient</p>
            <p className="text-sm text-gray-400">
              linear-gradient(277deg, rgba(0,0,0,0) 30%, #fff 100%)
            </p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg input-border-gradient"></div>
            <p className="text-base">Input Border</p>
            <p className="text-sm text-gray-400">
              linear-gradient(var(--background), var(--background)) padding-box
            </p>
          </div>
        </div>
      </div>

      {/* 그레이스케일 */}
      <div className="space-y-6 ">
        <h3 className="text-2xl font-semibold">그레이스케일</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { shade: 900, color: "#1a1a1a" },
            { shade: 800, color: "#282828" },
            { shade: 700, color: "#333333" },
            { shade: 600, color: "#474747" },
            { shade: 500, color: "#555555" },
            { shade: 400, color: "#777777" },
            { shade: 300, color: "#848484" },
            { shade: 200, color: "#c0c0c0" },
            { shade: 100, color: "#d9d9d9" },
          ].map(({ shade, color }) => (
            <div key={shade} className="space-y-3">
              <div
                className="h-24 rounded-lg"
                style={{ backgroundColor: color }}
              ></div>
              <p className="text-base">Gray {shade}</p>
              <p className="text-sm text-gray-400">{color}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 타이포그래피 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">타이포그래피</h3>
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-xl font-medium">폰트 패밀리</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-2xl font-pretendard">Pretendard</p>
                <p className="text-base text-gray-400">font-pretendard</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bit">DNF Bit Bit v2</p>
                <p className="text-base text-gray-400">font-bit</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-partial">Partial Sans KR</p>
                <p className="text-base text-gray-400">font-partial</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-pixel">Pixel Regular</p>
                <p className="text-base text-gray-400">font-pixel</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-dunggeunmo">DungGeunMo</p>
                <p className="text-base text-gray-400">font-dunggeunmo</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-medium">폰트 크기</h4>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-5xl font-bold">Heading 1</p>
                <p className="text-base text-gray-400">
                  text-5xl font-bold (48px)
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-4xl font-semibold">Heading 2</p>
                <p className="text-base text-gray-400">
                  text-4xl font-semibold (36px)
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-medium">Heading 3</p>
                <p className="text-base text-gray-400">
                  text-3xl font-medium (30px)
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xl">Body Text</p>
                <p className="text-base text-gray-400">text-xl (20px)</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-200">Secondary Text</p>
                <p className="text-base text-gray-200">
                  text-gray-200 (#e5e5e5)
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-base">Normal Text</p>
                <p className="text-base text-gray-400">text-base (16px)</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-[#848484]">Disabled Text</p>
                <p className="text-base text-[#848484]">text-[#848484]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 라운드 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">라운드</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-24 rounded-sm bg-gray-700"></div>
            <p className="text-base">Small</p>
            <p className="text-sm text-gray-400">rounded-sm (2px)</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-md bg-gray-700"></div>
            <p className="text-base">Medium</p>
            <p className="text-sm text-gray-400">rounded-md (6px)</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-lg bg-gray-700"></div>
            <p className="text-base">Large</p>
            <p className="text-sm text-gray-400">rounded-lg (8px)</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded-xl bg-gray-700"></div>
            <p className="text-base">Extra Large</p>
            <p className="text-sm text-gray-400">rounded-xl (12px)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
