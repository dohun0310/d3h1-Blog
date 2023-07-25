---
teaser: /I-made-a-blog-using-jekyll-teaser.jpg
category: 개발
title: Jekyll를 이용해 블로그를 만들었습니다.
date: 2023-05-21
description: Jekyll를 이용해 블로그를 만든 경험을 공유합니다.
---

안녕하세요. 오늘은 블로그를 개설하고 처음 제대로 된 글을 작성해보려고 합니다. 이 블로그를 만든 경험과 사용된 코드들을 공유하려고도 합니다.

# 블로그가 가지고 싶어!
---
어느 날, 자기 전에 블로그가 가지고 싶다는 생각이 들었습니다. 급하게 이불을 걷어 차고 책상 앞에 앉아 주로 사용되는 티스토리와 네이버 블로그를 비교하기 시작했습니다.
* 티스토리: 수익 창출 가능, 커스텀 가능, 서버의 불안정성 높음, 커스텀을 많이 할 경우 느려짐
* 네이버 블로그: 수익 창출 불가능, 커스텀 불가능, 서버의 안정성 높음, 기본 UI도 깔끔함

이렇게 비교를 하고 보니까 티스토리와 네이버 블로그 모두 사용하고 싶지 않아졌습니다. 일단 마음대로 커스텀 할 수 있는 티스토리는 커스텀을 하면 할수록 블로그가 느려지고 네이버는 커스텀 가능한 부분 자체도 적었고 개인 사용자는 수익 창출이 불가능이나 마찬가지였고 구글에서 검색을 할 경우 노출도 잘되지 않거든요. 게다가 두 플랫폼 모두 에디터가 엄청나게 무겁고 별로입니다.

그래서 그냥 직접 만들기로 하였습니다.

# 블로그를 만들자!
---
ReactJS를 사용할지 NextJS를 사용할지 생각하다가 '백엔드는 어떻게 하지?'라는 생각이 들었습니다. 사실 ReactJS나 NextJS를 이용해 프론트엔드를 작업하고 포스팅할 때마다 js 파일을 생성하면 백엔드 작업이 그렇게 복잡해지지 않을 텐데 그러면 뭔가 별로라는 생각이 들어 다른 대안이 있지 않을까 열심히 검색해 보았습니다.

<br/>

