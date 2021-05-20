#!usr/bin/sh

set -e 

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
   CREATE ROLE $POSTGRES_USER LOGIN password $POSTGRES_PASSWORD;
   CREATE DATABASE  $POSTGRES_DB ENCODING 'UTF8' OWNER $POSTGRES_USER;
   GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;

   BEGIN;
      CREATE TABLE IF NOT EXISTS public.requests (
         id serial PRIMARY KEY,
         app varchar,
         url varchar,
         ip varchar,
         host varchar,
         req_at VARCHAR,
         d BIGINT
      );
   COMMIT;
EOSQL;