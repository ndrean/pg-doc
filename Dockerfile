FROM postgres:13.2-alpine

COPY ./initializers/init.sql /docker-entrypoint-initdb.d/init.sql