---
teaser: /Review-Google-IO-Extended-2023-Seoul-Teaser.png
category: 후기
title: Google I/O Extended 2023 Seoul 다녀왔습니다.
date: 2023-07-30
description: Google I/O Extended 2023 Seoul 가서 놀고 왔습니다.
---

한국에서 열리는 Google IO Extended 중 가장 큰 규모의 Extended Seoul이 열린다는 소식을 접했는데요. festa에서 티켓을 구매할 수 있길래 구매하고 다녀왔습니다.

# 도착

---

1시에 시작하는 행사였지만 저는 30분 정도 일찍 도착했는데요. 길을 찾아가는 건 그리 어렵지 않았고요. 도착하면 세션 시간표와 홀 지도가 담긴 리플렛과 웰컴 드링크, 입장 팔찌를 받을 수 있습니다. 이거 팔찌 이뻐서 살리고 싶었는데 다니다 보니까 물에도 젖고 구겨져서 안타깝게 포기했습니다.

![Timetable](/Google-IO-Extended-Seoul-Timetable.jpg)
![Event Map](/Google-IO-Extended-Seoul-Event-Map.jpg)

웰컴 드링크는 입장할 때 생수(무려 에비앙!)와 처음 보는 플라스틱 병에 담긴 라떼가 있었는데 뭐 선택할 기회 없이 주는 거 아무거나 받았는데요. 그게 라떼였습니다. 빙그레가 후원사라고 하더라고요? 찾아보니까 신제품이라고 하더라고요. 맛있어서 한 개 더 마시고 싶었는데 안 보여서 생수 마셨고요. 티켓값 1만 원이었는데 제가 먹은 음료(커피, 생수, 콤부차) 값만 해도 1만 원은 넘은 거 같고요.

![Welcome Drink](/Google-IO-Extended-Seoul-Welcome-Drink.png)


# Keynote

---

시간표에 나와 있는 것처럼 좋던 싫던 도착하자마자 좋던 싫던 구글에서 6-7년 정도 근무하신 Manikantan Krishnamurthy 님의 키노트를 들어야 합니다. 아까도 말했지만 좀 일찍 왔는데 저보다 일찍 오신 분들도 엄청나게 많더라고요. 그래서 발표 대신에 뭐 틀어주는 영상 봤는데 엄청 AI 이야기를 하더라고요? `생성형 AI가 우리 모두를 도울 것이다`, `AI가 검색의 새로운 경험을 줄 것이다` 등등에 내용인데 제가 영어를 잘 못해서 이해는 잘 안 갔고요.

![AI Video](/Google-IO-Extended-Seoul-AI-Video.jpg)

발표 전에 간단한 Google I/O Extended 소개와 행사장 소개를 했고요. 그다음에 올라오셔서 발표를 하셨습니다. 안타깝게도 한국어를 못하신다고 하셨고 다음에 만날 때는 한국어를 공부해오신다고 했는데 제가 영어를 못해서 제대로 이해한 게 맞나 모르겠고요.

![Keynote](/Google-IO-Extended-Seoul-Keynote.jpg)

Keynote 내용은 한국은 모바일 결제 시장이 엄청나고 <s>(그래서 구글 페이는 언제?)</s> 택시도 폰으로 쉽게 잡을 수 있고 멋지다! 라는 내용과 구글이 모바일 우선에서 AI를 우선하는 회사로 바뀌였고 지금도 AI로 엄청난 변화가 일어나고 있고 이 변화를 여러분들이 이끌 수 있다 뭐 이런 내용이었는데 이것도 제가 영어를 잘 못해서 제대로 이해한 건지 모르겠습니다.

# What's new in android development tools

---

다음 세션도 Keynote를 들은 똑같은 행사장에서 저는 들었는데요. 카카오뱅크에서 근무하시는 노현석님의 `Android Studio`의 새로운 내용에 관한 것이었어요. 저는 안드로이드 개발은 한 번도 해본 적 없지만 `Android Studio`, `Xcode` 같은 네이티브 앱을 개발하는 툴들의 악명을 너무 많이 들어서 대체 왜 그런가 했는데 이 세션 들으면서 알았습니다.

