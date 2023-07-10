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

### 메인 기능

1. Bottom Tab Navigation으로 탭 화면 이동
2. 화면 이동 시 최초 요청 Loading Animation
3. 세로형 무한스크롤 화면
4. 가로형(배너) 무한스크롤 화면
5. API 추가 요청 시 Loading Indicator

<br />

### 부가 기능

1. 뒤로가기 버튼 핸들러
2. 인터넷 연결 확인 핸들러

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
