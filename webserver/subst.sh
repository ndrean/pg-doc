#!/bin/sh

envsubst '$APP' < /etc/nginx/conf.d/default.temp > /etc/nginx/conf.d/default.conf

# exec replaces the current process with a different so nginx can receive PID 1 so stop when receives SIG 1
exec nginx -g 'daemon off;'