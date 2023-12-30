---
teaser: /Review-Project-IDX-Teaser.jpg
category: 후기
title: 구글의 웹 기반 IDE 프로젝트 IDX 살펴보기
date: 2023-12-30T23:00:00+09:00
description: 구글도 뛰어든 브라우저 IDE
---

`GitHub`의 `Codespace`에 이어서 `Google`도 `프로젝트 IDX`라는 브라우저 IDE를 출시했습니다. 아직까진 Waitlist 접수를 받고 허가된 사용자에게만 푸는 것 같아요. 사실 8월에 저는 이미 살짝 써봤는데 미루다가 블로그에 쓰기 좋은 주제 같아서 가지고 왔어요. 대충 `GitHub Copilot` 같은 `Codey`라는 AI Assistant를 넣은 게 특징이라고 하네요. 웹 개발 시 Preview를 제공하는 것은 물론, `Flutter` 개발을 할 때 `Android`와 `iOS`의 `Simulator`를 모두 제공한다고 해서 기대했습니다. 

<br />

# 첫 화면

---

생각보다 평범하게 생겼습니다. `Code - OSS` 기반이라 우리가 기존에 보던 `Visual Studio Code`와 꽤 비슷하게 생겼습니다.

![Main Page](/Review-Project-IDX-Main-Page.png)

여기서 어떤 프로젝트를 생성 할지 정하고 옵션을 선택하면 프로젝트가 생성됩니다.

<br />

# 웹 프로젝트 생성

---

웹 프로젝트를 생성하기로 설정하면 아래와 같은 화면이 나옵니다.

![Make Web Project Page](/Review-Project-IDX-Make-Web-Project-Page.png)

그냥 `HTML`, `CSS`, `JS` 프로젝트로 생성 할 수 있고 `Angular`, `React`, `NextJS`로도 생성 할 수 있습니다. `Vue`나 `Svelte` 프로젝트도 생성 할 수 있다고 했었는데, More options를 누르니 확인 할 수 있었습니다.

![Select Web Project Framework](/Review-Project-IDX-Select-Web-Project-Framework.png)
![Select More Web Project Framework](/Review-Project-IDX-Select-More-Web-Project-Framework.png)

그거 말고도 `JavaScript`로 생성 할 것인지 `TypeScript`로 생성 할지도 설정 할 수 있네요. 재밌는 건 `React`를 제외한 모든 `Framework`의 기본 `Language`는 `TypeScript`로 되어 있네요.

![Select Web Project Language](/Review-Project-IDX-Select-Web-Project-Language.png)

또한 실험적 기능으로 `Nix`를 킨다는 옵션이 있어 찾아보니 패키지 매니저라고 하네요. 쓰지 않는 패키지를 삭제하는 기능도 있다고 하니 한번 써봐도 나쁘지 않을 거 같긴 한데 아직 한 번도 써본 적은 없습니다.

![Nix](/Review-Project-IDX-Nix.png)

그냥 대충 보려고 `NextJS` 프로젝트를 생셩해 보았습니다. 일단 웹 Preview는 잘 뜹니다.

![Web Preview](/Review-Project-IDX-Web-Preview.png)

근데 `iOS`라고 써져 있어서 뭔가 했더니 `iOS Simulator`가 제공이 됩니다? 많이 버벅이는데 `Mac` 제품군을 사야지만 사용할 수 있었던 `iOS Simulator`가 제공된다는 자체가 꽤 멋집니다.

![iOS Simulator Preview](/Review-Project-IDX-iOS-Simulator-Preview.png)

`Android Simulator`를 꺼내려고 하니 오류를 뿜으며 뜨진 않습니다. 이걸 보니 `Flutter` 프로젝트를 당장 생성해 보고 싶어졌습니다.

<br />

# `Flutter` 프로젝트 생성

---

`Flutter` 프로젝트 생성할 때에는 별다른 걸 물어보진 않습니다. `Nix`를 쓸 건지 안 쓸 건지 물어보고 웹 프로젝트를 생성할 때에는 항상 `Nix`가 기본값으로 설정되어 있었는데 `Flutter` 프로젝트를 생성할 때에는 꺼져있네요.

![Make Flutter Project Page](/Review-Project-IDX-Make-Flutter-Project-Page.png)

프로젝트를 만드니 `flutter doctor`의 결과값을 보여주고 `Android`와 `iOS`의 `Simulator`를 모두 제공하고 있네요. `flutter doctor`의 결과에는 `ubuntu` 위에서 실행되는 것처럼 모이는데 어떻게 `iOS Simulator`를 돌리는지 매우 궁금합니다.

![Flutter iOS Simulator Preview](/Review-Project-IDX-Flutter-iOS-Simulator-Preview.png)

`Android Simulator`에서도 Preview 해보고 싶었는데 도저히 되질 않네요. 이것도 마찬가지로 엄청나게 버벅입니다.

![Flutter Android Simulator Preview](/Review-Project-IDX-Flutter-Android-Simulator-Preview.png)

<br />

# 결론

---

`Android`와 `iOS`의 `Simulator`를 모두 제공하는 부분이 매우 마음에 들지만, 너무 버벅이고 불안정한 게 흠입니다. 장점이라고 자랑하는 AI Assistant는 `Palm2` 기반이여서 꽤 별로입니다. 아직은 Beta여서 어느 정도 용서되는 부분이 있는 것은 사실이지만 정식 출시 후에도 버벅이고 AI Assistant는 별로인데 유료화한다면 얘도 `Killed by Google`에 올라가지 않을까? 라는 생각이 듭니다.