## Flamingo

첫 번째로 `Android Studio`의 새 버전인 `Flamingo`에 대한 내용이 있었습니다. `Flamingo`에서는 `build option default values`가 완전히 반대로 바뀌어서 툴 하나 업데이트했다고 앱 빌드 안되면 개열받을 거 같지만 그래도 이런 데에서 알려주니까 대부분의 개발자분들은 문제없을 거 같다는 생각이 들었고요.

![build option default values](/Google-IO-Extended-Build-Option-Default-Values.jpg)

이다음 내용부터가 저는 꽤 충격적이었는데요. 빌드를 할 때 Task를 카테고리별로 그룹화해준다는 겁니다.

> 빌드를 할 때 Task를 카테고리별로 그룹화해주지 않았다는 건 Task 카테고리별 그룹화가 없을 땐 그냥 무작위로 막 보여줬나? 그러면 빌드 시간에 문제 생기는 애들을 내가 하나하나 스크롤 하면서 찾아야 해?

라는 생각이 들면서 머리 속이 난리가 났지만 여태껏 안드로이드 개발자분들 문제 없이 잘 개발하셨으니까 저 혼자 호들갑 떨었을 가능성이 매우 높습니다.

![build analyzer task](/Google-IO-Extended-Build-Analyzer-Task.jpg)

테마 혹은 컬러 팔레트에 따라 바뀌는 앱 아이콘을 미리 볼 수 있다는 내용도 있었습니다. 이건 뭐 그냥 아이콘 넣어놓으면 알아서 할 테니까 문제가 없지 않나 싶긴 했었는데요.

> 실 기기에서는 똑바로 안 나올 수 있고 사이즈를 잘못 넣어서 난리가 날 수도 있는 건데 이걸 확인하고 싶으면 여태 실기기를 가져와서 확인해야 하는 거였구나

라는 생각과 왜 이런 아이콘을 적용하는 앱들이 매우 적은지 알게 되었습니다. 한편으로는 거의 모든 시스템 앱에 이런 아이콘을 적용하는 삼성 개발자분들이 엄청나 보였고요.

![theme icon preview](/Google-IO-Extended-Theme-Icon-Preview.jpg)

아이콘도 미리 보기 지원 안 했으니까 앱 안에서 사용되는 Dynamic Color도 당연히 안됐겠죠? 네, 그렇더라고요. 근데 이것도 지원해 준대요 `Flamingo`부터요...

![dynamic color preview](/Google-IO-Extended-Dynamic-Color-Preview.jpg)

앱을 수정하고 그 수정 내역을 바로 확인해 볼 수 있는 Live Edit에서 Compose를 수정하면 바로 수정사항이 반영이 안됐다고 하더라고요. 근데 이제부터는 아주 잘 된다고 합니다.

![Live edit for compose](/Google-IO-Extended-Live-Edit-Compose.jpg)

그리고 원래 실기기에서 앱을 보려면 폰을 옆에 두거나 다른 앱 사용해서 미러링을 해야만 실기기 화면을 볼 수 있다고 하는데 이제는 미러링을 `Android Studio` 안에서 할 수 있대요. 이건 좀 멋진거 같았어요.

![mirroring](/Google-IO-Extended-Mirroring.jpg)

## Hedgehog

두 번째로 `Android Studio`의 베타 버전인 `Hedgehog`에 대한 내용이었습니다. `Hedgehog`에서는 `Studio Bot`이라는 LLM 기반의 봇이 추가되었다고 하는데요. 근데 아무리 실험 단계라고 하지만 그렇게 똑똑해보이진 않더라고요. 분명 구글은 AI 중심이라고 했었는데... 좀 그렇네요.

