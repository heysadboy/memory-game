import { JSDOM } from "jsdom";

const jsdom = new JSDOM();
const { window } = jsdom;

global.document = window.document;
global.window = window;
