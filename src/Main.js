#import "LoginHelper.js"
#import "LoginUsingFacebookHelper.js"
#import "SignUpHelper.js"
#import "InitialScreenTestHelper.js"
#import "RecordingScreenHelper.js"
#import "AddingPresets.js"
#import "FileHelper.js"
#import "DecodersABNandHTTPS.js"
#import "AddingDecoders.js"
#import "Credentials.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
//===============================================================
//Testing the Initial Screen
var testName = "Initial Screen Test";
UIALogger.logMessage(testName);
//------------------------------------------------------------
UIALogger.logMessage("Testing the ChannelIsPresent Button");
var screen1 = testingTheChannelIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
//------------------------------------------------------------
UIALogger.logMessage("Testing the How it works Button");
var screen2 = testingTheHowItWorksIsPresent();
if (screen2 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
//--------------------------------------------------------------
UIALogger.logMessage("Testing the or Button");
var screen3 = testingTheOrIsPresent();
if (screen3 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
//--------------------------------------------------------------
UIALogger.logMessage("Testing the forgot password");
var screen4 = testingTheForgotPasswordIsPresent();
if (screen4 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}



//================================================================
//Testing the SignUp page
var signUpUserName = "stream";
var singUpPassword = "stream";
var signUpEmail = "stream@gmail.com"

var result1 = testSignUplsSuccess(signUpUserName, singUpPassword, signUpEmail);
if (result1 == true) {
    UIALogger.logPass("Test passed succesfully");
    //Logout
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

} else {
    UIALogger.logFail("Test failed");
}
UIALogger.logMessage("Tapping the Back Button");
target.frontMostApp().mainWindow().buttons()["Back"].tap();

//================================================================
//Testing the login with valid credentials PASS/Success
var result2 = testLoginWithValidCredentialsSuccess(validUserName, validPassword);
if (result2 == true) {
    UIALogger.logPass("Test passed succesfully");
} else {
    UIALogger.logFail("Test failed");
}
//Logout
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

//===================================================================
// Testing the login with inValid credentials PASS/Success
var result3 = testLoginWithInValidCredentialsPass(invalidUserName, invalidPassword);
if (result3 == true) {
    var alert = "Incorrect login/password";
    UIATarget.onAlert = function onAlert(alert) {
        UIALogger.logMessage("ghjjkl");
        var title = alert.name();
        UIALogger.logWarning("Alert with title '" + title + "' encountered.");
        if (title == "Incorrect login/password") {
            alert.buttons()["OK"].tap();
            UIALogger.logMessage("Alert Handled successfully");
            UIALogger.logPass("Alert Handled Properly on Invalid Password")
            //return true;  //alert handled, so bypass the default handler
        }
        // return false to use the default handler
        //return false;
    }

    UIALogger.logPass("Test passed succesfully");
} else {
    UIALogger.logFail("Test failed");
}

//=================================================================
//Testing the login using Facebbok

UIALogger.logMessage("Checking the log in using facebook");
var result4 = testLoginUsingFacebooklsSuccess();
if (result4 == true) {
    UIALogger.logPass("Log In Using Facebook Test passed succesfully");
} else {
    UIALogger.logFail("Log In Using Facebook Test failed");
}
//Logout
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

//==================================================================
//Testing the Recording Screen
testLoginWithValidCredentialsSuccess(validUserName, validPassword);

UIATarget.localTarget().delay(3);

var testName2 = "Testing the recording screen";
UIALogger.logMessage(testName2);


//------------------------------------------------------------
UIALogger.logMessage("Testing the Sharing Button Neutral");
var screen1 = testingTheSharingButtonIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);

//------------------------------------------------------------
UIALogger.logMessage("Testing the Preset Button Neutral");
var screen1 = testingPresetsButtonNeutralIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);

//------------------------------------------------------------
UIALogger.logMessage("Testing the Settings Button Neutral");
var screen1 = testingSettingsButtonNeutralIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);

//------------------------------------------------------------
UIALogger.logMessage("Testing the Help Button Neutral");
var screen1 = testingHelpButtonNeutralIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);


//------------------------------------------------------------
UIALogger.logMessage("Testing the Record Button Neutral");
var screen1 = testingRecordButtonABNIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);


//------------------------------------------------------------
UIALogger.logMessage("Testing the Stop reliable Button");
var screen1 = testingStopReliableXIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);


//------------------------------------------------------------
UIALogger.logMessage("Testing the My Channel Active button");
var screen1 = testingMychannelActiveIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);


//------------------------------------------------------------
UIALogger.logMessage("Testing the Streambox Watermark");
var screen1 = testingStreamBoxWatermarkIsPresent();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

//===================================================================
//Test case for adding the presets.
testLoginWithValidCredentialsSuccess(validUserName, validPassword);
UIALogger.logMessage("Adding the Presets and deleting the presets");
var screen1 = testAddingThePresetsanaDeletingIsTrue();
if (screen1 == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);

//===================================================================
//Test case for testing the file, uploading the file and deleting 
testLoginWithValidCredentialsSuccess(validUserName, validPassword);
UIALogger.logMessage("Creating the file, deleting and uploading");
var result = testingTheFile();
if (result == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.07,
        y: 0.09
    }
});
target.frontMostApp().navigationBar().leftButton().tap();

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

//===================================================================

//Test case for selecting ABN and HTTPs in the decoders
testLoginWithValidCredentialsSuccess(validUserName, validPassword);
UIALogger.logMessage("Checking abn and http");

var resutls = abnAndHTTPSisWorking()

if (result == true) {
    UIALogger.logPass("Test Passed Succesfully");
} else {
    UIALogger.logFail("Test Failed");
}
UIATarget.localTarget().delay(2);
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.07,
        y: 0.09
    }
});
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.07,
        y: 0.09
    }
});

//target.frontMostApp().navigationBar().leftButton().tap();

target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

//=============================================================

//
