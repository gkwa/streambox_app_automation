#import "LoginHelper.js"
#import "Credentials.js"
#import "UIAutomationAddon.js"

//var target = UIATarget.localTarget();
//var app = target.frontMostApp();

test("Title", function(target, app) {

    var window = app.mainWindow();
    var view = window.elements()[0];

    waitVisible(window.elements()[0]);
    if (window.elements()[0] instanceof UIAPopover) {
        UIALogger.logMessage("UIAPopover found!");

        var loginTable;
        for (var i in window.elements()[0].elements()) {
            if (window.elements()[0].elements()[i] instanceof UIATableView) {
                UIALogger.logMessage("Found login table");
                loginTable = window.elements()[0].elements()[i];
                break;
            }
        }

        assertTrue((loginTable instanceof UIATableView), "Expected UIATableView");

        waitVisible(loginTable);
        scrollToElementWithNameAndTap(loginTable, userLogin);
    }
});