검색을 한 결과 [Jekyll](https://jekyllrb.com/)를 이용해서 블로그를 만들면 제가 원하는 블로그를 만들 수 있다는 결과에 도달했습니다. 테마가 다양하고, 내 입맛대로 커스텀 할 수 있고, 수익 창출이 가능하고 제가 등록만 한다면 모든 포털 사이트에 제 블로그를 노출시킬 수 있는 방법이었으니까요.

# Jekyll 시작하기
---
저는 WSL2를 이용해 VSC를 사용하는 개발 환경입니다. 제 환경에서 Jekyll 프로젝트를 시작하기 위해서는 아래와 같은 명령을 터미널에 입력해 필요한 패키지를 설치하면 되었습니다.
```bash
sudo apt install ruby-full build-essential zlib1g-dev
sudo gem install jekyll bundler
```
필요한 패키지들을 모두 설치하였으면 Jekyll 프로젝트를 만들고 싶은 경로에 진입하여 아래와 같은 명령어를 입력하면 Jekyll 프로젝트가 생성됩니다.
```bash
jekyll new 프로젝트명
```
이렇게 프로젝트를 생성하고 나서 생성된 폴더로 들어가 아래와 같은 명령어를 입력합니다.
```bash
sudo bundle install
jekyll serve
```
이렇게 하고 [127.0.0.1:4000](127.0.0.1:4000)를 웹 브라우저의 주소창에 입력하고 접속하면 Jekyll의 기본 테마인 minima가 적용된 Jekyll 화면을 아래와 같이 확인 할 수 있습니다.

![minima](/Jekyll-minima.png)

# Jekyll 프로젝트에 테마 적용하기?
---
이렇게 Jekyll 프로젝트를 처음 만들게 되면 심심하다 못해 재미없어 보이는 Jekyll의 기본 테마가 적용된 모습을 확인할 수 있는데요. 하지만 저는 이런 재미없는 테마보다는 더욱 개성 있고 이쁜 테마를 Jekyll에 적용해 보고 싶었습니다. 그래서 Jekyll의 테마가 모여있는 [Jekyll Themes](http://jekyllthemes.org/)에 접속하여 인기 있는 테마 몇몇 개를 적용해 보았습니다.

<br/>

하지만 제 마음에 드는 테마가 없었고 그래서 제 블로그를 제 입맛에 맞게 제가 직접 한번 꾸며보려고 하였습니다. 마침 주변에 멋진 디자인을 만드는 멋진 사람이 있었고 부탁을 해 마음에 꼭 맞는 디자인을 받아볼 수 있었습니다.

![first-design](/Blog-first-design.png)

만들기 어려워보이는 부분이 있어 제가 조금 다듬고 그것에 맞추어 저만의 블로그를 만들기 시작했습니다.

![light-design](/Blog-light-design.png)![dark-design](/Blog-dark-design.png)

# Jekyll 프로젝트 완성하기
---
저는 PWA(Progressive Web App)을 매우 좋아하는 편이여서 가장 먼저 적용하기로 하였습니다. [PWABuilder](https://www.pwabuilder.com/imageGenerator)를 사용하여서 PWA에 사용할 `manifest.json`과 아이콘 파일들을 다운로드해서 `manifest.json`은 Jekyll 프로젝트 경로 최상단에, 아이콘 파일들은 `assets` 폴더에 저장하였습니다. 그다음 `head.html`의 `head` 태그가 끝나기 전 아래와 같은 코드 한 줄을 추가해 주면 PWA는 활성화됩니다.

```html
<link rel="manifest" href="{{ '/manifest.json' | relative_url }}">
```

`head.html`을 건드린 김에 `OpenGraph`와 `favicon`, `title`도 적용해 보겠습니다.

<br/>

먼저 `favicon`을 적용시켜보겠습니다. [Favicon & App Icon Generator](https://www.favicon-generator.org/)를 사용하여 `favicon.ico` 파일을 얻습니다. 그 후, 얻은 `favicon.ico` 파일을 `assets` 폴더에 `favicon.ico` 파일을 저장하고, `head.html`의 `head` 태그가 끝나기 전 아래와 같은 코드 한 줄을 추가해 주면 `favicon`이 표시되는 것을 확인할 수 있습니다.

```html
<link rel="icon" href="{{ '/assets/favicon.ico' | relative_url }}" type="image/x-icon" sizes="32x32">
```

이제 `OpenGraph`와 `title`을 적용시켜보겠습니다.

<br/>

`OpenGraph`에서 표시될 이미지를 `opengraph.png`로 이름을 변경 후 `assets` 파일 안에 저장하고, `head.html`의 `head` 태그가 끝나기 전 아래와 같은 코드들을 추가 후 알맞게 수정해 준다면 `OpenGraph`와 `title`이 표시될 것입니다.

```html
{% raw %}{% if page.teaser %}
  <meta property="og:image" content="{{ page.teaser }}">
  <meta property="twitter:image" content="{{ page.teaser }}">
{% else %}
  <meta property="og:image" content="{{ '/assets/opengraph.png' | relative_url }}">
  <meta property="twitter:image" content="{{ '/assets/opengraph.png' | relative_url }}">
{% endif %}

{% if page.title %}
  <title>{{ page.title }} | 블로그 이름</title>
  <meta name="title" content="{{ page.title }} | 블로그 이름">
  <meta property="og:title" content="{{ page.title }} | 블로그 이름">
  <meta property="twitter:title" content="{{ page.title }} | 블로그 이름">
{% else %}
  <title>블로그 이름</title>
  <meta name="title" content="블로그 이름">
  <meta property="og:title" content="블로그 이름">
  <meta property="twitter:title" content="블로그 이름">
{% endif %}

{% if page.description %}
  <meta name="description" content="{{ page.description }}">
  <meta property="og:description" content="{{ page.description }}">
  <meta property="twitter:description" content="{{ page.description }}">
{% else %}
  <meta name="description" content="새로운 것을 즐기고, 변화를 만들고">
  <meta property="og:description" content="새로운 것을 즐기고, 변화를 만들고">
  <meta property="twitter:description" content="새로운 것을 즐기고, 변화를 만들고">
{% endif %}

<meta property="og:type" content="website">
<meta property="og:url" content="블로그 주소">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="블로그 주소">{% endraw %}
```

이 코드는 `_post`에 작성될 글에 아래와 같이 선언되어 있어야 완벽하게 작동합니다.

```yaml
---
layout: post
title: "제목"
teaser: "teaser 경로"
category: category 이름
description: "설명"
---
```

이제, 외관을 꾸며보겠습니다. 먼저 `home.html`부터 수정해 보겠습니다.

```html
{% raw %}---
layout: default
---
<header class="header">
  {{ content }}
</header>

<div id="content">
  
  <ul class="category">
    <li>
      <a class="category-link {% if page.url == "/" or page.url contains "page" %} active{% endif %}" href="{{ site.baseurl }}/">
        메인
      </a>
    </li>
    {% assign pages_list = site.pages %}
    {% for node in pages_list %}
      {% if node.title != null %}
        {% if node.layout == "category" %}
          <li>
            <a class="category-link {% if page.url == node.url %} active{% endif %}" href="{{ site.baseurl }}{{ node.url }}">
              {{ node.title }}
            </a>
          </li>
        {% endif %}
      {% endif %}
    {% endfor %}
  </ul>

  <ul class="post-list">
    {% assign date_format = site.minima_reboot.date_format | default: "%b %-d, %Y" %}
    {% for post in site.posts %}
      <a href="{{ post.url | relative_url }}" class="post">
        <div class="teaser">
          <img src="{{ post.teaser }}" alt="{{ post.title }} teaser image"/>
        </div>

        <span class="date">
          {{ post.date | date: date_format }}
        </span>

        <h1 class="title">
          {{ post.title | escape }}
        </h1>

        <div class="description">
          <p>
            {{ post.description }}
          </p>
        </div>
      </a>
    {% endfor %}
  </ul>

</div>{% endraw %}
```

`category` 버튼들은 a 태그를 사용해 만들고 해당 `category` 페이지에 있을 때 `active` 되어서 다른 버튼들과는 다르게 표시됩니다. 위에서처럼 `_posts` 폴더에 작성될 글에 잘 선언이 되어 있다면 `post-list`에 `teaser`와 `date`, `title`, `description`까지 정상적으로 출력됩니다. 또한 `category` 기능이 정상적으로 동작하기 위해서는 `category.html`이라는 파일을 `_layouts` 폴더 안에 아래와 같이 작성해야 합니다.

```html
{% raw %}---
layout: default
---
<header class="header">
  <h1 class="content-header">
      {{ page.title }}
  </h1>
</header>

<div id="content">

  <ul class="category">
    <li>
      <a class="category-link {% if page.url == "/" or page.url == "/page2/" %} active{% endif %}" href="{{ site.baseurl }}/">
        메인
      </a>
    </li>
    {% assign pages_list = site.pages %}
    {% for node in pages_list %}
        {% if node.title != null %}
        {% if node.layout == "category" %}
          <li>
            <a class="category-link {% if page.url == node.url %} active{% endif %}"href="{{ site.baseurl }}{{ node.url }}">
              {{ node.title }}
            </a>
          </li>
        {% endif %}
      {% endif %}
    {% endfor %}
  </ul>

  <ul class="post-list">
    {% assign date_format = site.minima_reboot.date_format | default: "%b %-d, %Y" %}
    {% assign category = page.category | default: page.title %}
    {% for post in site.categories[category] %}
      <a href="{{ post.url | relative_url }}" class="post">
        <div class="teaser">
          <img src="{{ post.teaser }}" alt="{{ post.title }} teaser image"/>
        </div>

        <span class="date">
          {{ post.date | date: date_format }}
        </span>

        <h1 class="title">
          {{ post.title | escape }}
        </h1>

        <div class="description">
          <p>
            {{ post.description }}
          </p>
        </div>
      </a>
    {% endfor %}
  </ul>

</div>{% endraw %}
```

`category.html`까지 작성이 완료 되었다면, Jekyll 프로젝트의 최상단에 `category`라는 폴더를 생성 후 그 폴더 밑에 `원하는 카테고리 이름.md`라는 파일을 생성 후 그 파일을 다음과 같이 작성하면 됩니다.

```yaml
---
layout: category
title: 원하는 카테고리 이름
---
```

`header.html`은 다음과 같이 작성하면 됩니다.

```html
<header id="nav-header" class="border-dark border-left-0 border-right-0">
  <div id="nav-container" class="container position-relative d-flex justify-content-between align-items-center">
    <a href="/">
      '자신의 로고 svg'
    </a>
</header>
```

이제 html 수정을 맞쳤으니 `scss`를 작성 해보겠습니다. 먼저 `header`를 화면에 계속 표시하고 블러를 적용하겠습니다.

```scss
#nav-header {
  position: fixed;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
  border-bottom: 1px solid #f8f9fa
}

#nav-container {
  justify-self: space-between;
  align-items: center;
  height: 76px;

  a {
    text-decoration-color: #000000;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
  }
}
```

다음은 `home`에 대한 `scss`를 적용해보겠습니다.

```scss
#content {
  h1, h2, h3, h4 {
    size: 26px;
    text-align: left;
  }
  
  a {
    color: #000000;
    text-decoration: none;
  }

  p {
    a{
      color: #3081f7;
      text-decoration: solid underline;
    }
  }

  .category {
    list-style: none;
    padding: 0px;
    margin: 20px 0;

    li {
      display: inline-block;
      margin-right: 10px;
  
      a.category-link {
        display: block;
        width: 66px;
        height: 40px;
        border: 1px solid #e6e6e6;
        border-radius: 100px;
        background-color: #FFFFFF;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        color: #000000;
        text-decoration: none;
  
        &.active {
          border: none;
          background-color: #000000;
          color: #FFFFFF;

          &:hover {
            background-color: #000000;
            transition: none;
          }
        }

        &:hover {
          background-color: #f0f0f0;
          transition: all 0.5s ease-out;
        }
      }
    }
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px;
    margin: 0px;
    gap: 24px;
  }

  .post {
    width: calc(25% - 18px);

    &:hover {
      .teaser {
        border: 1px solid #cccccc;
        transition: all 0.5s ease-out;
      }

      .title {
        text-decoration: underline;
      }
    }
  }

  .teaser {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .date {
    color: #666666;
    font-size: 12px;
  }

  .title {
    color: #000000;
    font-size: 18px;

    :hover {
      text-decoration: underline;
    }
  }

  .description {
    p {
      display: inline-block;
      color: #666666;
      font-size: 14px;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      line-height: 1.2;
      max-height: 42px;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
```

위 코드는 다음과 같은 역활을 합니다. `content`에 표시되는 `page title`의 글자 크기를 26px로 지정하고, 왼쪽 정렬하게 만듭니다. `category`가 `active`일 때 검정색으로 나오게 만들고 `hover` 시 `ease-out` 효과와 함께 `#f0f0f0`으로 표시되게 만듭니다. `post`의 간격을 8px로 설정하고 `post`에 `hover`시 `teaser`의 `outline`에 애니메이션과 색 변환을 합니다. 이 외에도 모든 스타일링에 관여합니다.

코드블럭을 조금 더 이쁘게 강조하고 싶다면, [Rouge Theme Preview Page](https://spsarolkar.github.io/rouge-theme-preview/)를 사용하여서 자신이 원하는 테마를 찾고 적용하면 됩니다.

<br/><br/>

이렇게 제가 jekyll를 활용해 블로그를 만든 경험을 공유해 보았습니다. 아직 블로그가 완성되었다고 보기에는 어려운 부분이 많습니다. 아직 `paginate`도 적용하지 못하였고, `검색바`도 완성하지 못하였고 `광고` 등 제가 원했던 기능들을 귀찮거나 어려워서 아직 넣지 못하였는데, 블로그를 일단 어느 정도 완성시킨 후 시간이 날 때마다 관련 내용을 포스팅하며 완성시키는 것도 좋을 것 같아 필수적인 부분들만 완성해 보았습니다. 아직 블로그에 무엇을 주제로 올릴지 결정하지 못해 블로그가 조금 난해해질 수도 있는데, 이쁘게 완성시킨 블로그인 만큼 천천히 시간을 들여가며 이쁘게 사용해 보겠습니다. 긴 글 읽어주셔서 감사합니다!