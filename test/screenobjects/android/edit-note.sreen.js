import AddNoteSpec from "../../screenobjects/android/add-note.screen";

class EditNoteSpec {
  get menuBtn() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']"
    );
  }
  get deleteBtn() {
    return $("//*[@text='Delete']");
  }
  get moreBtn() {
    return $(
      "//android.widget.FrameLayout[@content-desc='More']/android.widget.ImageView"
    );
  }
  get allMenuBtns() {
    return $$("android.widget.TextView");
  }
  get firstNote() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/premium_gone_margin']"
    );
  }
  get noteText() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']"
    );
  }
  async skipTutorial() {
    await AddNoteSpec.skipBtn.click();
    //assertion
    await expect(AddNoteSpec.addNoteText).toBeDisplayed();
  }
  /**
   * Adding note heading and body
   * @param  {String} noteHeading - heading text
   * @param  {String} noteBody - body text
   */
  async addAndSaveNote(noteHeading, noteBody) {
    await AddNoteSpec.addNoteText.click();
    await AddNoteSpec.addNoteType.click();
    //add note title
    await AddNoteSpec.addNoteTitle.addValue(noteHeading);
    //add note body
    await AddNoteSpec.addNoteBody.addValue(noteBody);
    //save changes
    await AddNoteSpec.saveNote();
    //assertion
    await expect(AddNoteSpec.editBtn).toBeDisplayed();
  }
  /**
   * Performs a click on button from menu
   * @param  {String} btnName - button from menu
   */
  async openTrashCanAndClickOnFirstNote(btnName) {
    const btnList = await this.allMenuBtns;
    for (const el of btnList) {
      if ((await el.getText()) === btnName) {
        el.click();
      }
    }
    await this.firstNote.click();
  }
}

export default new EditNoteSpec();