![studio chat](/Google-IO-Extended-Studio-Chat.jpg)

`AI Assistant`와의 비교도 있었는데, 아무것도 모르는 제가 봐도 `AI Assistant`가 똑똑한게 보여요. 근데 아직까지는 미국에서만 사용 할 수 있다니까 한국 정식 지원을 할 때 쯤이면 `Github Copilot Chat`, `AI Assistant`보다 더 나은 모습을 보여줬으면 좋겠습니다.

![AI Assistant](/Google-IO-Extended-AI-Assistant.jpg)

그 외에도 `Hedgehog`의 여러가지 신기능에 대한 언급이 있었는데요. 이건 제가 좀 알지 못하는 부분이라 이해에 어려움이 있었습니다.

![New Compose Multipreview templates](/Google-IO-Extended-New-Compose-Multipreview-Templates.jpg)
![Embedded Layout Inpector](/Google-IO-Extended-Embedded-Layout-Inpector.jpg)

이 모든 발표를 마친 후에 핵심 내용이 담긴 자료도 있었으니 보고 싶은 분들은 보시고요.

![Flamingo](/Google-IO-Extended-Flamingo.jpg)
![Hedgehog](Google-IO-Extended-Hedgehog.jpg)


# Google Cloud Security Story

---

앞 세션을 마친 후에 저는 다음 세션을 들으러 갔고요. 구글 클라우드에서 보안 일을 하시는 서진원 님의 `Cloud`와 `On Premise`, `캡챠`에 관한 내용들이었습니다.

## Cloud vs On Premise

`Cloud`와 `On Premise` 방식에는 보안상 많은 차이가 존재한다고 이야기 해주셨는데요. `On Premise` 방식은 보안문제가 발생하고 보안 문제를 인식 하는데까지 운이 좋으면 바로 인식 할 수 있지만 그렇지 않은 경우가 매우 많으며 만약 인식했다고 하여도 꽤 많은 시간이 소요된다고 합니다.

![On Premise](/Google-IO-Extended-On-Premise.JPEG)

반면 `Cloud` 방식은 `Cloud API`를 통하여 자동으로 대응을 실행하는데, 이 과정이 5초도 안된다고 해서 꽤 놀라웠습니다.

![Cloud](/Google-IO-Extended-Cloud.JPEG)

예전에는 `Cloud`를 사용할까 `On Premise`를 사용할까 고민하는 추세였다면 요즘에는 언제 넘어갈까 고민하는 추세라고 하고요. 잘 모르는 제가 들어봐도 이렇게 쉬우면 당연히 `Cloud` 공부 필수가 맞는 거 같습니다. 이다음에는 `Google Cloud`를 이용하게 되면 고객이 걱정하는 것들에 대해서도 말을 해주셨는데요. `Google Cloud`에서 원할 때 언제든 고객의 데이터에 접근해 빼돌릴 수 있다는 이야기를 자주 들으신다고 하는데 서버 랙 사용 기록, 서버실 출입 기록 모두 기록되며 직원마다 접근 권한이 다르기 때문에 혼자서 하는 건 어렵고 여러 명이 뭉쳐서 한다고 해도 많은 어려움이 있을 것이라고 말씀해 주셨습니다.

![Defense in depth](/Google-IO-Extended-Defense-In-Depth-At-Scale.JPEG)

근데 `Google Cloud`가 아닌 `Google Cloud`에서 납품받는 서버에 하드웨어 백도어가 있을 때도 보안 대책이 있다고 합니다. `Titan`이라는 보안 모듈과 자체 제작 OS를 이용해서 시스템 무결성 검사를 하고 이 검사를 통과하지 못한 서버는 OS 단에서 아예 배제를 시켜버린다고 하네요.

![Titan](/Google-IO-Extended-Titan.JPEG)

Google Cloud에서는 여러 보안 제품을 사용하고 있는데, 이게 모두 외산 Framework입니다. 근데 왜 국산을 쓰지 않냐는 의문이 들 수 있죠. 국내에는 이런 Framework가 아예 없다고 합니다. 매우 안타까운 부분이고요.

