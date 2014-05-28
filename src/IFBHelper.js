#import "LoginHelper.js"
#import "Credentials.js"


var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword)

