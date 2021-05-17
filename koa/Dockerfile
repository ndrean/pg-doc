FROM node:14-alpine3.12
WORKDIR /node
COPY package*.json ./
RUN npm install 
# ci --only=production

WORKDIR /node/koa
COPY . .
# the .dockerignore contains "node_modules" so we exclude them from the copy since we already build it.
EXPOSE 3000

ENTRYPOINT ["./bin/entrypoint.sh" ]
