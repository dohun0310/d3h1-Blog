---
teaser: /I-Recreated-The-Blog-Using-Next.js-Teaser.jpg
category: 개발
title: Next.JS로 블로그를 다시 만들었습니다.
date: 2023-07-26T05:50:00+09:00
description: Next.JS를 이용해 블로그를 갈아 엎은 경험을 공유합니다.
---

블로그가 개설된 지 2개월 하고도 1주일이 지났습니다. 올릴 글은 많았지만 올리지 않았습니다. 블로그가 개설된 이후 제가 짜 놓은 코드 꼬락서니가 마음에 들지 않았고 그래서 글도 쓰기 싫어 방치했습니다. 사실 그것도 있고 시간이 많이 없었는데요. 어떤 기회로 `Next-Contentlayer`를 사용하는 프로젝트를 할 기회가 있어서 그 프로젝트로 어느 정도 감을 잡은 후에 제 블로그를 갈아엎어야겠다는 계획을 세웠습니다. 그리고 지금 블로그를 완벽하게 완성시켰죠. 어떻게 만드는지 과정을 공유해 볼까 합니다.

당장 이 블로그 소스 궁금하신 분은 [github.com/dohun0310/d3h1-Blog](https://github.com/dohun0310/d3h1-Blog)에 올려놨으니까 그거 보시면 되겠습니다.

<br />

# 갈아 엎을 시간

---

`Jekyll` 기반의 블로그는 엉망이었습니다. SCSS 파일을 썼는데 한 파일에 블로그의 모든 스타일링을 다 때려 박았으니 알아보기도 엄청나게 힘들었고 그냥 코드를 엄청나게 이상하게 짰습니다. 그리고 디자이너가 준 디자인을 개발하기 힘들다고 갈아엎은 것도 마음에 안 들었어요. 아니 그냥 다 변명이고 제 마음에 안 들었어요.

그래서 생각했죠. 새로 만들고 다 갈아엎어버려야겠다고요. 그래서 어떻게 만들까 하다가 제가 좋아하는 `React.JS`로 만들려고 했는데 제가 존경하는 어떤 분께서 `Next.JS`가 쉽고 좋다고 추천을 해줘서 `Next.JS`를 사용하기로 했고 `Next.JS`에 정적 사이트를 쉽게 만들 수 있도록 도와주는 `Next-Contentlayer`라는 모듈이 있길래 그거 끌고 와서 만들었어요.

이제 뭐 쓸지 다 정했으니까 디자인 받아와야겠죠? 전에 디자인해 주신 분께 모바일 어떻게 만들어야 할지 모르겠다고 말하니까 또 금방 하나 찍어내주셨어요. 멋진 걸로요.

![New design](/Blog-New-Design.png)

<br />

# 제작 시작

---

이제 `Next.JS`로 블로그 제작을 시작해 봅시다. 모두 `Node.JS`랑 `npm` 아니면 `yarn` 아니면 `pnpm`랑 `create-next-app` 하나 정도는 있으시죠? 터미널에 아래와 같이 입력하면 프로젝트 파일이 만들어집니다.

```bash
create-next-app 프로젝트명
```

만드셨으면 필요한 모듈들 설치를 해야 합니다. 아래와 같이 진행해 주시면 됩니다.

```bash
npm install contentlayer next-contentlayer rehype-highlight rehype-pretty-code shiki next-sitemap @emotion/styled @emotion/css @emotion/react

혹은

yarn add contentlayer next-contentlayer rehype-highlight rehype-pretty-code shiki next-sitemap @emotion/styled @emotion/css @emotion/react

혹은

pnpm add contentlayer next-contentlayer rehype-highlight rehype-pretty-code shiki next-sitemap @emotion/styled @emotion/css @emotion/react
```

자신이 사용하는 패키지 매니저에 따라서 알아서 해주시면 되고요. 이 모듈들은 블로그 제작을 돕고 `CSS in JS`를 할 수 있게 해주고 `코드 블록`을 이쁘게 꾸며주는 플러그인들입니다.

모듈 설치다 했으면 이제 본격적으로 코드 짜봐야겠죠. 그전에 설정부터 먼저 해줍시다.

먼저 프로젝트 최상단에 위치한 `next.config.js` 파일에 들어가서 수정해 주세요.

```typescript
//next.config.js

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
```

먼저 프로젝트 최상단에 위치한 `tsconfig.json`도 알맞게 수정해주세요.


```json
//tsconfig.json

{
  "compilerOptions": {
    ...
    ],
    "paths": {
      "@/*": ["./*"], "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".contentlayer/generated", "next-sitemap.config.js"],
  "exclude": ["node_modules"]
}
```

여기까지 하셨으면 최상단에 `contentlayer.config.ts`라는 파일 하나 생성해주시고 아래처럼 작성하시면 됩니다.


```typescript
//contentlayer.config.ts

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    category: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true},
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

const contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        },
      ],
      highlight,
    ],
  },
});

export default contentSource;
```

다른 포털에도 표시 되어야 하니까 최상단에 `next-sitemap.config.js` 파일 하나 만들어서 아래처럼 작성해야 `sitemap`이 생성되기 때문에 다른 포털에 표시될 수 있고요.

```javascript
//next-sitemap.config.js

module.exports = {
  siteUrl: "블로그 주소",
  generateRobotsTxt: true,
}
```

모듈 설정 끝났으니까 코드 짜봅시다.

<br />

# 마크다운 렌더링 하기

---

`Next.JS`가 폴더로 라우팅해서 편하게 우리가 쓸 수 있죠. 저는 도메인 바로 뒤에 아이디가 오는 형식으로 구성하고 싶어서 `app/[...slug]` 경로에 `page.tsx` 파일을 만들었어요. 이거 마음에 안 드시면 공식 문서 참고하셔서 다르게 하셔도 되고요. 

```typescript
//app/[...slug]/page.tsx

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";

import { StyledPost } from "./style";
import { Footer, Giscus } from "@/components";

export const generateStaticParams = async () => allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath.split('/') }}))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    return {}
  }
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "website",
      url: "본인 블로그 주소",
      title: post.title,
      description: post.description,
      siteName: "d3h1 Blog",
    },
    twitter: {
      card: "summary_large_image",
      site: "본인 블로그 주소",
      title: post.title,
      description: post.description,
    },
  }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  
  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <StyledPost>
      <div className="post-container">
        <article>
          <h1 className="post-title">{post.title}</h1>
          <time dateTime={post.date}>{format(new Date(post.date), "yyyy년 MM월 dd일")}</time>
          <Content />
          <Giscus />
        </article>
        <Footer />
      </div>
    </StyledPost>
  )
}

export default PostLayout
```

이제 posts라는 폴더를 프로젝트 최상단에 만들고 그 폴더 안에 `example.md` 파일을 만들어보세요. 그리고 그 안에는 아래와 같이 작성하세요.

```markdown
//posts/example.md

---
category: 잡담 //원하는 카테고리
title: 예시 글
date: 2023-07-26 //오늘 날짜
description: Next.JS 프로젝트를 생성하고 처음 쓰는 글
---

아무렇게 쓴 글씨
```

그리고 터미널에 자신의 `패키지 매니저`에 맞게 아래와 같은 명령을 입력 후 실행해 보세요.

```bash
npm dev

혹은

yarn dev

혹은

pnpm dev
```

이제 터미널에 뭐라뭐라 뜰겁니다.

```bash
warning ../package.json: No license field
$ next dev
```

이 문구 밑에 뜨는 `- ready ~~~`를 주목하세요. 거기에 `url: `이라고 되어 있는데에 어떤 주소가 있을텐데 그곳을 `Ctrl +  클릭`하면 브라우저 창이 하나 열릴겁니다. 주소 뒤에 `/example`을 입력하고 접속해보면 우리가 쓴 글이 잘 렌더링 된 것을 확인 할 수 있죠. 마음에 안드는 부분은 `page.tsx`에 `@emotion/styled`를 바로 가져와서 사용하거나 따로 `style.tsx`로 빼서 스타일링 해서 사용하시면 됩니다. 나는 `CSS in JS`가 싫다고 하시면 알아서 하시면 되고요.

<br />

# 글 목록 가져오기

---

우리 이제 글 표시할 수 있으니까 글 목록을 만들어봐야겠죠. `app` 폴더 밑에 `page.tsx`라는 파일이 있을 겁니다. 거기에 우리는 글 목록을 표시해 볼 거예요. 그 파일 열고 아래와 같이 작성하세요.

```typescript
//app/page.tsx

import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const Posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    {Posts.map((post) => (
      <article key={post._id}>
        <Link href={post.url}>
          <Image src={post.teaser} alt={post.title} width={640} height={360} />
          <p className="post-category">{post.category}</p>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
        </Link>
      </article>
    ))}
  );
};

export default Home;
```

이렇게 `page.tsx`를 작성하면 아까 우리가 `/example`을 붙였던 주소에 `/example`을 지우고 다시 접속해 보면 글 목록이 표시될 겁니다. 쉽죠? 생긴 게 마음에 안 드실 텐데 그것도 나중에 `@emotion/styled` 쓰시거나 다른 방법으로 스타일링을 하면 됩니다.

<br />

# 마무리

---

예전에 `Jekyll` 블로그 만든 건 그냥 코드를 다 빼다 박았는데 이번에는 초보자분들이 알아서 해볼 수 있도록 글을 작성해 봤어요. 제가 저번 주 토요일부터 이걸 만들기 시작했으니까 대충 만드는데 5일 정도 걸렸네요. 이번 블로그는 매우 마음에 듭니다. 제가 코드를 이상하게 짠 거 같지도 않고 훌륭한 분의 도움을 받아 코드가 탄탄하거든요. 제 우분투 세팅 법도 공유하고 싶고 Today at Apple 갔다 온 후기도 써봐야겠습니다. 따라 오시느려고 수고 많으셨습니다. 이제 자신만의 멋진 블로그를 만들어보세요.