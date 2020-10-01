BIN = node_modules/.bin
PATH := $(BIN):$(PATH)
SHELL := /bin/bash

migrate:
	lerna run migrate

seed:
	lerna run seed

provision:
	lerna run provision

pre-commit:
	lerna run pre-commit

prestart:
	$(eval is_docker="$(shell which docker && docker --version)")
	@if [[ $(is_docker) ]]; then\
		echo "Docker installed";\
		make verify-setup;\
	fi

start-frontend:
	cd frontend && npm run start;\

verify-setup:
	$(eval config="$(shell docker ps | grep -E 'config-service')")
	$(eval metrics="$(shell docker ps | grep -E 'metrics-service')")
	@if [[ $(config) && $(metrics) ]]; then\
		echo "Docker is up";\
	else\
		echo "Docker is not up";\
		lerna run provision;\
	fi

