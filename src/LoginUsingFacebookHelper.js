function testLoginUsingFacebooklsSuccess(userName, password) {

    // Tap the login button
    target.frontMostApp().mainWindow().buttons()["Log In Using Facebook >"].tap();

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
