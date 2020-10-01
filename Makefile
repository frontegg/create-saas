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
	$(eval is_docker="$(shell command -v docker)")
	@if [[ $(is_docker) ]]; then\
		echo "Docker installed";\
		make verify-setup;\
	else\
		echo "Docker is not installed, for full experience please install docker";\
	fi

start-frontend:
	cd frontend && npm run start;\

start-backend:
	concurrently "npm run start-config-service" "npm run start-metrics-service" "sleep 5 && npm run start-api-gw"

verify-setup:
	$(eval config="$(shell docker ps | grep -E 'config-service')")
	$(eval metrics="$(shell docker ps | grep -E 'metrics-service')")
	@if [[ $(config) && $(metrics) ]]; then\
		echo "Docker is up";\
	else\
		echo "Docker is not up";\
		lerna run provision;\
	fi

