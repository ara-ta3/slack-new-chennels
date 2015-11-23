npm=$(shell which npm)

install:
	$(npm) install
	test -f credential.dev || cp credential.sample credential.dev

run:
	./bin/run-new-chennels credential=./credential.dev

