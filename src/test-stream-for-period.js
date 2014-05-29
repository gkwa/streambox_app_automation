#import "Credentials.js"
#import "LoginHelper.js"
#import "FunctionLib.js"

UIALogger.logMessage("start");

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var appWindow = app.mainWindow();

if (buttonSignUp().checkIsValid()) {
    if (buttonSignUp().isVisible()) {
        UIALogger.logMessage("I'm not yet logged in");
        testLoginWithValidCredentialsSuccess(validUserName, validPassword);
    }
}

waitElement(buttonPresetsButtonNeutral);
buttonPresetsButtonNeutral().tap();

waitElement(buttonPresetTalkingHead);
buttonPresetTalkingHead().tap();

// start ABN
waitElement(buttonStopTalkingHeadx);
buttonStopTalkingHeadx().tap();

//Alow ABN to calculate for 15 seconds, then Accept
waitElement(buttonACCEPT);
UIATarget.localTarget().delay(15);
buttonACCEPT().tap();

// stream for a while
UIATarget.localTarget().delay(2 * 60); // stream
buttonStopTalkingHeadx().tap();

// wait for settings button
waitElement(buttonSettingsButtonNeutral);
buttonSettingsButtonNeutral().tap();

// wait for logout button
waitElement(tableCellLogout);
tableCellLogout().tap();

// wait for initial screen sinup button
waitElement(buttonSignUp);
if (buttonSignUp().checkIsValid()) {
    if (buttonSignUp().isVisible()) {
        UIALogger.logMessage("I'm now logged out");
    }
}