![Secure framework](/Google-IO-Extended-Google-Cloud-Secure-Framework.JPEG)

업무할 때도 여러 보안 대책이 있다고 합니다. `Google Workspace`를 이용해서 메일로 들어오는 바이러스 파일을 거르고 그 파일이 걸러지지 않을 경우 `Chrome`이 한 번 더 검사를 한다고 합니다. `Chrome`은 탭 하나하나가 모두 엔진이기 때문에 문제가 되는 탭을 닫게 되면 다른 탭에는 전혀 영향이 끼치지 않는다는데 그래서 램을 많이 먹는다고 하는데 뭐 어쨌든 엄청 멋졌고요. 그리고 구글 검색 크롤러가 하루 약 10억 개의 사이트를 돌며 검사하는데 1백만 개의 악성코드 데이터베이스를 업데이트해서 `Chrome`이 바이러스를 탐지하는데 돕는다고 했고 `ChromeOS`를 업무에 사용해서 마지막까지 설치가 안 되게 완벽하게 막는다고 했는데 진짜 멋졌습니다.

![Ransomware mitigation](/Google-IO-Extended-Ransomware-Mitigation.JPEG)

그다음에 막 Google Cloud에서 여러 보안 인증도 받고 그랬다고 이야기 해주셨는데 여긴 너무 어려워서 제가 이해를 못했습니다.

## reCAPTCHA

Google Cloud 이야기 끝나고 `reCAPTCHA` 이야기를 해주셨습니다. 다들 `reCAPTCHA`가 뭔지 아시죠? 그 어디 들어갈 때 '로봇입니까?' 이렇게 물어보고 계속 나한테 사진 고르라고 하는 삐져나온 부분 골라야 할지 안 할지 맨날 헷갈리는 그거 맞습니다. 팁을 하나 주셨는데 삐져나온 부분도 선택을 해야 한다고 하고요. 만약에 그거 선택 안 하면 계속 어려워질 수도 있다고 하고요. `reCAPTCHA`의 버전들을 보여주셨는데요. 저희에게 가장 익숙한 `reCAPTCHA 2.0`부터 최근 나온 `reCAPTCHA Enterprise`까지 보여주셨습니다.

![reCAPTCHA history](Google-IO-Extended-ReCAPTCHA-History.JPEG)

그 중 `reCAPTCHA Enterprise`의 동작 흐름도를 보여주셨는데요. 유저가 페이지에 접속하면 `user agent`를 받아서 Google 서버로 던진 다음에 이 `user agent`에 0.1부터 1까지의 점수를 매긴 후 0.5 이상이면 통과 시킨다고 합니다. 대체로 0.1, 0.2, 0.3, 0.7, 0.8, 0.9 정도의 숫자가 많고 중간 정도의 숫자는 적다고 합니다. 그냥 유저가 접속 하기만 해도 `reCAPTCHA` 인증이 되는게 엄청 멋졌습니다.

![reCAPTCHA Enterprise](/Google-IO-Extended-ReCAPTCHA-Enterprise.JPEG)

이 세션은 처음부터 끝까지 멋지다와 재밌다 두가지의 감정에서 왔다갔다 하는 재미있는 세션이였습니다. 만약 한번 더 들을 수 있다면 한번 더 듣고 싶어요.

# 일 잘하는 개발자는 회사에서 어떻게 일할까?

---

이 세션은 헤이딜러에서 근무하시는 박상권 님의 세션이었고요. 이 세션에서는 기술 관련 내용과 코드 한 줄이 없었습니다. 박상권 님께서 발표하시면서 고인물 개발자 형이 썰 풀어주는 것처럼 편하게 들으면 된다고 하셨었는데, 진짜 그렇게 들었습니다. 사진은 찍었는데 다 텍스트로 설명이 가능 한 부분이어서 이 글에는 아마 사진이 없을 겁니다.

