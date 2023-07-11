# React Native 무한 스크롤 리스트

## 목차

- [프로젝트 구성](#프로젝트-구성)
- [구현 기능 목록](#구현-기능-목록)
- [사용한 기술 스택 및 라이브러리](#사용한-기술-스택-및-라이브러리)
- [실행 방법](#실행-방법)

<br />

## 프로젝트 구성

![rn-redux](https://github.com/seungdeok/rn-infinite-scroll/assets/32917014/d4067f6d-843c-4dc6-ad96-7da63b3302dd)

<br />

## 구현 기능 목록

#### Bottom Tab Navigation으로 탭 화면 이동

`react-navigation`으로 Tabs[[링크](./App.tsx)]을 구성하고 해당 탭을 클릭하면 화면을 노출시켰습니다.

<br />

#### 무한스크롤 화면

`FlatList`와 `react-query`의 `useinfiniteQuery`를 이용하여 구현[[링크](./src/components/VerticalList.tsx)]하였습니다.
75%가 노출되면 다음 페이지 로딩을 시작하여 사용자의 로딩 체감시간을 최소화하였습니다.

- 가로
  ![infinitescroll-horizontal](https://github.com/seungdeok/rn-infinite-scroll/assets/32917014/2053c4e1-54ee-4dd6-aad6-2fad33a4f673)

- 세로
  ![infinitescroll-vertical](https://github.com/seungdeok/rn-infinite-scroll/assets/32917014/6f4ce26c-4151-47fb-aa95-ac71f24e9d6d)

<br />

#### 뒤로가기 버튼 핸들러

Stack 길이를 체크하여 길이가 1이며 2000ms안에 두 번의 뒤로가기 버튼을 누르면 앱이 종료된다[[링크](./src/hooks/useBackButton.ts)]

![back_button](https://github.com/seungdeok/rn-infinite-scroll/assets/32917014/7eb4a0fe-4c44-4b10-a61d-58e278e56b6e)

<br />

#### 선언형 로딩 & 에러 처리

react-query와 함께 react의 suspense와 error boundary[[링크](./src/components/ErrorBoundary.tsx)]를 구현하여 선언적으로 로딩과 error를 처리하였습니다.

```tsx
<ErrorBoundary>
  <Suspense fallback={<LoadingView />}>
    <HorizontalList />
  </Suspense>
</ErrorBoundary>
```

<br />

## 사용한 기술 스택 및 라이브러리

![Generic badge](https://img.shields.io/badge/react_native_fast_image-8.6.3-61DAFB.svg)

- Image component의 다운샘플링을 우회.
- 캐싱하는 방식으로 렌더링 방식에서 생길 수 있는 흐릿해지거나 깜빡이는 문제 우회.

![Generic badge](https://img.shields.io/badge/react_query-4.29.19-61DAFB.svg)

- API 캐싱 지원
- Client와 API 상태를 분리하여 관리하기 용이
- useEffect를 걷어내서 Side Effect 가능성 제거

![Generic badge](https://img.shields.io/badge/axios-1.4.0-61DAFB.svg)

- 자체 인터셉터 지원
- 크로스 플랫폼 지원

![Generic badge](https://img.shields.io/badge/lottie_react_native-5.1.6-61DAFB.svg)

- lottie.json을 React-Native에서 사용할 수 있는 인터페이스 제공
- 애니메이션 처리할 때의 성능 유지

![Generic badge](https://img.shields.io/badge/react_navigation-6.x.x-61DAFB.svg)

- Document와 커뮤니티 및 생태계가 가장 거대

<br />

## 실행 방법

### 1. Install packages

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

<br />

### 2. Start the Metro Server

```bash
# using npm
npm run start

# OR using Yarn
yarn start
```

<br />

### 3. Start your Application

#### Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

<br />

### Testing

```bash
# using npm
npm run test

# OR using Yarn
yarn test
```

<br />
