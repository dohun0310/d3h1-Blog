---
teaser: /Using-Parameters-In-Next.js-Teaser.png
category: 개발
title: 이제 Next.js에서 파라미터 쓰는 법
date: 2025-11-02T13:55:00+09:00
---

`App Router`를 쓰는 `Next.js` 15부터 많은 동기 API가 비동기화 되었습니다. 그 중, `params`와 `searchParams`가 비동기 Promise화가 되었습니다. `Client Component`에서는 `use()` 훅을 통한 동기 접근이 가능해집니다. 이에 대한 변경점에 대해 알아봅니다.

# `params`와 `searchParams`는 왜 `Promise`가 되었을까?

---

`Next.js` 15부터는 각 `Segment` 단위로 비동기 렌더링이 가능해졌습니다. 이러한 변경점 덕분에 각 `Segment`별로 렌더링 후 준비된 부분만 먼저 렌더링 하는 `Streaming Rendering`이 가능해졌습니다.

이제 각 `Segment`를 독립적으로 렌더링 하는 것이 가능해졌기 때문에, 부모 `Segment`가 아직 렌더 중일 떄 자식 `Segment`의 파라미터 값을 바로 읽을 수 없는 상황이 발생하게 됩니다. 이러한 상황을 방지하기 위해 아직 렌더링 되지 않은 `Segment`의 파라미터 값을 가져오는 상황을 방지하기 위해 비동기가 된 것으로 보입니다.

# `Layout`에서의 사용

---

`Next.js` 15 이전에는 아래와 같은 구조로 비동기 `Layout`에서 사용이 가능했었습니다.

```typescript
type Params = { slug: string }
 
export function generateMetadata({
  params
}: {
  params: Params
}) {
  const { slug } = params
}
 
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { slug } = params
}
```

`Next.js` 15 이후부터는 아래와 같이 `params`를 `Promise` 타입으로 변경하고, `generateMetadata`도 비동기 함수로 변경합니다.

```typescript
type Params = Promise<{ slug: string }>


export async function generateMetadata({
  params
}: {
  params: Params
}) {
const { slug } = await params;
}


export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params
}) {
  const { slug } = await params;
}
```

동기 `Layout`의 경우 `React`의 `use()` 훅을 통하여 `Promise`를 동기적으로 해제합니다.

```typescript
import { use } from 'react'
 
type Params = Promise<{ slug: string }>
 
export default function Layout(props: {
  children: React.ReactNode
  params: Params
}) {
  const params = use(props.params)
  const slug = params.slug
}
```

# `Page`에서의 사용

---

`Next.js` 15 이전에는 아래와 같은 구조로 비동기 `Page`에서 사용이 가능했었습니다.

```typescript
type Params = { slug: string }
type SearchParams = { [key: string]: string | string[] | undefined }
 
export function generateMetadata({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { slug } = params
  const { query } = searchParams
}
 
export default async function Page({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { slug } = params
  const { query } = searchParams
}
```

`Layout`과 비슷한 맥락으로 `Next.js` 15 이후부터는 아래와 같이 `params`와 `searchParams`를 `Promise` 타입으로 변경하고, `generateMetadata`도 비동기 함수로 변경합니다.

```typescript
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query
}
 
export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query
}
```

`Client Component`에서는 `React`의 `use()` 훅을 통하여 `Promise`를 동기적으로 해제합니다.

```typescript
'use client'

import { use } from 'react'
 
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export default function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = use(props.params)
  const searchParams = use(props.searchParams)
  const slug = params.slug
  const query = searchParams.query
}
```

# `Route Handler`에서의 사용

---

`Next.js` 15 이전에는 아래와 같은 구조로 `Route Handler`에서 사용이 가능했었습니다.

```typescript
type Params = { slug: string }
 
export async function GET(request: Request, segmentData: { params: Params }) {
  const params = segmentData.params
  const slug = params.slug
}
```

비슷한 맥락으로 `Next.js` 15 이후부터는 아래와 같이 `params`를 `Promise` 타입으로 변경합니다.

```typescript
type Params = Promise<{ slug: string }>
 
export async function GET(request: Request, segmentData: { params: Params }) {
  const params = await segmentData.params
  const slug = params.slug
}
```

# 마무리

---

이제 `Next.js`의 모든 `Component`는 `params`와 `searchParams`를 `Promise`로 다루어야 합니다. 서버에서는 `await`, 클라이언트에서는 `use()`로 접근하는 것이 올바른 패턴입니다.

이러한 변경점이 있는지 모르고 최신 `Next.js` 프로젝트에서 기존처럼 파라미터를 사용하려다가 오류가 발생한 경험이 있습니다. 이번 글에서는 왜 이러한 변화가 생겼는지, 이제 어떻게 사용하는 것이 올바른지에 대해서 알아보았습니다.

[참고 문서](https://nextjs.org/docs/app/guides/upgrading/version-15#params--searchparams)