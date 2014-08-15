ifneq (zip,$(findstring $(MAKECMDGOALS), zip))
ifneq (clean,$(MAKECMDGOALS))
ifneq (,$(wildcard settings.mk))
# if settings.mk file exists, then load UDID variable from it
include settings.mk
else
$(error first manually create settings.mk from sample settings.mk.template, i.e. cp settings.mk.template settings.mk, then manually edit settings.mk)
endif

ifeq (,$(wildcard src/Credentials.js))
$(error you need to first manually create src/Credentials.js from src/Credentials.js.template, i.e. cp src/Credentials.js.template src/Credentials.js, then manually edit src/Credentials.js)
endif
endif
endif

VERSION=0.0.1

MAKEFLAGS += --warn-undefined-variables

# https://github.com/einars/js-beautify
JSBEAUTIFY = js-beautify
INSTRUMENTS = instruments
branch_name := $(shell sh -c 'git rev-parse --abbrev-ref HEAD')
basename=SBX_iPhone_instruments-$(VERSION)-$(branch_name)
zipfile=$(basename).zip

JS_BEAUTIFY_PARAMS =
INS_PARAMS =
QUIET_MKDIR =
QUIET_INSTRUMENTS =
ifneq ($(findstring $(MAKEFLAGS),s),s)
ifdef V
	INS_PARAMS += -v
else
	QUIET_MKDIR = @
	QUIET_INSTRUMENTS = @echo '   ' INSTRUMENTS $@;
	JS_BEAUTIFY_PARAMS += --quiet
endif
endif

JS_BEAUTIFY_PARAMS += --replace

INS_PARAMS += -w $(UDID1)
INS_PARAMS += -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate
INS_PARAMS += -D output
INS_PARAMS += $(APP)
INS_PARAMS += -e UIARESULTSPATH output.run

all: testfilehelper
all: testmain
all: testadd-delete-decoders
all: test-stream-for-period
all: test-alert-when-please-wait-alert-pops-up
all: UIAutomationAddon-test
all: test1020
all: test-alert-when-please-wait-alert-pops-up
all: test-whether-already-authenticated

testfilehelper:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/FileHelper.js

testmain:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/Main.js

test-ifb:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/IFBHelper.js

testadd-delete-decoders:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/testadd-delete-decoders.js

test-metadata:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/MetaData.js
test-alert-when-please-wait-alert-pops-up:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/test-alert-when-please-wait-alert-pops-up.js

test-whether-already-authenticated:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/test-whether-already-authenticated.js

test1020:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/test-alert-when-please-wait-alert-pops-up.js 2>&1 | grep -i 'Warning: Alert with title' -c

wait-for-elements-to-become-valid:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/wait-for-elements-to-become-valid.js

test-stream-for-period:
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/test-stream-for-period.js

UIAutomationAddon-test: src/UIAutomationAddon.js
	$(QUIET_MKDIR)mkdir -p output.run
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS) -e UIASCRIPT src/UIAutomationAddon-test.js

src/UIAutomationAddon.js:
	curl --output $@ https://gist.githubusercontent.com/TaylorMonacelli/e1eca27f7c90c4fb29f8/raw/a7e52bd757766966e92a4985e76650cdff59dfe6/UIAutomationAddon.js

helpurls:
	grep -oE http.* README.md | xargs open

zip: $(zipfile)
$(zipfile):
	git archive --format zip --output $(zipfile) master

dropbox: $(zipfile)
	[[ -d ~/Dropbox/Public/sb/ephemeral ]] && cp $(zipfile) ~/Dropbox/Public/sb/ephemeral

pretty:
	cd src && perl -i.Makefile.tmp -pe 's{(^#import.*)}{//HIDE_FROM_BEAUTIFIER$$1}' *.js *.js.template
	cd src && ls -1 *.js *.js.template | while read f; do $(JSBEAUTIFY) $(JS_BEAUTIFY_PARAMS) $$f; done;
	cd src && perl -i.Makefile.tmp -pe 's{//HIDE_FROM_BEAUTIFIER#import}{#import}' *.js *.js.template
	cd src && rm -f *.Makefile.tmp
	doctoc . >/dev/null

clean:
	rm -f .DS_Store
	rm -f $(zipfile)
	rm -rf output.trace
	rm -rf output.run

.PHONY: dropbox
.PHONY: clean
.PHONY: pretty
.PHONY: zip
.PHONY: test1
