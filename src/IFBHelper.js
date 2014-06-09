#import "LoginHelper.js"
#import "Credentials.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword)

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
var cells = target.frontMostApp().mainWindow().tableViews()["Empty list"].cells();
var cellIFB = null;
for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].name().substr(0, 3) == "IFB") {
        cellIFB = cells[i]
        break;
    }
}
cellIFB.tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Name"].tap();
target.frontMostApp().keyboard().typeString("hh\n");
target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().mainWindow().tableViews()[1].cells()["hh"].elements()["More info, hh"].tapWithOptions({
    tapOffset: {
        x: 0.10,
        y: 0.59
    }
});
target.frontMostApp().navigationBar().rightButton().tap();
//target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Meta Data"].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
