describe("Todo item", () => {
  it("Create a todo list", async () => {
    //Create TODO list
    await $("//*[@name='Create list']").click();
    const inputFiled = 'type == "XCUIElementTypeTextField"';
    await $(`-ios predicate string:${inputFiled}`).addValue("Get job in IT");
    await $("~Create").click();
    await expect(await $("~Get job in IT")).toBeExisting();
  });
  it("Create new todo item", async () => {
    //Create TODO item
    await $("~Get job in IT").click();
    await $("//*[@name='Create item']").click();
    await $("//*[@value='Title']").addValue("Walk dog");
    await $("//*[@value='Due']").click();
    const date = await $("~Date Picker");
    await date.click({ x: -100 });
    await $("~Next Month").click();
    await $("~Thursday, February 23").click();
    await date.click({ x: -100 });
    await $("~Create").click();

    //assertions
    await expect(await date).toHaveText("Feb 23, 2023");
    await expect(await $("~Due February 23, 2023")).toBeExisting();
  });
});
