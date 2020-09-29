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

heroku-prebuild:
	cd backend/api-gw && npm install
	cd backend/services/metrics-service && npm install
	cd backend/services/config-service && npm install
	cd frontend/templates/airframe && npm install

prestart:
	$(eval is_docker="$(shell which docker && docker --version)")
	@if [[ $(is_docker) ]]; then\
		echo "Docker installed";\
		make verify-setup;\
	fi

start-frontend:
	@if [ -d "./frontend/templates" ]; then \
		cd frontend/templates/airframe && npm run start;\
	else\
		cd frontend && npm run start;\
	fi

verify-setup:
	$(eval config="$(shell docker ps | grep -E 'config-service')")
	$(eval metrics="$(shell docker ps | grep -E 'metrics-service')")
	@if [[ $(config) && $(metrics) ]]; then\
		echo "Docker is up";\
	else\
		echo "Docker is not up";\
		lerna run provision;\
	fi

