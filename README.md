# PUMAN 오픈 준비 본부

함께 쓰는 푸만 오픈 준비 대시보드입니다. GitHub Pages(화면) + Firebase(구글 로그인·데이터 저장) 구조이고, 견적서·미디어볼 프로젝트 앱과 같은 방식입니다.

## 파일
- `index.html` — 화면 전체 (대시보드, 기획·예산, 홍보·콘텐츠, 자료)
- `firebase-config.js` — Firebase 연결값과 허용 명단
- `firestore.rules` — 데이터 보안 규칙 (허용 명단 외 접근 차단)

`firebase-config.js`의 apiKey가 비어 있으면 **미리보기 모드**로 열립니다(이 브라우저에만 저장).

## 연결 순서 (약 15분)
1. **Firebase 프로젝트 만들기**: console.firebase.google.com → 프로젝트 추가 → 이름 `puman-hq` (애널리틱스 꺼도 됨)
2. **웹 앱 등록**: 프로젝트 개요 → `</>` 아이콘 → 앱 이름 입력 → 나오는 `firebaseConfig` 값을 `firebase-config.js`의 firebase 칸에 붙여넣기
3. **구글 로그인 켜기**: Authentication → 시작하기 → 로그인 방법 → Google 사용 설정
4. **데이터베이스 만들기**: Firestore Database → 데이터베이스 만들기 → 위치 `asia-northeast3 (서울)` → 프로덕션 모드
5. **보안 규칙 넣기**: Firestore → 규칙 탭 → `firestore.rules` 내용을 통째로 붙여넣고 게시. 이메일 명단 두 곳을 실제 주소로 바꾸기
6. **허용 명단**: `firebase-config.js`의 admins(호정님), members(현우님) 이메일을 5번과 똑같이 입력하고, names에 화면에 보일 소속 이름(미디어볼, 푸만)을 적기
7. **GitHub에 올리기**: 새 저장소(예: `puman-hq`)에 세 파일 업로드 → Settings → Pages → Branch `main` / root → 저장
8. **도메인 허용**: Firebase Authentication → 설정 → 승인된 도메인 → `깃허브아이디.github.io` 추가
9. 주소(`https://깃허브아이디.github.io/puman-hq/`)로 접속 → 호정님 계정 로그인 → **기본 일정·결정 목록 불러오기** 버튼 한 번 누르기

## 사람 추가하기
`firebase-config.js`(admins 또는 members, names)와 `firestore.rules` 두 곳의 명단에 이메일을 추가합니다. 수정 권한이 필요하면 admins, 체크만 하면 members에 넣습니다.

## 참고
- Firebase 설정값(apiKey 등)은 공개돼도 괜찮은 값입니다. 데이터는 보안 규칙으로 보호됩니다.
- GitHub 무료 계정에서 Pages는 공개 저장소로 운영됩니다. 코드가 보여도 데이터는 로그인한 허용 명단만 읽을 수 있습니다.
