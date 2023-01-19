require("dotenv").config();
import { config } from "./wdio.shared.conf";
// ============
// BrowserStack credantials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
//
// ============
// Specs
// ============
config.specs = ["../test/specs/ios/add-todo.spec.js"];
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:deviceName": "iPhone 14",
    "appium:platformVersion": "16.2",
    "appium:automationName": "XCUITest",
    "appium:app": "bs://your app url on browser stack"
  }
];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["browserstack"];

exports.config = config;
