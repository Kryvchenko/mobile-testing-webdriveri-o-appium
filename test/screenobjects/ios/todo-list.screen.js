class ListScreen {
  get createListBtn() {
    return $("//*[@name='Create list']");
  }
  get listNameInput() {
    const inputFiled = 'type == "XCUIElementTypeTextField"';
    return $(`-ios predicate string:${inputFiled}`);
  }
  get createBtn() {
    return $("~Create");
  }

  async listNameField(name) {
    return $(`~${name}`);
  }
}

//module.exports = new ListScreen();
export default new ListScreen();
