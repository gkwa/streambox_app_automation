#import "Main.js"

function passUser(userName, password) {
    UIALogger.logMessage("Entering the Username");
    var target = UIATarget.localTarget();
    var app = target.frontMostApp();
    var window = app.mainWindow();
    target.frontMostApp().mainWindow().textFields()["Title"].tap();
    target.frontMostApp().mainWindow().textFields()["Title"].setValue("");
    target.frontMostApp().keyboard().typeString(userName);
    UIALogger.logPass("Entered user name successfully");
    UIALogger.logMessage("Entering the passowrd");
    target.frontMostApp().mainWindow().secureTextFields()["Location"].tap();
    target.frontMostApp().mainWindow().secureTextFields()["Location"].setValue("");
    target.frontMostApp().keyboard().typeString(password);
    UIALogger.logPass("Password Entered Succesfully");
    if (userName == "Stream123") {
        if (password == "demo") {
            UIALogger.logMessage("Successfully logged in");
            target.frontMostApp().mainWindow().buttons()["Login"].tap();
            UIALogger.logPass("Successfully logged in");
        } else {
            // Function to check whether the expected alert message is received or not
            UIALogger.logMessage("Handling alert on invalid password and invalid user id");
            UIATarget.onAlert = function onAlert(alert) {
                var title = alert.name();
                UIALogger.logWarning("Alert with title '" + title + "' encountered.");
                if (title == "Incorrect login/password") {
                    alert.buttons()["OK"].tap();
                    UIALogger.logMessage("Alert Handled successfully");
                    UIALogger.logPass("Alert Handled Properly on Invalid Password")
                    return true; //alert handled, so bypass the default handler
                }
                // return false to use the default handler
                return false;
            }

        }
    } else { // Function to check whether the expected alert message is received or not
        UIALogger.logMessage("Handling alert on invalid password and invalid user id");
        UIATarget.onAlert = function onAlert(alert) {
            var title = alert.name();
            UIALogger.logWarning("Alert with title '" + title + "' encountered.");
            if (title == "Incorrect login/password") {
                alert.buttons()["OK"].tap();
                UIALogger.logMessage("Alert Handled successfully");
                UIALogger.logPass("Alert Handled Properly on Invalid Password")
                return true; //alert handled, so bypass the default handler
            }
            // return false to use the default handler
            return false;
        }

    }
}



function boolean testLoginWithValidCredentialsSuccess(userName, password) {

    UIALogger.logMessage("Entering the Username");
    target.frontMostApp().mainWindow().textFields()["Title"].tap();
    target.frontMostApp().mainWindow().textFields()["Title"].setValue("");
    target.frontMostApp().keyboard().typeString(userName);
    UIALogger.logPass("Entered user name successfully");

    UIALogger.logMessage("Entering the passowrd");
    target.frontMostApp().mainWindow().secureTextFields()["Location"].tap();
    target.frontMostApp().mainWindow().secureTextFields()["Location"].setValue("");
    target.frontMostApp().keyboard().typeString(password);
    UIALogger.logPass("Entered password successfully");

    // Tap the login button
    target.frontMostApp().mainWindow().buttons()["Login"].tap();

    // Verify if settings button is present or not to confirm login successfully
    var buttons[] = target.frontMostApp().mainWindow().buttons()["Settings Button Neutral"];
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i] == "Settings Button Neutral") {
            return true;
        }
    }
    return false;
}
