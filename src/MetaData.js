var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEUP);
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Meta Data"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Title"].tap();
target.frontMostApp().keyboard().typeString("uijjj");
target.frontMostApp().statusBar().elements()["3 of 3 Wi-Fi bars"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Location"].tap();
target.frontMostApp().keyboard().typeString("jjj");
target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Group"].tap();
target.frontMostApp().keyboard().typeString("uii");
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.16,
        y: 0.05
    }
});
target.frontMostApp().navigationBar().tapWithOptions({
    tapOffset: {
        x: 0.14,
        y: 0.08
    }
});
target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().buttons()[20].tap();
target.frontMostApp().mainWindow().buttons()[20].tap();
target.frontMostApp().mainWindow().buttons()["Presets Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Preset   Custom"].tap();
