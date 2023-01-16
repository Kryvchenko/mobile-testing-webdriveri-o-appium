class AddNoteScreen {
  get skipBtn() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']"
    );
  }
  get addNoteText() {
    return $("//*[@text='Add note']");
  }
  get addNoteType() {
    return $("//*[@text='Text']");
  }
  get addNoteTitle() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']"
    );
  }
  get addNoteBody() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']"
    );
  }
  get editBtn() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']"
    )
  }
  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

module.exports = new AddNoteScreen();
