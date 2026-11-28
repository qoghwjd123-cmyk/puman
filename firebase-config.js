// PUMAN 오픈 준비 본부 — Firebase 설정
// admins : 일정·금액·콘텐츠·회원권을 고칠 수 있는 계정
// members: 결정 확인, 자료 올리기를 하는 계정
// names  : 계정별 소속. 화면에는 보울 / 푸만으로 표시됩니다.
// 계정을 추가할 때는 firestore.rules의 명단도 똑같이 맞춰 주세요.
window.PUMAN_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCZnABdYSvuz75qKKY_FnEWsyWrTzli9HA",
    authDomain: "puman-3c0cd.firebaseapp.com",
    projectId: "puman-3c0cd",
    storageBucket: "puman-3c0cd.firebasestorage.app",
    messagingSenderId: "574596488678",
    appId: "1:574596488678:web:d626da8ca9e5a03a870a27"
  },
  orgs: ["미디어볼", "푸만"],
  admins: ["qoghwjd123@gmail.com", "ian0417kim@gmail.com"],
  members: [],
  names: {
    "qoghwjd123@gmail.com": "미디어볼",
    "ian0417kim@gmail.com": "푸만"
  }
};
