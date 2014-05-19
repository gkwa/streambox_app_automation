function testingTheFile() {
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    if (target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].checkIsValid()) {
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["043014-115051.actl3, 7659"].tap();
        target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();

		============================================================================================
		
		target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
		target.frontMostApp().mainWindow().buttons()["Preset   Record File"].tap();
		target.frontMostApp().mainWindow().buttons()["Stop   Record File x"].tap();
		target.frontMostApp().windows()[0].buttons()["Stop   Record File x"].tap();
		// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
		target.tap({x:303.00, y:185.00});
		// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
		target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
		target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
		target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Files"].tap();
		target.frontMostApp().mainWindow().tableViews()[1].cells()["051614-142644.actl3, 376653"].tap();
		target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();
		// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
		target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
		target.frontMostApp().mainWindow().tableViews()[1].cells()["051614-142644.actl3, 148800/376653"].tap();
		target.frontMostApp().toolbar().buttons()["Delete(1)"].tap();
		target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();
		
		
		
		
		
		=================================================================================
		
		
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
