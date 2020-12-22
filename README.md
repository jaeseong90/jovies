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
- 검토 언제 끝남?ㅇㄴ
#### google play store 테스트 오류 java.lang.NoClassDefFoundError: aewt
 FATAL EXCEPTION: Firebase-Messaging-Intent-Handle
Process: com.google.android.youtube, PID: 27735
java.lang.NoClassDefFoundError: aewt
	at aewu.b(PG:1)
	at duc.a(PG:230)
	at duc.get(PG:247)
	at aevw.b(PG:1)
	at dud.al(PG:5)
	at dud.aw(PG:4)
	at dud.bg(PG:8)
	at duc.a(PG:232)
	at duc.get(PG:247)
	at afke.a(PG:1)
	at aeri.b(PG:1)
	at dud.fv(PG:4)
	at duc.c(PG:269)
	at duc.get(PG:247)
	at amfk.a(PG:1)
	at eiu.K(PG:5)
	at dud.fV(PG:7)
	at duc.d(PG:334)
	at duc.get(PG:247)
	at com.google.android.apps.youtube.app.common.notification.FcmMessageListenerService.b(PG:1)
	at com.google.firebase.messaging.FirebaseMessagingService.g(PG:53)
	at avgp.run(Unknown Source)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
	at usj.run(PG:2)
	at java.lang.Thread.run(Thread.java:831)
  
  기기 사양
모델 이름
P8 青春版
제조업체
Huawei
Android 버전(SDK)
Android 5.0(SDK 21)
언어
en_US
화면 크기
720 x 1280
화면 밀도(DPI)
320
RAM(총 메모리)
2,048MB
OpenGL ES 버전
2.0
ABI
ARM64_V8
CPU
HiSilicon Hi6220

에서 발생하는 오류 구글링 결과 특정 유튜브 링크에서 저 sdk 이용기종에서 발생하는것으로 보임
sdk 버전업을 해서 해당 기종을 회피할 수 있다고 되어 있으나 일단은 검토 기다리는중 
해당 기기에서 설치안되도록 기기 카탈로그에서 제외 추가함 
