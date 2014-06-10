function testAddingTheDecodersandDeletingIsTrue() {
    target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
    if (!(target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].checkIsValid())) {
        return false;
    } else {
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Decoders, Live Server"].tap();
        target.frontMostApp().navigationBar().rightButton().tap();
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Name"].tap();
        target.frontMostApp().keyboard().typeString("deee\n");
        target.frontMostApp().navigationBar().rightButton().tap();
        var checkingAdd = target.frontMostApp().mainWindow().tableViews()[0].cells()[2].elements()["deee"].checkIsValid();
        if (checkingAdd == false) {
            UIALogger.logPass("Decoder Added succesfully")
        } else {
            UIALogger.logFail("Decoder not addedd successfully")
        }
        UIATarget.localTarget().delay(3);

        target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({
            tapOffset: {
                x: 0.93,
                y: 0.25
            }
        });
        target.frontMostApp().navigationBar().rightButton().tap();
        var checkingDelete = target.frontMostApp().mainWindow().tableViews()[0].cells()[2].elements()["deee"].checkIsValid();
        if (checkingDelete == false) {
            UIALogger.logPass("Preset Deleted succesfully")
        } else {
            UIALogger.logFail("Preset not deleted successfully")
        }

        return true;
    }

    return false;

}
