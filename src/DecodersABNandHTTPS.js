function abnAndHTTPSisWorking() {
    var target = UIATarget.localTarget();
    var app = target.frontMostApp();
    var window = app.mainWindow();
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Live Server"].elements()["More info, Live Server"].tapWithOptions({
        tapOffset: {
            x: 0.60,
            y: 0.66
        }
    });
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["ABN"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["ABN"].switches()["ABN"].setValue(1);
    UIALogger.logPass("Able to set ABN value to 1");
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["ABN"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["ABN"].switches()["ABN"].setValue(0);

    UIALogger.logPass("Able to set ABN value to 0");
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Receiver, Server"].scrollToVisible();

    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["HTTPS"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["HTTPS"].switches()["HTTPS"].setValue(1);

    UIALogger.logPass("Able to set HTTP value to 1");

    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["HTTPS"].tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["HTTPS"].switches()["HTTPS"].setValue(0);

    UIALogger.logPass("Able to set HTTP value to 0");
    target.frontMostApp().navigationBar().leftButton().tap();
    return true;
}
