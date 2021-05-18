#!/usr/bin/env sh

set -ex

echo "Waiting PostgreSQL:$POSTGRES_HOST to start on 5432..."


until pg_isready -h $POSTGRES_HOST -p 5432; do
  sleep 1
done

echo "PostgreSQL started"

exec "$@"
# exec bundle exec rackup --host 0.0.0.0