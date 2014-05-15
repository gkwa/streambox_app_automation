#import "Credentials.js"

Scratch Pad(Extra code)
var alert = "Incorrect login/password";

//Calling the passUser Function for the inValid password
UIALogger.logMessage("Calling the passUserFunction with inValid Password")
passUser(inValidUserName, inValidPassword);
UIALogger.logPass("Succesfully checked the negative case")

UIATarget.localTarget().delay(5);

//Calling the passUser Function for the valid password
UIALogger.logMessage("Calling the passUserFunction with Valid Password")
passUser(validUserName, validPassword);
UIALogger.logPass("Succesfully checked the positive case")

// Call second screen of StreamBox app
screenTest();
UIATarget.localTarget().delay(5);

// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["Settings Button   Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Display Name, stream123"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Username, stream123"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Title entry prompt"].tap();
target.frontMostApp().mainWindow().segmentedControls()[0].buttons()["No"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Title entry prompt"].tap();
target.frontMostApp().mainWindow().segmentedControls()[0].buttons()["Yes"].tap();

var backButton = target.frontMostApp().mainWindow().navigationBar().buttons()["Back"];
backButton.tap();

target.frontMostApp().mainWindow().buttons()["Camera Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Flash   Off"].tap();
target.frontMostApp().mainWindow().buttons()["Focus Lock   Neutral"].doubleTap();
target.frontMostApp().mainWindow().buttons()["Camera Switch   Neutral"].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["Camera Switch   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["Camera Switch   Neutral"].tap();

// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.frontMostApp().mainWindow().buttons()["AWB Button   Neutral"].tap();
target.frontMostApp().mainWindow().buttons()["My Channel   Active"].tap();
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
target.frontMostApp().mainWindow().buttons()["Settings Button Neutral"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Logout"].tap();
