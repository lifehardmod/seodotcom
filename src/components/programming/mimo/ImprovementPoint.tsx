import DefaultSection from "@/components/common/DefaultSection";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";
import Image from "next/image";

const ImprovementPoint = () => {
  return (
    <DefaultSection
      title="불분명한 에러 처리"
      description="에러 처리에 미흡한 점이 있었습니다."
    >
      <SyntaxHighlighter language="javascript">
        {`
        export const getTeamInfo = async (
          teamId: string,
        ): Promise<TeamInfoResponse> => {
          if (!teamId) {
            throw new Error('팀 아이디가 없습니다.');
          }

          try {
            const response = await customFetch('/team', {
              method: 'GET',
              params: { teamId }, // params는 객체여야 함
            });
            return response.json();
          } catch (error) {
            console.error('Error fetching category teams:', error);
            throw error;
          }
        };

        const { data: teamData, error: teamError } = useQuery({
          queryKey: ['teamInfo', teamId],
          queryFn: () => getTeamInfo(teamId),
        });

        useEffect(() => {
          if (teamError) {
            setIsErrorModalOpen(true);
          }
        }, [teamError]);

`}
      </SyntaxHighlighter>

      <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              현재 코드에서는 fetch 과정에서 error를 한번에 thorws함
            </p>
          </li>

          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              try중 error catch는 브라우저 네트워크 에러만 처리함
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              따라서 response를 바로 return하는 것이 아닌, response.status를
              통해 error를 throw해야함
            </p>
          </li>
        </ul>
      </div>
      <SyntaxHighlighter language="javascript">
        {`
        export const TEAM_ERROR_MESSAGES = {
          UNAUTHORIZED: 'UNAUTHORIZED_TEAM',
          FORBIDDEN: 'FORBIDDEN_TEAM',
          NOT_FOUND: 'NOT_FOUND_TEAM',
        }

        export const getTeamInfo = async (
          teamId: string,
        ): Promise<TeamInfoResponse> => {
          if (!teamId) {
            throw new Error('팀 아이디가 없습니다.');
          }

            const response = await customFetch('/team', {
              method: 'GET',
              params: { teamId }, // params는 객체여야 함
            });
            
            if (!response.ok) {
              if (response.status === 401) {
                throw new Error(TEAM_ERROR_MESSAGES.UNAUTHORIZED);
              }
                
              if (response.status === 403) {
                throw new Error(TEAM_ERROR_MESSAGES.FORBIDDEN);
              }

              if (response.status === 404) {
                throw new Error(TEAM_ERROR_MESSAGES.NOT_FOUND);
              }
            }

          return response.json();
        };

        const { data: teamData, error: teamError } = useQuery({
          queryKey: ['teamInfo', teamId],
          queryFn: () => getTeamInfo(teamId),
        });

        useEffect(() => {
          if (teamError) {
            if (teamError.message === TEAM_ERROR_MESSAGES.UNAUTHORIZED) {
              setErrorMessage('로그인이 필요합니다.');
            }else if (teamError.message === TEAM_ERROR_MESSAGES.FORBIDDEN) {
              setErrorMessage('접근 권한이 없습니다.');
            }
            else if (teamError.message === TEAM_ERROR_MESSAGES.NOT_FOUND) {
              setErrorMessage('존재하지 않는 팀입니다.');
            }else{
              setErrorMessage('오류가 발생했습니다.');
            }
              setIsErrorModalOpen(true);
          }
        }, [teamError]);

`}
      </SyntaxHighlighter>
      <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              Error를 const로 관리해, 각 섹션별 Error 메시지를 관리함으로
              일관성을 높이고 휴먼 에러를 줄일 수 있음.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
              Error에 따른 에러 포맷을 리턴하여, 사용자경험을 향상시키고,
              개발자도 디버깅에 용이해짐
            </p>
          </li>
        </ul>
      </div>
    </DefaultSection>
  );
};

export default ImprovementPoint;
