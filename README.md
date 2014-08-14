<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [streambox_app_automation](#streambox_app_automation)
- [Getting started](#getting-started)
  - [Tutorials / tidbits to get you going](#tutorials--tidbits-to-get-you-going)
- [Common problems and solutions](#common-problems-and-solutions)
  - [When starting Streambox App testing, you need to open Xcode or else tests won't run](#when-starting-streambox-app-testing-you-need-to-open-xcode-or-else-tests-wont-run)
  - [Error when running make](#error-when-running-make)
  - ['make pretty' gives error](#make-pretty-gives-error)
  - [I get error: Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)](#i-get-error-failed-to-start-instruments-daemon-for-ios-on-iphone-v711-the-service-is-invalid)
  - [How to handle error: 2014-08-14 18:23:34 +0000 Fail: Could not start script, target application is not frontmost.](#how-to-handle-error-2014-08-14-182334-0000-fail-could-not-start-script-target-application-is-not-frontmost)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

streambox_app_automation
========================

Automate testing the Streambox iPhone App using Instruments

Getting started
===============

Tutorials / tidbits to get you going
------------------------------------
* http://cocoamanifest.net/articles/2011/07/ui-automation-part-2-assertions-and-imports.html
* http://www.error454.com/2010/11/08/iphoneipodipad-automation-basics/
* http://developer.apple.com/library/ios/documentation/DeveloperTools/Reference/UIAutomationRef/_index.html
* http://www.mattmccomb.com/blog/2013/06/02/ios-functional-testing-with-uiautomation/
* https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/UsingtheAutomationInstrument/UsingtheAutomationInstrument.html#//apple_ref/doc/uid/TP40004652-CH20-SW83
* http://alexvollmer.com/posts/2010/07/03/working-with-uiautomation
* https://developer.apple.com/library/ios/documentation/DeveloperTools/Reference/UIAutomationRef/UIAutomationRef.pdf
* UIAElement Class Reference https://developer.apple.com/library/ios/documentation/ToolsLanguages/Reference/UIAElementClassReference/UIAElement/UIAElement.html
* http://www.tuneupjs.org/running.html
* A JavaScript library to ease automated iOS UI testing with UIAutomation and Instruments https://github.com/alexvollmer/tuneup_js
* bwoken: iOS UIAutomation Test Runner
** https://github.com/bendyworks/bwoken
* Frank test runner uses Cucumber, but requires you have the App source:   No, sorry. In order to test an application with Frank you need tocompile or link the Frank server into the application you are testing.  http://www.testingwithfrank.com/faq.html
** Frank http://www.stewgleadow.com/blog/2011/10/26/which-automated-ios-testing-tool-to-use



Common problems and solutions
=============================

When starting Streambox App testing, you need to open Xcode or else tests won't run
-----------------------------------------------------------------------------------
Screencast: http://download.streambox.com/screencasts/when-starting-iphone-streambox-app-for-first-time-you-should-start-xcode-manually-to-get-tests-to-run.mov

```sh
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(master)]$ make V=1 testfilehelper
mkdir -p output.run
instruments  -v -w 43f6bbb40edd71ec7d63490e37fd504c09b0f223 -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate -D output meproiphone.app -e UIARESULTSPATH output.run -e UIASCRIPT src/FileHelper.js
2014-05-21 21:26:32.897 instruments[21651:1207] Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
2014-05-21 21:26:33.039 instruments[21651:2203] Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
Instruments : template : file://localhost/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate
Instruments : Plugin Search Paths (
    "/Users/demo/Library/Application Support/Instruments/PlugIns",
    "/Library/Application Support/Instruments/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/usr/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/usr/bin/PlugIns",
    "/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/Library/Instruments/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/Library/Instruments/PlugIns"
)
Instruments : Loaded Instruments (
    "Instrument Type (name:Sudden Termination; category:Behavior)",
    "Instrument Type (name:Signposts; category:Behavior)",
    "Instrument Type (name:Cocoa Layout; category:Behavior)",
    "Instrument Type (name:Core Data Saves; category:Core Data)",
    "Instrument Type (name:Core Data Fetches; category:Core Data)",
...
    "Instrument Type (name:Cocoa Events; category:User Interface)",
    "Instrument Type (name:Carbon Events; category:User Interface)"
)
Instruments : Loading template 'file://localhost/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate'
Instruments : Setting Instrument Trace Command : Instrument Command (purpose:Idle; output destination:output.trace -- file://localhost/Users/demo/pdgh/streambox_app_automation/)
Instruments : Trace Command Recognized
Instruments : Instrument 'Automation - meproiphone' rejected command 'Instrument Command (purpose:Trace; output destination:output.trace -- file://localhost/Users/demo/pdgh/streambox_app_automation/)' for target 'Executable (name:meproiphone; arguments:)'
Instruments : Instruments Rejected Command
make: *** [testfilehelper] Error 253
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(master)]$ make V=1 testfilehelper
mkdir -p output.run
instruments  -v -w 43f6bbb40edd71ec7d63490e37fd504c09b0f223 -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate -D output meproiphone.app -e UIARESULTSPATH output.run -e UIASCRIPT src/FileHelper.js
Instruments : template : file://localhost/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate
Instruments : Plugin Search Paths (
    "/Users/demo/Library/Application Support/Instruments/PlugIns",
    "/Library/Application Support/Instruments/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/usr/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/usr/bin/PlugIns",
    "/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/Library/Instruments/PlugIns",
    "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/Library/Instruments/PlugIns"
)
Instruments : Loaded Instruments (
    "Instrument Type (name:Sudden Termination; category:Behavior)",
    "Instrument Type (name:Signposts; category:Behavior)",
    "Instrument Type (name:Cocoa Layout; category:Behavior)",
    "Instrument Type (name:Core Data Saves; category:Core Data)",
...
    "Instrument Type (name:Cocoa Events; category:User Interface)",
    "Instrument Type (name:Carbon Events; category:User Interface)"
)
Instruments : Loading template 'file://localhost/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate'
Instruments : Setting Instrument Trace Command : Instrument Command (purpose:Idle; output destination:output.trace -- file://localhost/Users/demo/pdgh/streambox_app_automation/)
Instruments : Trace Command Recognized
Instruments : Instrument 'Automation - meproiphone' accepted command 'Instrument Command (purpose:Trace; output destination:output.trace -- file://localhost/Users/demo/pdgh/streambox_app_automation/)' for target 'Executable (name:meproiphone; arguments:)'
Instruments : Instrument 'Automation - meproiphone' verified command 'Instrument Command (purpose:Trace; output destination:output.trace -- file://localhost/Users/demo/pdgh/streambox_app_automation/)' for target 'Executable (name:meproiphone; arguments:)'
Instruments : Instruments Accepted Command
Instruments : Preparing To Start Trace
Instruments : Starting Instrument(s)
2014-05-22 04:27:13 +0000 Default: Entering the Username
2014-05-22 04:27:14 +0000 Debug: Cannot perform action on invalid element: UIAElementNil from target.frontMostApp().mainWindow().textFields()["Title"]
2014-05-22 04:27:14 +0000 Error: Script threw an uncaught JavaScript error: Cannot perform action on invalid element: UIAElementNil from target.frontMostApp().mainWindow().textFields()["Title"] on line 4 of LoginHelper.js
Instruments : Stopping Instrument(s)
2014-05-22 04:27:14 +0000 Stopped: Script was stopped by the user
Instruments : Stopping Instrument(s)
2014-05-21 21:27:14.594 instruments[21707:1207] Output Paths: (
    "/Users/demo/pdgh/streambox_app_automation/output.trace",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/instrument_data",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/form.template",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/Trace1.run",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/instrument_data/1E2B732A-6DCA-48F6-9272-CF92DECBC024",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/instrument_data/1E2B732A-6DCA-48F6-9272-CF92DECBC024/run_data",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/shared_data/1.run",
    "/Users/demo/pdgh/streambox_app_automation/output.trace/instrument_data/1E2B732A-6DCA-48F6-9272-CF92DECBC024/run_data/1.run.zip"
)
Instruments Trace Complete (Duration : 6.297383s; Output : /Users/demo/pdgh/streambox_app_automation/output.trace)
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(master)]$
```

Error when running make
-----------------------
Is your UDID correct?  Is your iPhone connected?
```sh
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(master)]$ make
    INSTRUMENTS test1
Instruments Usage Error : Unknown hardware device specified: 43f6bbb40edd71ec7d63490e37fd504c09b0f223
Known Devices:
demo’s MacBook Pro (2) (com.apple.instruments.devices.local)
iPhone - Simulator - iOS 7.1
iPhone Retina (3.5-inch) - Simulator - iOS 7.1
iPhone Retina (4-inch) - Simulator - iOS 7.1
iPhone Retina (4-inch 64-bit) - Simulator - iOS 7.1
iPad - Simulator - iOS 7.1
iPad Retina - Simulator - iOS 7.1
iPad Retina (64-bit) - Simulator - iOS 7.1
make: *** [test1] Error 255
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(master)]$
```
'make pretty' gives error
-------------------------
Is js-beautifier installed? https://github.com/einars/js-beautify
```sh
brew install npm
npm -g install js-beautify
npm install js-beautify
```
Is doctoc installed?
```sh
npm install -g doctoc
export NODE_PATH=/usr/local/lib/node
doctoc .
```

I get error: Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
--------------------------------------------------------------------------------------------------------
```sh
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(move-tests-to-separte-files)]$ make test1
    INSTRUMENTS test1
2014-05-19 23:07:13.199 instruments[30608:1207] Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
2014-05-19 23:07:13.328 instruments[30608:2003] Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
make: *** [test1] Error 253
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(move-tests-to-separte-files)]$ make test1
    INSTRUMENTS test1
2014-05-19 23:08:01.473 instruments[30660:1207] Permission to debug com.streambox.iphapp was denied.  The app must be signed with a development identity (e.g. iOS Developer).
Instruments Trace Error : Error Starting Recording
make: *** [test1] Error 253
[demo@demos-MacBook-Pro-2:~/pdgh/streambox_app_automation(move-tests-to-separte-files)]$
```
When I got "Failed to start Instruments daemon" message, I opened Xcode, Window, Organizer and did nothing else.

Next, I  ran make test1 again.  This time I got message
```
2014-05-19 23:08:01.473 instruments[30660:1207] Permission to debug com.streambox.iphapp was denied.  The app must be signed with a development identity (e.g. iOS Developer).
```
which reminds me: I just now downloaded the newest Streambox App v3.0.14 from Apple store and I guess the Apple store versions are signed differently than by development builds.

How to handle error: 2014-08-14 18:23:34 +0000 Fail: Could not start script, target application is not frontmost.
--------------------------------------------------------------------------------------------
```sh
[Administrator@intranet:~/pdev/streambox_app_automation(master)]$ make
    INSTRUMENTS testfilehelper
2014-08-14 18:23:34 +0000 Fail: Could not start script, target application is not frontmost.
Instruments Trace Complete (Duration : 13.163401s; Output : /Users/Administrator/pdev/streambox_app_automation/output.trace)
    INSTRUMENTS testmain
```
