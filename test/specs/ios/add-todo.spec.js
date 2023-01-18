describe("Todo list", () => {
  it("Add new todo", async () => {
    await $("//XCUIElementTypeStaticText[@name='Create list']").click();
    const inputFiled = 'type == "XCUIElementTypeTextField"';
    await $(`-ios predicate string:${inputFiled}`).addValue("Get job in IT");
    await $("~Create").click();
    await expect(await $("~Get job in IT")).toBeExisting();
  });
});
