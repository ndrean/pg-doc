#!/bin/sh

node ./bin/migrate.js

exec "$@"