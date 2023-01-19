import EditNoteSpec from "../../screenobjects/android/edit-note.sreen";
import constants from "../../utils/constants";

describe("Delete note", () => {
  before(async () => {
    await EditNoteSpec.skipTutorial();
    await EditNoteSpec.addAndSaveNote(
      constants.note_heading,
      constants.note_body
    );
  });
  it("Delete note & check note in trash can", async () => {
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
