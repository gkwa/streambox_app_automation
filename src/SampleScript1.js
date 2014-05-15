#import "LoginHelper.js"
#import "Credentials.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

function testingTheDecoders() {
    var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword);

    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].tap();

    target.frontMostApp().navigationBar().rightButton().tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Name"].tap();
    target.frontMostApp().keyboard().typeString("deee\n");
    target.frontMostApp().navigationBar().rightButton().tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({
        tapOffset: {
            x: 0.93,
            y: 0.27
        }
    });
    target.frontMostApp().navigationBar().rightButton().tap();
    target.frontMostApp().navigationBar().leftButton().tap();

}
testingTheDecoders();