## 암묵지 없애기

만약 우리가 처음 회사에 들어왔다고 가정해봅시다. 서비스 도메인에 대한 지식이 아예 없겠죠. 그러면 업무 하는데에 꽤 지장이 있을 수 있습니다. 또한 회사를 다니고 있는 사람들 끼리도 서비스 도메인에 대한 생각이 다를 수 있고요. 그래서 이러한 암묵지들을 어디에는 정리해야한다고 합니다. 대신에 이 암묵지를 정리하는 것은 누구도 고민하지 않았던 문제라던가 규칙이 있는 문제를 수정하는 것이 아닌 모두 고민했지만 명확하게 정하지 않았던 것에 정하고 규칙이 없는 것에 만들고 이름이 없는 것에 정하려고 하는 것이라고 합니다.예를 들어주신 것은 저 화면에선 `X` 버튼인데 다른 화면에서는 `<-`거나, 저 영역에는 스켈레톤이 있지만 다른 곳에서는 없는 이유가 무엇인지 같은 것들 말이죠.

## 기술로만 해결하려고 하지 않기

문제를 해결하기 위해 방법을 찾을 때 기술적으로만 해결하려고 하면 안 된다고 합니다. 통화대기 시간이 길다는 CS를 받았을 때 통화 연결음에서 나는 `뚜~` 소리를 좀 길게 한다거나, 엘리베이터가 느리다는 CS가 들어왔을 때는 엘리베이터에 거울을 설치하는 이런 방법으로도 문제를 해결해야 한다고 합니다. 또한 디자이너 혹은 다른 누군가가 무엇을 요구했을 때에도 안된다고 말하기보다는 다른 대안을 제시하는 것이 더 좋은 방향이라고 합니다.

## 최적의 개발방향을 찾기

기획자가 해결한 방법보다 내가 더 나은 방향을 알고 있다면 주저 없이 제안해야 한다고 합니다. 완성도가 5% 정도 떨어지지만 개발 시간을 80% 이상 단축할 수 있는 문제를 해결하는 가장 빠르고 확실한 방법은 무조건 제안해야 합니다. 내 개발 방식보다 고객의 문제를 해결하는 더 좋은 구현을 고민해야 한다고 합니다. 내가 1달 동안 야근을 해서 짠 코드라도(물론 그렇다고 말하면서 다른 대안을 제시할 수도 있지만) 집착해서는 안 됩니다. 또한 누가 이렇게 시켰다고 해서 무조건 그렇게 하는 것이 아닌 관성적으로 개발해온 업무방식이나 코드를 더 좋은 방식으로 개선할 수 있습니다.

## 모든 것을 기록하기

말로 논의한 회의 등도 모두 기록해 기억이 안날 때 검색하고 누가 왜 그렇게 했는지 또는 참고가 필요할 때 많은 도움이 될 수 있습니다. 또한 뭔가 물어보거나 할 때 개인 DM보다는 공개 채널을 이용해 비슷한 내용에 대한 문의나 요청을 막을 수 있고 누구든 그 소통 기록을 찾아볼 수 있어서라고 합니다. 한일과 해야 할 일을 명확히 정리해 어떤 것을 했고 무엇을 해야 하는지도 정리해야 합니다. 또한 내가 그 일을 당장 할 수 없다면 까먹기 전에 리마인더를 작성해 놓는 것도 좋고요. 회고는 마치 오답노트와 같다고 합니다. 어떤 목표를 가지고 업무를 했는지, 어떤 부분이 부족했는지, 다음에 어떤 시도를 할지 적어 놓는 등 매우 중요한 역할을 하는 것이 회고인데요. 대충 연말만 되면 몇 년도 회고 이런 식으로 작성을 많이 하는데 최소한 분기에 한 번씩은 해야 좋다고 합니다.

