#import "LoginHelper.js"
#import "Credentials.js"

testLoginWithValidCredentialsSuccess(validUsername, validPassword);

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();


// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Preset   Talking Head"].tap();
target.frontMostApp().mainWindow().buttons()["Stop  Talking Head x"].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["CANCEL"].tap();
target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Preset   Reliable"].tap();
target.frontMostApp().mainWindow().buttons()["Stop   Reliable x"].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["CANCEL"].tap();
target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Preset   Record File"].tap();
target.frontMostApp().mainWindow().buttons()["Stop   Record File x"].tap();
target.frontMostApp().windows()[0].buttons()["Stop   Record File x"].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
//target.frontMostApp().mainWindow().buttons()["YES"].tap();
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
target.frontMostApp().mainWindow().tableViews()[1].cells()["043014-111833.actl3, 2766310"].elements()["More info, 043014-111833.actl3, 2766310"].tapWithOptions({
    tapOffset: {
        x: 0.33,
        y: 0.93
    }
});
target.frontMostApp().mainWindow().textFields()["Title"].tap();
target.frontMostApp().keyboard().typeString("D");
target.frontMostApp().keyboard().tapWithOptions({
    tapOffset: {
        x: 0.33,
        y: 0.41
    }
});
target.frontMostApp().keyboard().typeString("\n");
target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Uploads"].tap();
target.frontMostApp().mainWindow().tableViews()[1].tap();
target.frontMostApp().mainWindow().tableViews()[1].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["History"].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Files"].tap();


target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()[36].tap();
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Files"].tap();
target.frontMostApp().mainWindow().tableViews()[1].elements()[0].tap();
target.frontMostApp().toolbar().buttons()["Delete(1)"].tap();
