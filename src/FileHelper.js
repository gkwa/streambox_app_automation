function testingTheFile() {
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    if (target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].checkIsValid()) {
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["043014-115051.actl3, 7659"].tap();
        target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();

        target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
        if (!(target.frontMostApp().mainWindow().tableViews()[1].cells()["043014-115051.actl3, 7659/7659"].checkIsValid())) {
            UIALogger.logPass("Updated successfully");
        } else {
            UIALogger.logFail("Updated Unsuccesfully");
        }
        target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();
        if (!(target.frontMostApp().mainWindow().tableViews()[1].cells()["043014-115051.actl3, SUCCESS"].checkIsValid())) {
            target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["043014-115051.actl3, SUCCESS"].buttons()["Checkmark Inactive"].tap();
            target.frontMostApp().toolbar().buttons()["Delete(1)"].tap();
            UIALogger.logPass("Deleted successfully");
        } else {
            UIALogger.logFail("Cannot delete");
        }
        return true;
    } else {
        return false;
    }
}
