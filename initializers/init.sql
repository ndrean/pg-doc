CREATE ROLE toto;
ALTER ROLE toto WITH SUPERUSER;

CREATE TABLE IF NOT EXISTS public.persons ( 
   id serial PRIMARY KEY,
   firstName varchar,
   lastName varchar
   );

CREATE TABLE IF NOT EXISTS public.requests (
    id serial PRIMARY KEY,
    app varchar,
    url varchar,
    ip varchar,
    host varchar,
    req_at VARCHAR,
    d BIGINT
);

INSERT INTO public.persons 
    (firstname, lastname)
VALUES
    ('Luke', 'Skywalker'),
    ( 'Leia', 'Organa'),
    ( 'Han', 'Solo');