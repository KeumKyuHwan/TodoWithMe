/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // App.js 파일을 불러옵니다
import { name as appName } from './app.json'; // app.json에서 앱 이름을 불러옵니다

// 앱의 루트 컴포넌트를 AppRegistry에 등록
AppRegistry.registerComponent(appName, () => App);

