#import "LoginHelper.js"
#import "Credentials.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

function testingTheFile() {
    var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword)
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    //if (target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].checkIsValid()) {

    target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEUP);
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
    target.frontMostApp().mainWindow().elements()[30].tapWithOptions({
        tapOffset: {
            x: 0.85,
            y: 0.98
        }
    });

    target.frontMostApp().mainWindow().buttons()["Preset   Record File"].tap();
    target.frontMostApp().mainWindow().buttons()["Stop   Record File x"].tap();
    target.frontMostApp().windows()[0].buttons()["Stop   Record File x"].tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.frontMostApp().alert().defaultButton().tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
    target.frontMostApp().mainWindow().tableViews()[1].cells()[0].tap();
    target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
    target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();

    //============================================================================================

    target.frontMostApp().mainWindow().buttons()["Preset   Record File"].tap();
    target.frontMostApp().mainWindow().buttons()["Stop   Record File x"].tap();
    target.frontMostApp().windows()[0].buttons()["Stop   Record File x"].tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.tap({
        x: 303.00,
        y: 185.00
    });
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
    target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Files"].tap();
    target.frontMostApp().mainWindow().tableViews()[1].cells()[0].tap();
    target.frontMostApp().toolbar().buttons()["Upload(1)"].tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
    target.frontMostApp().mainWindow().tableViews()[1].cells()[0].tap();
    target.frontMostApp().toolbar().buttons()["Delete(1)"].tap();
    target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();

    //=================================================================================

}

var result = testingTheFile();
