function testingTheChannelIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Channel") {
            return true;
        }
    }
    return false;
}

function testingTheHowItWorksIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "How it works") {
            return true;
        }
    }
    return false;
}

function testingTheOrIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "or") {
            return true;
        }
    }
    return false;
}

function testingTheForgotPasswordIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == " Forgot Password") {
            return true;
        }
    }
    return false;
}
