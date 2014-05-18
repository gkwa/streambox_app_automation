# if udid.mk file exists, then load UDID variable from it
ifneq (,$(wildcard udid.mk))
include udid.mk
else
$(error first manually create udid.mk from sample udid.mk.template)
endif

ifeq (,$(wildcard src/Credentials.js))
$(error you need to first manually create src/Credentials.js from src/Credentials.js.template)
endif

VERSION=0.0.1

MAKEFLAGS += --warn-undefined-variables

# https://github.com/einars/js-beautify
JSBEAUTIFY = js-beautify
INSTRUMENTS = instruments
basename=SBX-iPhone-instruments-v$(VERSION)
zipfile=$(basename).zip

FILES = src/*
FILES += Makefile

JS_BEAUTIFY_PARAMS =
INS_PARAMS =
QUIET_INSTRUMENTS =
ifneq ($(findstring $(MAKEFLAGS),s),s)
ifdef V
	INS_PARAMS += -v
else
	QUIET_INSTRUMENTS = @echo '   ' INSTRUMENTS $@;
	JS_BEAUTIFY_PARAMS += --quiet
endif
endif

JS_BEAUTIFY_PARAMS += --replace

INS_PARAMS += -w $(UDID1)
INS_PARAMS += -t $(CURDIR)/MyTemplate.tracetemplate
INS_PARAMS += meproiphone

test1:
	$(QUIET_INSTRUMENTS)$(INSTRUMENTS) $(INS_PARAMS)

zip: ZIP_EXCLUDE =
zip: ZIP_EXCLUDE += --exclude src/Credentials.js
zip: ZIP_EXCLUDE += --exclude udid.mk
zip: $(zipfile)
$(zipfile): $(FILES)
	zip $(ZIP_EXCLUDE) -9r $@ $(FILES)

dropbox: $(zipfile)
	[[ -d ~/Dropbox/Public/sb/ephemeral ]] && cp $(zipfile) ~/Dropbox/Public/sb/ephemeral

pretty:
	cd src && perl -i.Makefile.tmp -pe 's{(^#import.*)}{//HIDE_FROM_BEAUTIFIER$$1}' *.js *.js.template
	cd src && ls -1 *.js *.js.template | while read f; do $(JSBEAUTIFY) $(JS_BEAUTIFY_PARAMS) $$f; done;
	cd src && perl -i.Makefile.tmp -pe 's{//HIDE_FROM_BEAUTIFIER#import}{#import}' *.js *.js.template
	cd src && rm -f *.Makefile.tmp

clean:
	rm -f .DS_Store
	rm -f $(zipfile)
	rm -rf instrumentscli[0-9]*.trace

.PHONY: dropbox
.PHONY: clean
.PHONY: pretty
.PHONY: zip
.PHONY: test1