이 세션은 개발자 뿐만 아니라 많은 직업군에서 도움이 될만한 내용을 많이 가지고 있다고 생각하는 세션이였어요. 이 세션을 참여하시는 분들이 제일 많았던거 같아요.

# Go 언어에서의 패키지 취약성 관리와 deps.dev API를 활용하여 다른 언어에서 이를 구축하는 방법

---

이 세션은 당근마켓에서 근무하고 계신 이태현 님께서 패키지 취약성 관리를 하는 법을 다룬 세션을 진행해 주셨습니다. `Go`와 `python`을 예시로 보여주셨었습니다.

## govulncheck를 이용한 패키지 활용법

먼저 `CLI`를 사용해서 `govulncheck`를 사용하는 방법입니다. `govulncheck .`을 `CLI`에 입력하게 되면 `govulncheck`가 파악하고 알아서 취약점이 있는 모듈을 업데이트 해줍니다.

![govulncheck CLI](/Google-IO-Extended-Govulncheck-CLI.JPEG)

그 다음은 `IDE(Virtual Studio Code)`를 이용한 방법이였습니다. `setting.json`에 다음과 같이 입력하면 됩니다.

![govulncheck IDE](/Google-IO-Extended-Govulncheck-IDE.JPEG)

그렇게 입력하고 나면 그 다음부터 `IDE(Virtual Studio Code)`에서 다음과 같이 표시되며 패키지 취약성을 확인 할 수 있습니다.

![govulncheck IDE warming](/Google-IO-Extended-Govulncheck-IDE-Warming.JPEG)


다음은 `makefile`을 이용한 방법입니다. 아래와 같은 파일을 생성합니다.

![govulncheck makefile](/Google-IO-Extended-Govulncheck-Makefile.JPEG)

그 후에 CLI에 다음과 같이 입력하면 `govulncheck .`와 같은 일을 수행하게 됩니다.

![govulncheck makefile warming](/Google-IO-Extended-Govulncheck-Makefile-Warming.JPEG)

마지막으로 `pre-commit`을 사용하는 방법이고요. 이 방법은 `production`에 전혀 영향을 끼치지 않고 내가 `git commit` 하기 전 알아서 해결해주는 방법으로 개인적으로 저는 이 방법이 제일 좋다고 느껴졌습니다.

`.git/hooks/pre-commit` 파일에 아래와 같이 저장 후 권한을 755로 설정하면 `git commit`시 실행됩니다.

![govulncheck pre-commit](/Google-IO-Extended-Govulncheck-Pre-Commit.JPEG)

## python에서 사용하기

이렇게 멋지게 패키지에 취약점을 알고 취약점으로 공격 들어오는 것들을 막을 수 있는데요, 이걸 `go`에서만 사용하긴 아깝죠? 그래서 이걸 `python`에도 써봅시다. 우선 `pip`를 이용해 `fastapi`라는 모듈을 설치해요.

![govulncheck python pip](Google-IO-Extended-Govulncheck-Python-Pip.JPEG)

그다음 아래와 같이 `python` 파일을 작성합니다.

![govulncheck python parser](/Google-IO-Extended-Govulncheck-Python-Parser.JPEG)
![govulncheck python main](/Google-IO-Extended-Govulncheck-Python-Main.JPEG)

이렇게 작성해 줬으면 이제 `main.py`를 실행시켜보면 아래와 같이 잘 잡고 잘 해결합니다.

![govulncheck python warming](Google-IO-Extended-Govulncheck-Python-Warming.JPEG)

근데 위에서는 `pip`를 사용해 모듈 설치를 했는데 저러면 패키지 지울 때 종속성 패키지는 삭제가 안된다고 하고요. `poetry` 사용하면 같이 삭제된다고 합니다. 알고 계시면 좋을 거 같고요.

# 엑티비티

---

