#!/bin/sh

# to get the immediate exit code on failure
set -e

node ./bin/migrate.js

exec "$@"
