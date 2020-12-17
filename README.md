# Jaeseong Movies

## 선수

- React JS 기초
- Hooks (Effect, UseState)
- React Native 기초

## SETUP

- NodeJS
- npm, yarn, expo
- Expo init 프로젝트 생성
- Expo simulator - Windows(android), mac(IOS), web
- prettier 설치하자, 편함

#### Expo, Assets

- AppLoading splash Screen / assets AppPreLoding
- expo-assets
- expo install @expo/vector-icons 이미지 아이콘
- expo add expo-font

#### React Navigation

#### styled-components

#### components

- prop-types 사용

- React Navigation 사용
- Expo Managed Project expo install not working in android
  react-native-gesture-handler
  react-native-reanimated
  react-native-screens
  react-native-safe-area-context
  @react-native-community/masked-view
- yarn add @react-navigation/stack
- react tab navigation

#### API

- axios 활용 홈페이지, Git 에 친절히 옵션값 다 있음 / ReactNative에서는 fetch 가 많은듯 보임
- themovie.org API 활용
  1a3810937b0dde9cf8fcbaabd86871a7

#### react native web swiper

- swiper web 이랑 다 호환 가능

####

vscode-styled-components Extension
별로인거 같은데 걍 씀

#### expo-web-browser WebBrowser

- expo install react-native-gesture-handler

#### ios Simple drawer app using snack and SDK38 is broken on iOS (works on Android and Web)

Invariant Violation :Tried to register two views with the same name RNCSafeAreaProvider
Browser.js
개발중 ios 에서 테스트 하였을 시 오류가 발생하는것을 발견
해당 이슈로 https://github.com/expo/expo/issues/9095
delete node_modules and your lockfile (package-lock.json / yarn.lock)
change the expo package version in package.json to 38.0.8
remove react-native-safe-area-context from your package.json
run yarn or npm install
run expo install react-native-safe-area-context

#### expo start
error: unknown option `--assetExts'
Metro Bundler process exited with code 1
Set EXPO_DEBUG=true in your env to view the stack trace.
오류의 경우 expo-cli, react-native, expo 호환버전이 맞지 않아서 이므로 재설치 진행 
cf. global 로 설치된 버전 확인도 해야함

## 배포
expo 배포 가이드 참고
https://docs.expo.io/guides/ 참고
expo build:android
choose aab 파일로 시작
expo 사이트에서 완료되면 다운로드
expo 어플 설치된경우 로그인하여 project 에서 해당 app 실행가능

google play console 에서 앱 패포
- 개발자개정등록(25$)
- 앱 생성하여 넣기 
- 최근 개인정보처리방침 필요하여 https://www.privacy.go.kr/ 포털 활용하여 정책 생성 후 사이트에 올림
- 개인정보처리방침 url 등록 하여 링크 연결
- 이것저것 진행하고 프로덕션등록
- 검토 언제 끝남?
