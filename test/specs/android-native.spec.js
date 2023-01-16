describe("Android Native Feature Test", () => {
  it("Access an activity directly", async () => {
    //access an activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    // await driver.pause(3000);
    //assertion
    await expect($("//*[@text='App/Alert Dialogs']")).toExist();
  });

  it("Interact with dialog window(alert)", async () => {
    //access an activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    await $(
      "//*[@resource-id='io.appium.android.apis:id/two_buttons']"
    ).click();

    // //accept alert
    // driver.acceptAlert();

    console.log("Alert text: ", await driver.getAlertText());

    //dismiss alert
    driver.dismissAlert();

    await expect($("//*[@resource-id='android:id/alertTitle']")).not.toExist();
  });
  it("Vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    //Vertical scrollTextIntoView
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();
    //assertion
    await expect($("~Secure Dialog")).toExist();
  });
  it("Horizontal scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    //Horizontal scrollTextIntoView
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    ).click();
  });
  it.only("Date widjet", async () => {
    //access date picker
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );

    //get current date
    const date = await $(
      "[resource-id='io.appium.android.apis:id/dateDisplay']"
    );
    const currentDate = date.getText();

    //access change date function
    await $("~change the date").click();

    //Horizontal scrollTextIntoView
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    //pick new date
    await $("//*[@text='10']").click();

    //accept new date
    driver.acceptAlert();

    //verify if date was updated
    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
