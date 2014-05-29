// Poll till the item becomes visible, up to a specified timeout
function waitElement(element) {
    waitForElement(element, 5, 0.25);
}

function waitForElement(element, timeout, step) {
    if (step == null) {
        step = 0.5;
    }

    var stop = timeout / step;

    for (var i = 0; i < stop; i++) {
        UIATarget.localTarget().delay(step);
        if (element().checkIsValid()) {
            return;
        }
    }
    element().logElement();
    throw ("Not Valid");
}

var navbar = function() {
    return app.navigationBar()
}
var tableCellLogout = function() {
    return appWindow.tableViews()["Empty list"].cells()["Logout"]
}
var button4AdvancedHelpOverlayCamera = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Camera"]
}
var button4AdvancedHelpOverlayChanne = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Channe"]
}
var button4AdvancedHelpOverlayPreset = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Preset"]
}
var button4AdvancedHelpOverlayRecord = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Record"]
}
var button4AdvancedHelpOverlaySettin = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Settin"]
}
var button4AdvancedHelpOverlaySharin = function() {
    return appWindow.buttons()["4 Advanced Help Overlay Sharin"]
}
var button4SimpleHelpOverlaySettings = function() {
    return appWindow.buttons()["4 Simple Help Overlay Settings"]
}
var button4SimpleHelpOverlaySharing = function() {
    return appWindow.buttons()["4 Simple Help Overlay Sharing"]
}
var buttonABNButtonNeutral = function() {
    return appWindow.buttons()["ABN Button   Neutral"]
}
var buttonACCEPT = function() {
    return appWindow.buttons()["ACCEPT"]
}
var buttonCANCEL = function() {
    return appWindow.buttons()["CANCEL"]
}
var buttonNEXT = function() {
    return appWindow.buttons()["NEXT"]
}
var buttonAWBButtonOn = function() {
    return appWindow.buttons()["AWB Button   On"]
}
var buttonCameraButtonNeutral = function() {
    return appWindow.buttons()["Camera Button   Neutral"]
}
var buttonCameraSwitchNeutral = function() {
    return appWindow.buttons()["Camera Switch   Neutral"]
}
var buttonEmptylist = function() {
    return appWindow.buttons()["Empty list"]
}
var buttonFlashOff = function() {
    return appWindow.buttons()["Flash   Off"]
}
var buttonFocusLockNeutral = function() {
    return appWindow.buttons()["Focus Lock   Neutral"]
}
var buttonFocusReticle = function() {
    return appWindow.buttons()["Focus Reticle"]
}
var buttonHelpButtonNeutral = function() {
    return appWindow.buttons()["Help Button   Neutral"]
}
var buttonLogin = function() {
    return appWindow.buttons()["Login"]
}
var buttonMyChannelActive = function() {
    return appWindow.buttons()["My Channel   Active"]
}
var buttonNotValid = function() {
    return appWindow.buttons()["Not Valid"]
}
var buttonPresetCustom = function() {
    return appWindow.buttons()["Preset   Custom"]
}
var buttonPresetRecordFile = function() {
    return appWindow.buttons()["Preset   Record File"]
}
var buttonPresetReliable = function() {
    return appWindow.buttons()["Preset   Reliable"]
}
var buttonPresetTalkingHead = function() {
    return appWindow.buttons()["Preset   Talking Head"]
}
var buttonPresetsButtonNeutral = function() {
    return appWindow.buttons()["Presets Button   Neutral"]
}
var buttonRecordButtonABN = function() {
    return appWindow.buttons()["Record Button   ABN"]
}
var buttonSettingsButtonNeutral = function() {
    return appWindow.buttons()["Settings Button   Neutral"]
}
var buttonShareButtonEmailActive = function() {
    return appWindow.buttons()["Share Button   Email   Active"]
}
var buttonShareButtonFacebookActi = function() {
    return appWindow.buttons()["Share Button   Facebook   Acti"]
}
var buttonShareButtonTwitterActiv = function() {
    return appWindow.buttons()["Share Button   Twitter   Activ"]
}
var buttonSharingButtonNeutral = function() {
    return appWindow.buttons()["Sharing Button   Neutral"]
}
var buttonShowstatsfornerds = function() {
    return appWindow.buttons()["Show stats for nerds"]
}
var buttonSignUp = function() {
    return appWindow.buttons()["Sign Up"]
}
var buttonStopTalkingHeadx = function() {
    return appWindow.buttons()["Stop  Talking Head x"]
}
var buttonStreamboxWatermark = function() {
    return appWindow.buttons()["Streambox Watermark"]
}
var buttonX = function() {
    return appWindow.buttons()["X"]
}
var buttonnoimage = function() {
    return appWindow.buttons()["no image"]
}
