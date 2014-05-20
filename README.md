streambox_app_automation
========================

Automate testing the Streambox iPhone App using Instruments


Getting started
===============

Common problems and solutions
=============================

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
Is js-beautifier installed?
```sh
sudo easy_install pip
sudo pip install --upgrade six
sudo pip install --upgrade jsbeautifier
npm -g install js-beautify
npm install js-beautify
```
from https://github.com/einars/js-beautify


I get error: 2014-05-19 23:07:13.199 instruments[30608:1207] Failed to start Instruments daemon for 'iOS' on 'iPhone (v7.1.1)' (The service is invalid.)
--------------------------------------------------------------------------------------------------------------------------------------------------------
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
