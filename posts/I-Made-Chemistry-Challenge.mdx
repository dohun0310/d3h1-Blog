---
teaser: /I-Made-Chemistry-Challenge-Teaser.png
category: 잡담
title: 화학 챌린지 앱 출시
date: 2024-02-10T16:08:00+09:00
---

화학 챌린지가 출시 되었습니다.

`Flutter`를 통해서 제작되었고 `App Store`와 `Google Play 스토어`에서 모두 이용 가능해요.

[![Download On The App Store](/I-Made-Chemistry-Challenge-Download-On-The-App-Store.png)](https://apps.apple.com/us/app/화학-챌린지/id6477348331/) [![Get It On Google Play](/I-Made-Chemistry-Challenge-Get-It-On-Google-Play.png)](https://play.google.com/store/apps/details?id=com.d3h1.chemistry_challenge)

# 만들어진 이유

---

이 앱은 처음부터 `화학 I` 시간 때 생기부를 위한 발표 자료로 사용하려고 간단한 원소 기호를 맞추는 앱으로 기획했었습니다. 하지만 학기 말이다 보니까 게을러지고 놀러 다녀서 점점 미뤄지게 됐는데, 또 제대로 만들려고 하다 보니까 욕심이 생겨서 막 테마 만들어서 집어넣고 중복되는 코드를 정리하려고 코드 구조를 몇십 번이나 헤집어 놓고 해서 1~2주 정도면했을 걸 `74 Commit`씩이나 하고 거의 한 달 반 동안 개발을 했어요. 사실 저 기간 동안 `Commit` 안한 날은 놀긴 했는데, 어쨌든 제 욕심을 꽉꽉 담아 처음으로 `네이티브 앱`이라는 걸 제대로 만들어봤습니다.

# 구조

---

많은 시간을 들인 것과 별개로 구조는 별거 없습니다. `challenge_page.dart`라는 파일은 `pages` 폴더에 있는 `dart` 파일들에서 `title`, `challengeData`, `questionItem`, `answerItem`들을 선언 받습니다. 그 후 `data` 폴더에 선언 되어 있는 `list`들에서 `questionItem`와 `answerItem`을 표시 후 사용자가 화면 하단에 표시되는 `Button` 4개 중 1개를 선택했을 때 `selectAnswer` 메서드를 호출해 정답인지 아닌지 확인 후 정답이면 점수를 업데이트합니다. 그 후 `nextChallenge`를 호출해 다음 문제로 넘어갑니다. 사용된 `Item`의 개수와, `data` 폴더에 저장되어 있는 `list`의 개수가 같다면 결과창을 보여줘 문제를 맞힌 개수와 틀린 개수를 사용자에게 표시합니다.

# 멍청한 실수

---

이 앱을 배포 한지 얼마 되지 않았는데, 벌써 업데이트가 네 번 있었습니다. 다신 이런 실수를 하지 않기 위해 이 문제 또한 기록해 두려 합니다.

첫 번째 실수입니다.

![Flutter Theme](/I-Made-Chemistry-Challenge-Flutter-Theme.png)

뭔가 이상한 부분이 보이시나요? 이 `Flutter` 프로젝트에서는 `Flutter`의 `API` 중 하나인 `ThemeExtension`을 사용해 만들어졌습니다. 지금 `static ThemeData get dark`이라고 작성되어 있는 줄을 자세히 보면 `color`는 `dark`에서 받아오지만, `ThemeData.light()`를 기반으로 `copyWith` 메서드를 사용해서 라이트 모드의 속성을 적용시키고 있었습니다. 이걸 모두 `style` 속성으로 지정 해놨으니 이상한 부분을 감지하지 못한 것입니다. 다 만들고 다른 프로젝트에 저 코드를 사용하다가 이상한 점을 발견하고 즉시 수정했습니다.

두 번째 실수입니다.

![Instagram Direct Message With Friend](/I-Made-Chemistry-Challenge-Instagram-Direct-Message-With-Friend.png)

배포 후 저는 `인스타그램 스토리`에 이 프로젝트의 다운로드 링크를 올렸는데요. 여러 친구들이 다운로드하고 사용해 보고 피드백을 남겨주었는데 그중 한 친구가 마지막 난이도가 어려움으로 표기되어 있는 두 챌린지에서만 결괏값을 보여주지 않는다고 하길래 확인해 보았습니다. 확인해 보니 진짜였습니다. 급하게 다시 노트북을 켜서 디버깅을 해보니 사용된 `item`의 개수와 `list`에 기재되어 있는 `item`의 개수가 끝났음에도 불구하고 1개 차이로 넘어가지 않았고, 같은 list를 사용하고 있는 두 챌린지에서만 문제가 발생했습니다.

![ChatGPT](/I-Made-Chemistry-Challenge-ChatGPT.png)

`list`를 복사해 `ChatGPT`에게 질문해보니, 아래와 같은 답변을 남겨주어서 재빠르게 수정 후 다시 배포하였습니다.

# 마무리

---

사실 이렇게까지 오래 할 것이 아니었는데, 제 게으름과 이상한 성격 때문에 이렇게까지 오래 걸린 것에 대해서는 조금 아쉽지만 결과물 자체는 제 능력 안에서 최선을 다했고, `App Store`와 `Google Play Store`에 당당히 등록되어 있다는 사실마저 만족스럽습니다. 모두 저와 같은 실수는 하지 않고 문제없는 2024년 되시길 바랍니다.