class ItemScreen {
  get createItemBtn() {
    return $("//*[@name='Create item']");
  }
  get titleInputField() {
    return $("//*[@value='Title']");
  }
  get dateInputField() {
    return $("//*[@value='Due']");
  }
  get datePicker() {
    return $("~Date Picker");
  }
  getByAccessabilityId(name) {
    return $(`~${name}`);
  }
}

//module.exports = new ItemScreen();
export default new ItemScreen();
