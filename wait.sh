#!/bin/sh

test() {
   sleep 3;
   until docker exec pg pg_isready -U postgres -h pg -d $1; do sleep 3; done
echo "Ready"
}
