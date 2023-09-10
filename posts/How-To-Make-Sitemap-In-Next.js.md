---
teaser: /How-To-Make-Sitemap-In-Next.js-Teaser.jpg
category: 개발
title: Next.JS 블로그 사이트맵 만들기
date: 2023-09-09T19:30:00+09:00
description: 복잡해 보이는 사이트맵 간편하게 만들어 봅시다.
---

`Next.JS`로 블로그를 개편한 지도 거의 2개월이 되어가는데요. 검색했을 때 블로그가 나오게 하려면 웹마스터 도구에 등록해야 합니다. 하지만 글을 작성할 때마다 글의 주소를 일일이 등록해 주어야 합니다. 하지만 사이트맵이 있다면, 그럴 필요가 없는데요. 만들어 봅시다. 본 내용은 `next-contentlayer`를 사용한 프로젝트를 기준으로 합니다.

<br />

# 정적 사이트맵 생성을 위한 `sitemap.js` 만들기

---

프로젝트 어딘가 본인이 원하는 곳에 `sitemap.js`를 만들어 주세요. 파일에 모듈을 임포트해 줍니다.

```javascript
const fs = require("fs");
const path = require("path");
```

이 모듈은 `/posts` 폴더 안에 있는 블로그 글 파일의 이름을 불러오기 위한 것입니다. `/posts` 폴더 안에 있는 파일들의 이름을 불러오도록 해보겠습니다.

```javascript
const getFileNames = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  return fs.readdirSync(postsDirectory);
};
```

`getFileNames`라는 함수에 `/posts` 폴더 안에 있는 파일들의 이름을 불러오도록 하였습니다. 사이트맵은 날짜와 시간도 필요로 하므로 블로그 글 파일에서 프론트메터에서 불러오도록 해보겠습니다.

```javascript
const extractFrontmatter = (fileContent) => {
  const frontmatter = {};
  const lines = fileContent.split("\n");
  for (const line of lines) {
    const match = line.match(/^(\w+):\s?(.+)/);
    if (match) {
      const key = match[1].toLowerCase();
      if (!frontmatter.hasOwnProperty(key)) {
        frontmatter[key] = match[2];
      }
    }
  }
  return frontmatter;
};
```

`extractFrontmatter`라는 함수에 블로그 파일에서 `Date`라는 프론트메터 안에 있는 값을 추출합니다.

```javascript
const main = () => {
  const filenames = getFileNames();

  const urls = filenames.map((filename) => {
    const filePath = path.join(process.cwd(), "posts", filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatter = extractFrontmatter(fileContent);

    const url = `https://blogurl.com/${filename.replace(".md", "")}`;
    const lastmod = frontmatter.date || "";
    return { url, lastmod };
  });

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://blogurl.com/</loc>
      </url>
      ${urls
        .map(({ url, lastmod }) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

main();
```

이제 위에서 정의한 `getFileNames`를 이용해서 파일 이름을 가져온 후 `filenames`에 저장하여 블로그 주소 뒤에 추가합니다. `extractFrontmatter`를 이용하여 프론트매터를 가져온 후 `lastmod`에 저장합니다. 이제 이 정보들을 사용하여서 `XML` 형식의 `sitemap`을 생성해서 `/public`에 저장합니다.

완성된 `sitemap.js`은 아래와 같습니다.

```javascript
const fs = require("fs");
const path = require("path");

const getFileNames = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  return fs.readdirSync(postsDirectory);
};

const extractFrontmatter = (fileContent) => {
  const frontmatter = {};
  const lines = fileContent.split("\n");
  for (const line of lines) {
    const match = line.match(/^(\w+):\s?(.+)/);
    if (match) {
      const key = match[1].toLowerCase();
      if (!frontmatter.hasOwnProperty(key)) {
        frontmatter[key] = match[2];
      }
    }
  }
  return frontmatter;
};

const main = () => {
  const filenames = getFileNames();

  const urls = filenames.map((filename) => {
    const filePath = path.join(process.cwd(), "posts", filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatter = extractFrontmatter(fileContent);

    const url = `https://blogurl.com/${filename.replace(".md", "")}`;
    const lastmod = frontmatter.date || "";
    return { url, lastmod };
  });

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://blogurl.com/</loc>
      </url>
      ${urls
        .map(({ url, lastmod }) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

main();
```

<br />

# 빌드 시 `sitemap.xml` 생성되게 하기

---

완성된 `sitemap.js`를 빌드 시 마다 실행되게 해야 하는데요. `package.json`을 아래와 같이 수정해 줍니다.

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "node sitemap.js"
  },
  ...
}
```

이제 빌드 시 `sitemap.js`가 실행되어 `/public` 폴더 안에 `sitemap.xml`이 생성되게 됩니다.