import ListScreen from "../../screenobjects/ios/todo-list.screen";
import constants from "../../utils/constants";

describe("Todo list", () => {
  it("Add new todo", async () => {
    //Create TODO list
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue(constants.todo_list_name);
    await ListScreen.createBtn.click();
    await expect(
      await ListScreen.listNameField(constants.todo_list_name)
    ).toBeExisting();
  });
});
