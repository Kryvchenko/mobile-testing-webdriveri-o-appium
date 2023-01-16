const AddNoteSpec = require("../../screenobjects/android/add-note.screen");
import constants from "../../utils/constants";

describe("Add notes screen", () => {
  it("Skip Tutorial", async () => {
    await AddNoteSpec.skipBtn.click();
    //assertion
    await expect(AddNoteSpec.addNoteText).toBeDisplayed();
  });
  it("Add and save note", async () => {
    await AddNoteSpec.addNoteText.click();
    await AddNoteSpec.addNoteType.click();
    //add note title
    await AddNoteSpec.addNoteTitle.addValue(constants.note_heading);
    //add note body
    await AddNoteSpec.addNoteBody.addValue(constants.note_body);
    //save changes
    await AddNoteSpec.saveNote();
    //assertion
    await expect(
      AddNoteSpec.editBtn
    ).toBeDisplayed();
  });
});
