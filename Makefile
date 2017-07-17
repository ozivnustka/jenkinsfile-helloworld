bin := node_modules/.bin/

now = `date -u +"%Y-%m-%dT%H:%M:%SZ"`
log = echo "$(now) $(1)"

# By default, make will run in silent mode
ifndef VERBOSE
.SILENT:
endif

infra:
	docker-compose up -d

test:
	NODE_ENV=test $(bin)mocha

run:
	node app.js


.PHONY: test
