require("dotenv").config();
import { config } from "./wdio.shared.conf";
// ============
// BrowserStack credantials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// ============
// Specs
// ============
config.specs = ["../test/specs/android/delete-note*.js"];
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "Google Pixel 3",
    "appium:platformVersion": "10.0",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://8656c4e372e8ff2922973403b5491134cb017485",
    "appium:autoGrantPermissions": true
  }
];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["browserstack"];

exports.config = config;
