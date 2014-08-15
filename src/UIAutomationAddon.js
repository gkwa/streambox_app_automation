/*
 * Test
 */

function test(title, f, options) {
    if (options == null) {
        options = {
            logTree: true
        };
    }
    target = UIATarget.localTarget();
    application = target.frontMostApp();
    UIALogger.logStart(title);
    try {
        f(target, application);
        UIALogger.logPass(title);
    } catch (e) {
        UIALogger.logError(e);
        if (options.logTree) target.logElementTree();
        UIALogger.logFail(title);
    }
};

function assertEquals(expected, received, message) {
    if (received != expected) {
        if (!message) message = "Expected " + expected + " but received " + received;
        throw message;
    }
}

function assertTrue(expression, message) {
    if (!expression) {
        if (!message) message = "Assertion failed";
        throw message;
    }
}

function assertFalse(expression, message) {
    assertTrue(!expression, message);
}

function assertNotNull(thingie, message) {
    if (thingie == null || thingie.toString() == "[object UIAElementNil]") {
        if (message == null) message = "Expected not null object";
        throw message;
    }
}

/*
 * Utils
 */

function delay(seconds) {
    UIATarget.localTarget().delay(seconds);
}

function tapTab(name) {
    var window = UIATarget.localTarget().frontMostApp().mainWindow();
    window.tabBar().buttons()[name].tap();
}

// Poll till the item becomes visible, up to a specified timeout
function waitVisible(element) {
    waitForVisible(element, 5, 0.25);
}

function waitForVisible(element, timeout, step) {
    if (step == null) {
        step = 0.5;
    }

    var stop = timeout / step;

    for (var i = 0; i < stop; i++) {
        delay(step); // for the animation
        if (element.isVisible()) {
            return;
        }
    }
    element.logElement();
    throw ("Not visible");
}

// Allows you to scroll to an element with a particular name and tap it.
function scrollToElementWithNameAndTap(scrollView, name) {
    var elementArray = scrollView.elements();
    if (scrollView instanceof UIATableView) {
        scrollToCellWithNameAndTap(scrollView, name);
        return;
    } else if (!(scrollView instanceof UIAScrollView)) {
        throw ("Expected a UIAScrollView");
    }

    var e = elementArray.scrollToElementWithName(name);
    waitForVisible(e, 5, 0.25);
    e.tap();
}

// Allows you to scroll to an cell with a particular name and tap it.
function scrollToCellWithNameAndTap(tableView, name) {
    var cellArray = tableView.cells();
    if (!(tableView instanceof UIATableView)) {
        throw ("Expected a UIAScrollView");
    }

    var e = cellArray.firstWithName(name);
    waitForVisible(e, 5, 0.25);
    e.tap();
}

UIAScrollView.prototype.scrollToElementWithNameAndTap = function(name) {
    scrollToElementWithNameAndTap(this, name)
};

function dumpElements(elements) {
    for (var i in elements) {
        UIALogger.logDebug(elements[i].toString());
    }
}
