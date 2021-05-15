#!/bin/sh
echo "Waiting PostgreSQL to start on 5432..."
until pg_isready -h $(hostname -i); do
  sleep 0.1
done
# while ! pg_isready; do 
#    sleep 0.1
# done
echo "PostgreSQL started"