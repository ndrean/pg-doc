CREATE TABLE IF NOT EXISTS public.persons ( 
   id int PRIMARY KEY,
   firstName varchar,
   lastName varchar
   );

INSERT INTO public.persons 
    (id, firstname, lastname)
VALUES
    (1, 'Luke', 'Skywalker'),
    (2, 'Leia', 'Organa'),
    (3, 'Han', 'Solo');