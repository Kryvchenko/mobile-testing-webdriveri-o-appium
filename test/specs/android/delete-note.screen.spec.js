const EditNoteSpec = require('../../screenobjects/android/edit-note.sreen');
const constants = require( '../../utils/constants');

describe("Delete note", () => {
  it("Delete note & check note in trash can", async () => {
    await EditNoteSpec.skipTutorial();
    await EditNoteSpec.addAndSaveNote(constants.note_heading, constants.note_body);
    //click on the menu btn
    await EditNoteSpec.menuBtn.click();
    //click on the delete btn
    await EditNoteSpec.deleteBtn.click();
    await driver.acceptAlert();
    //open trash can and verify that note was deleted
    await EditNoteSpec.moreBtn.click();  
    await EditNoteSpec.openTrashCanAndClickOnFirstNote(constants.btn_name);
    //assertion
    await expect(await EditNoteSpec.noteText).toHaveText(constants.note_body);
  });
});
