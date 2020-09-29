BIN = node_modules/.bin
PATH := $(BIN):$(PATH)
SHELL := /bin/bash

provision:
	lerna run provision

pre-commit:
	lerna run pre-commit

prestart:
	$(eval config="$(shell docker ps | grep -E 'config-service')")
	$(eval metrics="$(shell docker ps | grep -E 'metrics-service')")
	@if [[ $(config) && $(metrics) ]]; then\
		echo "Docker is up";\
	else\
		echo "Docker is not up";\
		make provision;\
	fi

