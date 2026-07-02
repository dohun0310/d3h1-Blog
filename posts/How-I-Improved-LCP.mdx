---
teaser: /How-I-Improved-LCP-Teaser.jpg
category: 개발
title: 내가 LCP를 개선한 방법
date: 2025-11-10T00:08:00+09:00
---

따로 글을 쓰지 않았지만, 최근 블로그를 개선하는 작업을 하고 있습니다. 이 블로그는 2023년 `Jekyll`를 이용하다, `Next.js`를 기반으로 `Contentlayer`라는 종속성에 의존하여 개발되었었습니다.

최근 제가 작성했던 코드들을 개선하고자 블로그를 최근 `@next/mdx`에 의존하도록 변경하고, 여러 문제점을 해결해나가는 중에 `LightHouse` 검사의 성능 점수가 낮게 나와 이를 분석하고 해결한 경험에 대해 이야기 해보려 합니다.

# `LCP`가 뭔가요?

---

`Largest Contentful Paint`를 줄여서 `LCP`라고 부르니 저도 이제부터 그렇게 부르겠습니다.

`LCP`는 사용자가 페이지를 로딩 할 때를 기준으로 표시되는 가장 큰 이미지, 동영상 등의 렌더링 시간을 의미합니다.

[Google](https://web.dev/articles/lcp)에서는 2.5초 이하면 좋다고 언급하였지만, 일단 검사 결과 개선 방안을 제안해줬으니 살펴보겠습니다.

# 성능 점수가 왜이리 낮을까?

---

`Lighthouse` 검사를 블로그 메인 화면에서 실행하면 성능 점수는 87점, `LCP`는 2.4초였습니다.

![Lighthouse result](/How-I-Improved-LCP-Lighthouse-Result.png)

`Lighthouse`는 성능을 개선 할 수 있도록, 인사이트를 제공해줍니다. 인사이트의 내용은 다음과 같았습니다.

![Lighthouse Insights](/How-I-Improved-LCP-Lighthouse-Insights.png)

문제는 이미지가 렌더링 되는 크기에 비해 지나치게 큰 이미지를 로딩하는 것과 이미지 로딩 우선 순위가 정해지지 않았다는 것이였습니다. 두 내용 모두 이미지 최적화가 필요하다는 뜻 입니다.

# 해결해보자!

---

`Lighthouse`에서는 이러한 성능 문제를 해결 할 수 있도록 해결 방안도 제시해줍니다.

이미지 로딩 우선 순위가 정해지지 않은 문제의 경우 `fetchpriority` 속성을 사용해야하고, `lazy loading`이 적용되지 않았다는 언급이 되어 있습니다.

![Lighthouse Priority](/How-I-Improved-LCP-Lighthouse-Priority.png)

대부분의 PC의 경우 제 블로그 메인 페이지에 접속하였을 때, 4개의 이미지가 먼저 보입니다. 이 이미지들만 먼저 로딩하도록 최적화 하기로 했습니다.

제 블로그의 글 목록에 표시되는 이미지들은 `Next.js`에서 제공하는 `Image` 컴포넌트를 사용합니다.

`Image` 컴포넌트에 상위 4개 이미지에만 `fetchPriority` 속성을 `high`, `loading` 속성을 `eager`로 설정했습니다.

나머지는 `fetchPriority` 속성을 `low`, `loading` 속성을 `lazy`로 설정하여 이미지 로딩 우선 순위를 명확히 하였습니다.

이미지가 표시되는 크기에 비해 제공되는 이미지가 너무 크다는 문제에 대해서는 어떠한 개선 방안을 언급해주지는 않았습니다.

![Lighthouse Image Size](/How-I-Improved-LCP-Lighthouse-Image-Size.png)

하지만, `Next.js`의 `Image` 컴포넌트에 대한 공식 문서 중, [`sizes`](https://nextjs.org/docs/app/api-reference/components/image#sizes)에 대한 내용을 보고 이를 이용하여 문제를 해결하면 될 것 같았습니다.

블로그의 메인 페이지는 너비 685px 이상의 기기에서 글 목록을 두 칸으로 나누고, 미만의 기기들에서는 글 목록을 한 칸으로 표시합니다.

이를 기준으로 너비 685px 이상의 기기에서는 이미지를 뷰 포트 절반의 너비로 제공하고, 미만의 기기들에서는 뷰 포트 전체의 너비로 제공합니다.

# 해치웠나

---

수정 사항을 적용한 결과를 `Vercel`를 통하여 배포해보고 다시 확인해보았습니다. 결과를 확인해보니, `Lighthouse` 성능 점수가 향상되었습니다.

`Lighthouse` 검사를 블로그 메인 화면에서 실행하면 성능 점수는 100점, `LCP`는 0.4초였습니다.

![Lighthouse improve result](/How-I-Improved-LCP-Lighthouse-Improve-Result.png)

무선 인터넷 품질이 좋지 않은 곳에서 가끔씩 제 블로그에 접속 할 때, 일부 글 목록의 이미지가 렌더링 되지 않는 문제가 더 이상 발생하지 않는 부수적인 효과도 얻었습니다.