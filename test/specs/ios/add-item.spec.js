import ListScreen from "../../screenobjects/ios/todo-list.screen";
import ItemScreen from "../../screenobjects/ios/todo-item.screen";
import constants from "../../utils/constants";

describe("Todo item", () => {
  before(async () => {
    //Create TODO list
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue(constants.todo_list_name);
    await ListScreen.createBtn.click();
  });
  it("Create new todo item", async () => {
    //Create TODO item
    const todoItem = await ListScreen.listNameField(constants.todo_list_name);
    //select item
    await todoItem.click();
    //add new todo item
    await ItemScreen.createItemBtn.click();
    //add title
    await ItemScreen.titleInputField.addValue(constants.todo_list_title);
    //pick a date
    await ItemScreen.dateInputField.click();
    await ItemScreen.datePicker.click({ x: -100 });
    await ItemScreen.getByAccessabilityId(
      constants.accessability_id_month
    ).click();
    await ItemScreen.getByAccessabilityId(constants.check_full_date).click();
    //save date value
    const date = await ItemScreen.datePicker.getText();
    await ItemScreen.datePicker.click({ x: -100 });
    //click create btn
    await ItemScreen.getByAccessabilityId(
      constants.accessability_id_create
    ).click();

    //assertions
    await expect(await date).toEqual(constants.check_date);
    await expect(
      await ItemScreen.getByAccessabilityId(constants.check_generated_date)
    ).toBeExisting();
  });
});
