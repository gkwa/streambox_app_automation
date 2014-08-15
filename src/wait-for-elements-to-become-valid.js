/*
waitforvisible uiautomation

http://stackoverflow.com/questions/7044554/ios-uiautomation-uiaelement-isvisible-throwing-stale-response

You are passing 'element' object to this function. When the function
starts - your 'element' object has isVisible property = false or even
there is no such object on the screen and you are passing [object
UIAElement Nil]. So trying to get the property isVisible for this object
at any time will always return fasle.

If you want this function work - you need to get this 'element' object
updated in your function. So instead of

if (element.isVisible())

you need to get element object first and try to get isVisible()
property.

if (target.manWindow().elements()[0].isVisible())

After this change there will be no need to pass 'element' object since
this function will work only with one element.

To make this function to work with any element - you need to pass not an
'element' object but the function that returns 'element' object you want
to check. This is an example:

var target = ...;
var mainWindow = ...;

//function that returns firstObject
var firstElement = function()
{
    return mainWindow.elements()[0];
}
//function that returns secondObject
var secondElement = function()
{
    return mainWindow.elements()[1];
}
//this is what you need to change in your 'wait' function. Change

if (element.isVisible())
with

if (element().isVisible())
Example of your function call:

waitForElement(firstElement, 10, 1);
waitForElement(secondElement, 10, 1);

NOTE: if you will cal your waitForElement function with firstElement() -
function will fail with the same error. This makes your tests more
complicated but it works.

*/

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
        if (!testLoginWithValidCredentialsSuccess(validUserName, validPassword)) {
            UIALogger.logFail("failed to login");
        }
    }
}

waitElement(buttonSettings);
buttonSettings().tap();

waitElement(tableCellLogout);
tableCellLogout().tap();

waitElement(buttonSignUp);
if (buttonSignUp().checkIsValid()) {
    if (buttonSignUp().isVisible()) {
        UIALogger.logMessage("I'm now logged out");
    }
}
