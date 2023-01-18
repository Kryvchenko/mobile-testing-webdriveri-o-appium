describe("iOS locators strategies", () => {
  it("By Accessability id", async () => {
    await $("~Alert Views").click();
    await $("~Simple").click();
    expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });
  it("Search by type", async () => {
    const btns = await $$("XCUIElementTypeStaticText");
    for (const el of btns) {
      console.log(await el.getText());
    }
  });
  it("By Xpath", async () => {
    await $("//XCUIElementTypeStaticText[@name='Alert Views']").click();
    await $("~Simple").click();
    expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });
  it("By class chain", async () => {
    //element class chain strategy with use of label full text
    const elFullText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';

    //element class chain strategy with use of CONTAINS method and part of the element text
    const elText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
    await $(`-ios class chain:${elText}`).click();
    await $("~Simple").click();
    expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });
  it("By predicate string", async () => {
    //find element bt predicate string
    const elFullText = 'label == "Alert Views"';
    //find element bt predicate string with part of the text in caseinsensitive way [c]
    const elText = 'value BEGINSWITH[c] "alert"';
    await $(`-ios predicate string:${elText}`).click();
    await $("~Simple").click();
    expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });
  it("Exercise", async () => {
    await $("~Search").click();
    await $("~Default").click();
    const inputFiled = 'type == "XCUIElementTypeSearchField"';
    await $(`-ios predicate string:${inputFiled}`).addValue("My Text");
    await $("~Clear text").click();
    const text = await $(`-ios predicate string:${inputFiled}`).getText();
    await expect(text.length).toEqual(0);
  });

  it.only("Scrolling commands", async () => {
    //simple scenario
    //await driver.execute("mobile: scroll", { direction: "down" });

    //complex scenario
    await $("~Picker View").click();

    const redPicker = await $("~Red color component value");
    const bluePicker = await $("~Blue color component value");
    await driver.execute("mobile: scroll", {
      element: redPicker.elementId,
      direction: "down"
    });
    await driver.execute("mobile: scroll", {
      element: bluePicker.elementId,
      direction: "down"
    });
  });
});
