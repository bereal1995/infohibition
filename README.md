# Infohibition

전시회를 뜻하는 Exhibition과 정보를 뜻하는 Information의 합성어로, 정보를 전시하는 공간을 의미합니다.  
공공API와 Next.js로 구축하였습니다.

구경하러 가기 -> <https://infohibition.bereal95.com>

## 전제 조건

- Next.js: SSR을 통해 SEO 최적화 및 빠른 페이지 로딩을 위해 사용
- TypeScript: 타입 안정성을 위해 사용
- tailwindcss: CSS를 효율적으로 관리하기 위해 사용
- Emotion: CSS-in-JS를 위해 사용
- Storybook: 컴포넌트 개발을 위해 사용
- Jest: 테스트를 위해 사용
- Cypress: E2E 테스트를 위해 사용
- Sentry: 에러 리포팅을 위해 사용

## 설치

1. 저장소 복제

   ```bash
   git clone https://github.com/bereal1995/infohibition.git
   ```

2. 프로젝트 디렉터리로 이동합니다.

   ```bash
   cd infohibition
   ```

3. 종속성을 설치합니다.

   ```bash
   yarn install
   ```

4. 개발 서버를 시작합니다.
   ```bash
   yarn dev
   ```

## 배포

프로덕션 환경에서 서비스를 배포하려면 Vercel 또는 Heroku와 같은 서비스를 사용할 수 있습니다.

## 문제 해결

서비스 이용 중 문제가 발생하면 다음 사항을 확인하시기 바랍니다.

- 필요한 종속성을 모두 설치했는지 확인합니다.
- 환경 변수를 올바르게 구성했는지 확인하십시오.

## 기여

기여를 환영합니다! GitHub에서 풀 요청 또는 문제를 제출하세요.
