import { config } from "./wdio.shared.conf";
import path from "path";
//
// ====================
// Runner Configuration
// ====================
config.port = 4723;
//
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
    "appium:deviceName": "Pixel 3",
    "appium:platformVersion": "11.0",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/ColorNote.apk"),
    "appium:autoGrantPermissions": true
  }
];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["appium"];

exports.config = config;
