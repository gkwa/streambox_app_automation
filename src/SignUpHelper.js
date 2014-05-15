function testSignUplsSuccess(userName, password, email) {

    // Tap the Sign Up button
    target.frontMostApp().mainWindow().buttons()["Sign Up"].tap();

    //Enter all the text fields.

    //target.frontMostApp().mainWindow().textFields().firstWithPredicate("value like'Username'").tap();
    target.frontMostApp().mainWindow().textFields()[1].tap();
    target.frontMostApp().mainWindow().textFields()[1].setValue("");
    target.frontMostApp().keyboard().typeString(userName);

    //target.frontMostApp().mainWindow().textFields().firstWithPredicate("value like 'Username'").setValue("");
    //target.frontMostApp().keyboard().typeString(userName);
    target.frontMostApp().mainWindow().secureTextFields()[0].tap();
    target.frontMostApp().mainWindow().secureTextFields()[0].setValue("");
    target.frontMostApp().keyboard().typeString(password);
    target.frontMostApp().mainWindow().secureTextFields()[1].tap();
    target.frontMostApp().mainWindow().secureTextFields()[1].setValue("");
    target.frontMostApp().keyboard().typeString(password);
    target.frontMostApp().mainWindow().textFields()[1].tap();
    target.frontMostApp().mainWindow().textFields()[1].setValue("");
    target.frontMostApp().keyboard().typeString(email);

    //tap the Sign Up button again

    target.frontMostApp().mainWindow().buttons()["Sign Up"].tap();

    //Give a Delay for 10 seconds to enter the text.

    UIALogger.logMessage("Enter the text manually");
    UIATarget.localTarget().delay(10);

    //tap the Submit buttontarget.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);


    //target.frontMostApp().mainWindow().buttons()["Submit"].tap();


    // Verify if settings button is present or not to confirm sign up is successfully
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        UIALogger.logMessage(buttons[i].name());
        if (buttons[i].name() == "4 Advanced Help Overlay Camera") {
            return true;
        }
    }
    return false;
}
