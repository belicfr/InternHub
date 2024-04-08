/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import {createApp} from "vue";
import {createMemoryHistory, createRouter} from "vue-router";
import "./Resources/Css/global.css";
import App from "./Views/App.vue";
import Board from "./Views/Board/Board.vue";
import Document from "./Views/Document/Document.vue";

const ROUTES = [
  { path: "/", component: Board },
  { path: "/document", component: Document },
];

let router = createRouter({
  history: createMemoryHistory(),
  routes: ROUTES,
});

createApp(App)
  .use(router)
  .mount("#app");