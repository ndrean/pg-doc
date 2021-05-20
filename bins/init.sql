-- CREATE ROLE toto;
-- ALTER ROLE toto WITH SUPERUSER;

-- CREATE TABLE IF NOT EXISTS public.persons ( 
--    id serial PRIMARY KEY,
--    firstName varchar,
--    lastName varchar
--    );
-- CREATE ROLE $POSTGRES_USER LOGIN password $POSTGRES_PASSWORD;
-- CREATE DATABASE IF NOT EXISTS $POSTGRES_DB ENCODING 'UTF8' OWNER $POSTGRES_USER;
-- GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER; 

CREATE TABLE IF NOT EXISTS public.requests (
    id serial PRIMARY KEY,
    app varchar,
    url varchar,
    ip varchar,
    host varchar,
    req_at VARCHAR,
    d BIGINT
);
