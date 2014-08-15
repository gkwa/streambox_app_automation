/*
http://cocoamanifest.net/articles/2011/07/ui-automation-part-2-assertions-and-imports.html
UIATarget frontMostApp list controls logElementTree
UIAAlert UIATarget.onAlert function
*/

UIATarget.onAlert = function onAlert(alert) {
    var title = alert.name();
    UIALogger.logWarning("Alert with title ’" + title + "’ encountered!");
    UIATarget.localTarget().delay(5.0);
    return false; // use default handler
}

var target = UIATarget.localTarget();
// UIATarget.localTarget().delay(3.0);
var app = target.frontMostApp();
var window = app.mainWindow();
target.logElementTree();
