#import "AddingDecoders.js"
#import "Credentials.js"
#import "LoginHelper.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

//=============================================================
//Adding and deleting the decoders
testLoginWithValidCredentialsSuccess(validUserName, validPassword);
UIALogger.logMessage("Creating the file, deleting and uploading");

var result23 = testAddingTheDecodersandDeletingIsTrue();

if (result23 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.07,
        y: 0.09
    }
});
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.07,
        y: 0.09
    }
});

//target.frontMostApp().navigationBar().leftButton().tap();

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
