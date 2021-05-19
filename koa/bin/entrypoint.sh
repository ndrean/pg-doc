#!/bin/sh

# to get the immediate exit code on failure
set -e

if [ $NEW_DB = true]; then
   node ./bin/migrate.js
fi


exec "$@"
