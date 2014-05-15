function testAddingThePresetsanaDeletingIsTrue() {
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    if (!(target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Presets"].checkIsValid())) {
        return false;
    } else {
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Presets"].tap();
        target.frontMostApp().navigationBar().rightButton().tap();
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Name"].tap();
        target.frontMostApp().keyboard().typeString("deee\n");
        target.frontMostApp().navigationBar().rightButton().tap();
        var checkingAdd = target.frontMostApp().mainWindow().tableViews()[0].cells()[2].elements()["deee"].checkIsValid();
        if (checkingAdd == false) {
            UIALogger.logPass("Preset Added succesfully")
        } else {
            UIALogger.logFail("Preset not addedd successfully")
        }
        UIATarget.localTarget().delay(3);

        target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({
            tapOffset: {
                x: 0.94,
                y: 0.82
            }
        });
        target.frontMostApp().navigationBar().rightButton().tap();
        var checkingDelete = target.frontMostApp().mainWindow().tableViews()[0].cells()[2].elements()["deee"].checkIsValid();
        if (checkingDelete == false) {
            UIALogger.logPass("Preset Deleted succesfully")
        } else {
            UIALogger.logFail("Preset not deleted successfully")
        }
        target.frontMostApp().navigationBar().leftButton().tap();
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

        return true;
    }
    target.frontMostApp().navigationBar().leftButton().tap();
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();

    return false;


}
