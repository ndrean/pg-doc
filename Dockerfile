FROM postgres:13.2-alpine
# ENV POSTGRES_PASSWORD=psql 
# ENV POSTGRES_HOST=localhost
# ENV POSTGRES_DB=testdb

COPY ./initializers/init.sql /docker-entrypoint-initdb.d/
# COPY setup.sh .
# ENTRYPOINT ["./setup.sh"]