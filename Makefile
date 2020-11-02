BIN = node_modules/.bin
PATH := $(BIN):$(PATH)
SHELL := /bin/bash

init:
	npm i && npx lerna bootstrap

migrate:
	lerna run migrate

seed:
	lerna run seed

provision:
	lerna run provision

pre-commit:
	lerna run pre-commit

prestart:
	$(eval docker_down="$(shell docker ps | grep 'Cannot connect to the Docker daemon')")
	@if [[ $(docker_down) ]]; then\
		echo ;\
		echo "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";\
		echo "////    You don’t have Docker installed / running.                                                                                                                //";\
		echo "///     Please note that in order to be able to run a full micro-services environment, it is recommended to setup docker including the databases we support.     ///";\
		echo "//      This project will still run and you will enjoy the use of enterprise features but the backend will not be able to connect to the databases              ////";\
		echo "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";\
		echo ;\
	else\
		echo "Docker installed";\
		make verify-setup;\
	fi

start-frontend:
	cd frontend && npm run start;\

start-backend:
	concurrently "npm run start-config-service" "npm run start-metrics-service" "sleep 5 && npm run start-api-gw"

start:
	npm run start

verify-setup:
	$(eval config="$(shell docker ps | grep -E 'config-service')")
	$(eval metrics="$(shell docker ps | grep -E 'metrics-service')")
	@if [[ $(config) && $(metrics) ]]; then\
		echo "Docker containers are up :)";\
	else\
		echo "Docker containers are down, runnig docker-compose...";\
		lerna run provision;\
	fi

