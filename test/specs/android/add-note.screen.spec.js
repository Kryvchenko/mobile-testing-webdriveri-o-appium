describe("Add notes", () => {
  it("Skip Tutorial", async () => {
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']"
    ).click();
    await expect($("//*[@text='Add note']")).toBeDisplayed();
  });
  it("Add and save note", async () => {
    await $("//*[@text='Add note']").click();
    await $("//*[@text='Text']").click();
    //add note title
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']"
    ).addValue("Plan for 2023");
    await $(
      //add note bode
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']"
    ).addValue("Get a job in IT");

    //save changes
    await driver.back();
    await driver.back();
    //assertion
    await expect(
      $(
        "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']"
      )
    ).toBeDisplayed();
  });
  it("Delete note", async () => {
    //click on the menu btn
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']"
    ).click();
    await $(
      //add note bode
      "//*[@text='Delete']"
    ).click();
    await driver.acceptAlert();
    await $(
      "//android.widget.FrameLayout[@content-desc='More']/android.widget.ImageView"
    ).click();

    const textList = await $$("android.widget.TextView");
    for (const el of textList) {
      if ((await el.getText()) === "Trash Can") {
        el.click();
      }
    }
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/premium_gone_margin']"
    ).click();
    //get deleted note text
    const noteText = await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']"
    );
    //assertion
    await expect(await noteText).toHaveText("Get a job in IT");
  });
});
