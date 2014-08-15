//bool: are we logged in or not.  Start off assuming we are logged in an prove otherwise
var bLoggedIn = true;

UIATarget.onAlert = function checkForIncorrectPasswordAlert(alert) {
    var title = alert.name();

    for (var i = 0; i < (alert.scrollViews()[0].staticTexts()).length; i++) {
        //alert.logElementTree();
        //UIALogger.logMessage(text);
        var text = alert.scrollViews()[0].staticTexts()[i].value();
        if (text == "Incorrect login/password") {
            bLoggedIn = false;
            //UIALogger.logMessage(text);
            return true; //alert handled, so bypass the default handler
        }
    }
}

var target = UIATarget.localTarget();
//target.logElementTree();
var app = target.frontMostApp();
var appWindow = app.mainWindow();

if (bLoggedIn == true) {
    // we didn't get wrong password alert, so need to check futher

    var buttonSignUp = appWindow.buttons()["Sign Up"]

    if (buttonSignUp.checkIsValid()) {
        if (buttonSignUp.isVisible()) {
            bLoggedIn = false;
        }
    }

    var buttonHelp = appWindow.buttons()["Help Button   Neutral"]

    if (buttonHelp.checkIsValid()) {
        if (buttonHelp.isVisible()) {
            bLoggedIn = true;
        }
    }

}

if (bLoggedIn) {
    UIALogger.logMessage("logged in");
} else {
    UIALogger.logMessage("not logged in");
}
