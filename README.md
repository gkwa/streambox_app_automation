streambox_app_automation
========================

Automate testing the Streambox iPhone App using Instruments


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
