npm=$(shell which npm)
credential=credential.dev

install:
	$(npm) install
	test -f credential.dev || cp credential.sample credential.dev

run:
	./bin/run-new-chennels $(credential)

