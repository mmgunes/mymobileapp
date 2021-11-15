/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import App2 from './src/App2';
import App3 from './src/sayac';
import TextInputKullan from './src/TextInputKullan';
import Login from './src/Login'
import HariciPaketIcon from './src/HariciPaketIcon'
import ToDoList from './src/ToDoList'

AppRegistry.registerComponent(appName, () => ToDoList);
