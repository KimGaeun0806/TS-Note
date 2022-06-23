// package.json은 node.js가 관리하는 패키지 관리 파일. 프로젝트 정보와 관련 패키지가 기록됨.

// 패키지 설치 명령 옵션 (npm i 옵션)
// --save (단축 명령 -S) -> 프로젝트를 실행할 때 필요한 패키지로 설치함. package.json 파일의 'dependencies'항목에 등록됨.
// --save-dev (단축 명령 -D) -> 프로젝트를 개발할 때만 필요한 패키지로 설치함. package.json 파일의 'devDependencies'항목에 등록됨.

// 다른 사람에게 프로젝트를 전달할 때는 node_modules 디렉토리를 삭제함
// 다른 사람이 작성한 프로젝트를 전달받아 이용할 때는 package.json 파일이 있는 디렉터리에서 npm i 를 실행해야 함 -> package.json에 등록된 패키지들이 node_modules 디렉터리에 설치됨

// npm run dev -> src 디렉터리에 있는 index.ts 파일을 컴파일하고 실행. dev 명령은 개발 중에 src 디렉터리에 있는 index.ts 파일을 실행하는 용도.
// npm run build -> dist 디렉터리에 ES5 자바스크립트 파일을 만듦. build 명령은 개발이 완료된 후 프로그램을 배포하기 위해 dist 디렉터리에 ES5 자바스크립트 파일을 만들 때 사용.
