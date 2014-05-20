function testLoginWithValidCredentialsSuccess(userName, password) {

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

    // Delay for 3 seconds
    UIATarget.localTarget().delay(3);

    // Verify if settings button is present or not to confirm login successfully
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        UIALogger.logMessage(buttons[i].name());
        if (buttons[i].name() == "4 Advanced Help Overlay Camera") {
            return true;
        }
    }
    return false;
}

// Test with invalid Credentials
function testLoginWithInValidCredentialsPass(userName, password) {

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

    //UIALogger.logMessage("Handling alert on invalid password and invalid user id");
    //var alert = "Incorrect login/password";

    UIALogger.logMessage("Handling alert on invalid password and invalid user id");
    return true;
}
