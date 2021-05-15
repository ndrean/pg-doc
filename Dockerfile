

FROM postgres:13.2-alpine

# ARG DOCKER
# ENV POSTGRES_HOST=${DOCKER:-localhost}

# RUN if [ "$DOCKER" = "db" ]; then \
#    export POSTGRES_HOST=db; \
#    fi

COPY ./initializers/init.sql /docker-entrypoint-initdb.d/init.sql
# COPY setup.sh .
# ENTRYPOINT ["./setup.sh"]