한 세션 끝나고 다음 세션 기다릴 동안 20분 정도의 쉬는 시간이 있습니다. 그 쉬는 시간 동안 여러 엑티비티를 즐길 수 있는데요. 저는 친구 없어서 `리뷰보드`, `내 마음 속에 캡챠`, `Dart & Flutter` 정도만 즐겼고요. `Devocean` 부스에서 앱 깔고 인증하면 추첨을 통해서 상품 준다고 했는데 전 역시 운이 진짜 없어서 아무것도 못받았습니다.

## 리뷰보드

이거는 포스트잇에 후기 쓰면 종이 뽑기를 할 기회가 있는데요. 이거 4, 5등은 `JetBrains` 스티커였고 3등이 아마 `JetBrains 티셔츠`였을 거고요 2등이 개발 책 1권 1등이 `JetBrains 1년 이용권` 이였습니다. 아까도 말했던것처럼 전 운이 정말 없어서 5등만 나왔습니다. 근데 `PyCharm`, `IntelliJ` 스티커가 마음에 들어서 만족스럽습니다.

![JetBrains sticker](/Google-IO-Extended-Build-JetBrains-Sticker.jpg)

## 내 마음 속에 캡챠

`캠릿브지 대학의 연결구과` 같은 한국인만 읽고 해석할 수 있는 문장을 적은 뒤에 `reCATCHA`를 풀면 되는 것이었는데요. 30초 이내에 풀면 책 한 권이어서 도전했습니다. 저번 세션에서 `reCATCHA` 잘 푸는 팁을 얻었기 때문에 21.96초 만에 풀고 예전에 읽고 싶었던 책 하나 받아 갔습니다. 근데 이거 `React`로 만드셨던데 왜인지 모르겠지만 `PWA`가 적용되어 있더라고요.

![interactive developer](Google-IO-Extended-Interactive-Developer.jpg)

## Dart & Flutter

다트 3번 던져서 몇 점 이상이면 상품 주는 거였는데 이게 몇 점 이상이었는지 상품이 뭐였는지도 기억이 안 났습니다. 저는 다트 개 못해서 한 개도 못 맞췄고요 근데 줄 서 있다가 `JetBrains` 티 받았어요.

![JetBrains t-shirts](/Google-IO-Extended-JetBrains-T-Shirts.jpg)

다른 것들도 해보고 싶었는데, 줄이 길거나 친구가 있어야 하거나 그래서 못했고요. `도전 코딩 연습`과 `내 마음속의 캡챠`는 리더보드를 `vim 에디터`를 사용하는 것이 매우 인상 깊었고요. 개발자 행사라는 게 많이 느껴졌습니다.


# 굿즈

---

행사 참여자는 굿즈 수령이 가능했는데요. 굿즈에는 Google Extended 티와 스티커, 실로 되어있는 에코백이라고 해야 할지 뭐 그런 거였습니다. 에코백은 행사에서 주는 거만 넣고 다녔는데 거의 다 늘어졌고요. 완벽하게 막힌 게 아니라 그냥 구명이 다 나있는 디자인이라 뭐 어떻게 사용하지는 못할 거 같아 아쉬웠습니다.

티는 깔끔하고 이뻤습니다. 근데 평소에 입고 다니지는 못할 거 같아 아쉬웠고요. 스티커들도 모두 이뻤습니다. 끝나고 애플스토어 강남 갔는데 애플스토어 가기 전에 삼성 강남 갔다 온 거 때문에 직원분들이 이리저리 말을 거시던데 그 과정에서 굿즈 받은 거 자랑하면서 스토어 직원분께서 하나 가지고 싶어 하시길래 하나 드렸고요. 애플스토어 강남이랑 삼성 강남도 조금 있다가 글 쓸게요.

![Google Extended t-shirts](/Google-IO-Extended-Google-Extended-T-Shirts.jpg)
![Google Extended sticker](/Google-IO-Extended-Google-Extended-Sticker.jpg)

정말 재밌었고요. 다음에는 누구랑 같이 가면 더 재밌을 거 같다는 생각이 들었습니다. 긴 글 읽어주셔서 감사합니다.