import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import {App} from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
