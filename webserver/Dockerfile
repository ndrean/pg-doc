FROM nginx:1.19.10-alpine

RUN rm /var/log/nginx/access.log && \
   ln -sf /dev/stdout /var/log/nginx/access.log && \
   rm /var/log/nginx/error.log && \
   ln -sf /dev/stderr /var/log/nginx/error.log
# rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/
# COPY proxy.conf /etc/nginx/conf.d/default.conf

COPY ./images /usr/share/nginx/html

STOPSIGNAL SIGTERM


CMD ["nginx", "-g", "daemon off;"]