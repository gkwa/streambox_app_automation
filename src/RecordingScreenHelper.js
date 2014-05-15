function testingTheSharingButtonIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        //UIALogger.logMessage(buttons[i].name());
        if (buttons[i].name() == "Sharing Button   Neutral") {
            return true;
        }
    }
    return false;
}

function testingPresetsButtonNeutralIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Presets Button   Neutral") {
            return true;
        }
    }
    return false;
}

function testingSettingsButtonNeutralIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Settings Button   Neutral") {
            return true;
        }
    }
    return false;
}


function testingHelpButtonNeutralIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Help Button   Neutral") {
            return true;
        }
    }
    return false;
}


function testingRecordButtonABNIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Record Button   ABN") {
            return true;
        }
    }
    return false;
}


function testingStopReliableXIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Stop   Reliable x") {
            return true;
        }
    }
    return false;
}


function testingMychannelActiveIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "My Channel   Active") {
            return true;
        }
    }
    return false;
}


function testingStreamBoxWatermarkIsPresent() {
    var buttons = target.frontMostApp().mainWindow().buttons();
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].name() == "Streambox Watermark") {
            return true;
        }
    }
    return false;
}
