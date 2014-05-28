#import "LoginHelper.js"
#import "Credentials.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword)

function testingTheFile() {

    target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
    target.frontMostApp().mainWindow().buttons()["Preset   Record File"].tap();
    target.frontMostApp().mainWindow().buttons()["Stop   Record File x"].tap();
    UIATarget.localTarget().delay(10);


    target.frontMostApp().windows()[0].buttons()["Stop   Record File x"].tap();
    target.tap({
        x: 304.50,
        y: 184.50
    });

    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    if (!target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].checkIsValid()) {
        return false;
    } else {
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
        //target.frontMostApp().mainWindow().tableViews()[0].cells()[0].buttons()[0].tapWithOptions({tapOffset:{x:0.57, y:0.50}});
        if ((target.frontMostApp().mainWindow().tableViews()[1].cells()[0].checkIsValid())) {
            UIALogger.logPass("Updated successfully");
        } else {
            UIALogger.logFail("Updated Unsuccesfully");
        }

        target.frontMostApp().mainWindow().tableViews()[1].cells()[0].tap();
        target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();
        target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
        target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();
        if ((target.frontMostApp().mainWindow().tableViews()[1].cells()[0].checkIsValid())) {
            UIALogger.logPass("Updated successfully in History");
        } else {
            UIALogger.logFail("Updated Unsuccesfully in History");
        }

        if((target.frontMostApp().mainWindow().tableViews()[1].cells()[0].checkIsValid())){
		target.frontMostApp().mainWindow().tableViews()[1].cells()[0].tap();
        target.frontMostApp().toolbar().buttons()["Delete(1)"].tap();
        UIALogger.logPass("Deleted successfully");
		target.frontMostApp().navigationBar().leftButton().tap();
		target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
        return true;}
		else
		{
		UIALogger.logFail(" Could not Delete successfully");
		target.frontMostApp().navigationBar().leftButton().tap();
		target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
        return true
			}
    }
}


var t = testingTheFile();
UIALogger.logMessage(t);
