import DefaultSection from "@/components/common/DefaultSection";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";
import Image from "next/image";

const StoryBook = () => {
  return (
    <DefaultSection
      title="StoryBook"
      description="StoryBook를 이용해 시나리오별 상태를 시각적으로 검증"
    >
      <SyntaxHighlighter language="javascript">
        {`const meta: Meta<typeof Input> = {
    title: 'Components/Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'number', 'password'],
        },
        value: { control: 'text' },
        defaultValue: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        multiline: { control: 'boolean' },
        rows: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        id: 'default-input',
        placeholder: '텍스트 입력...',
        type: 'text',
        multiline: false,
    },
};

export const Disabled: Story = {
    args: {
        id: 'disabled-input',
        placeholder: '비활성화됨',
        disabled: true,
        multiline: false,
    },
};
...
`}
      </SyntaxHighlighter>
      <Image
        src="/MIMO/StoryBookImage.webp"
        alt="StoryBook"
        width={1800}
        height={1300}
      />
      <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          Storybook
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              <span className={TEXT_STYLES.highlight}>
                컴포넌트 단위 개발 환경
              </span>
              을 구축하여, 실제 서비스와 독립적으로 컴포넌트를 렌더링하고 확인할
              수 있었습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              Storybook을 통해 props를 실시간으로 조작하면서 다양한 UI 상태를
              검증했습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              이를 통해{" "}
              <span className={TEXT_STYLES.highlight}>예외 케이스</span>와{" "}
              <span className={TEXT_STYLES.highlight}>UI</span>를 조기에 확인할
              수 있었고, QA 단계 이전에 오류를 줄일 수 있었습니다.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          성과
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              이전에는 특정 props 조합을 수동으로 넣어보지 않으면 UI가 어떻게
              깨지는지 확인하기 어려웠습니다. 조합에 따라 발생하는{" "}
              <span className={TEXT_STYLES.highlight}>UI 예외</span>를 놓치거나
              QA 단계에서 뒤늦게 발견하는 문제가 있었습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              하지만, Storybook을 이용해{" "}
              <span className={TEXT_STYLES.highlight}>
                컴포넌트별 다양한 상태를 사전에 테스트
              </span>
              할 수 있었고, 프론트엔드 개발 단계에서 오류를 빠르게 수정할 수
              있었습니다. 그 결과{" "}
              <span className={TEXT_STYLES.highlight}>개발 효율성과 품질</span>
              이 모두 개선되었습니다.
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          단점
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              컴포넌트 변경 시{" "}
              <span className={TEXT_STYLES.highlight}>
                스토리 파일도 함께 수정
              </span>
              해야 하므로 유지보수 리소스가 체감할 수 있을 정도로 증가하였음
            </p>
          </li>
        </ul>
      </div>
    </DefaultSection>
  );
};

export default StoryBook;
