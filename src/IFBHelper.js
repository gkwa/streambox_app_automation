#import "LoginHelper.js"
#import "Credentials.js"


var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword)

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["IFB"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Name"].tap();
target.frontMostApp().keyboard().typeString("fcv\n");
target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().mainWindow().tableViews()[1].cells()["fcv"].tap();
target.frontMostApp().mainWindow().tableViews()[1].tapWithOptions({tapOffset:{x:0.97, y:0.28}});
target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Meta Data"].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
----------------------------------------------





