FROM ruby:3.0.1-alpine

# to use the gem "pg", we need some of these libraries
RUN apk update && apk add build-base postgresql-dev
RUN apk add --no-cache bash
RUN mkdir /app
WORKDIR /app

RUN gem install bundler:2.2.17
COPY Gemfile ./
RUN bundle check || bundle install
COPY . ./

EXPOSE 9292
