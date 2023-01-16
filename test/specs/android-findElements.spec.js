describe("Android Elements Test", () => {
  it("Find element by accessibility id", async () => {
    //find element by accessibility id
    const appOption = await $("~App");
    //click on element
    await appOption.click();
    //assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });
  it("Find element by class name", async () => {
    //find element by class name
    const classname = await $("android.widget.TextView");
    //assertion
    await expect(classname).toHaveText("API Demos");
  });
  it("Find element by xpath", async () => {
    //find element by xpath
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();

    //find by resourceId
    await $(
      "//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']"
    ).click();

    //find by text
    await $("//android.widget.TextView[@text='Command two']").click();

    //find by class - assertion
    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
  it("Find element by UI Automator", async () => {
    //find element by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });
  it("Find multiple elements", async () => {
    const actualList = [];
    //find multiple elements
    const textList = await $$("android.widget.TextView");
    //loop through them
    for (const el of textList) {
      actualList.push(await el.getText());
    }
    //asser the list
    expect(actualList.length).toEqual(13);
  });
  it("Type to input filed", async () => {
    //find multiple elements
    const textList = await $$("android.widget.TextView");
    //loop through them
    for (const el of textList) {
      if ((await el.getText()) === "Views") {
        el.click();
      }
    }
    const autoComplete = await $("~Auto Complete");
    await autoComplete.click();
    await $("~1. Screen Top").click();
    await $("android.widget.EditText").addValue("Canada");
    const textField = await $("android.widget.EditText").getText();
    //assertion;
    await expect(textField).toEqual("Canada");
  });
});
