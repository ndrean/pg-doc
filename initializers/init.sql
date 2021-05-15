CREATE ROLE toto;
ALTER ROLE toto WITH SUPERUSER;

CREATE TABLE IF NOT EXISTS public.persons ( 
   id int PRIMARY KEY,
   firstName varchar,
   lastName varchar
   );

CREATE TABLE IF NOT EXISTS public.requests (
    id serial PRIMARY KEY,
    ip varchar,
    host varchar,
    req_at VARCHAR
);

INSERT INTO public.persons 
    (id, firstname, lastname)
VALUES
    (1, 'Luke', 'Skywalker'),
    (2, 'Leia', 'Organa'),
    (3, 'Han', 'Solo');