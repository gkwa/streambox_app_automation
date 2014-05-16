VERSION=0.0.1

MAKEFLAGS += --warn-undefined-variables

UDID1 = eba88a92c6a33123b42450da634b243244ae282b

# https://github.com/einars/js-beautify
JSBEAUTIFY = js-beautify
basename=SBX-iPhone-instruments-v$(VERSION)
zipfile=$(basename).zip

FILES = src/*
FILES += Makefile

JS_BEAUTIFY_PARAMS =
JS_BEAUTIFY_PARAMS += --replace
JS_BEAUTIFY_PARAMS += --quiet

INS_PARAMS =
INS_PARAMS += -w $(UDID1)
INS_PARAMS += -t $(CURDIR)/MyTemplate.tracetemplate
INS_PARAMS += meproiphone

test1:
	instruments $(INS_PARAMS)

zip: $(zipfile)
$(zipfile): $(FILES)
	zip --exclude src/Credentials.js -9r $@ $(FILES)

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

.PHONY: dropbox
.PHONY: clean
.PHONY: pretty
.PHONY: zip
.PHONY: test1
