FROM ruby:3.0.1-alpine

# to use the gem "pg", we need some of these libraries
RUN apk update && apk add build-base postgresql-dev

RUN mkdir /app
WORKDIR /app

RUN gem install bundler:2.2.17
COPY Gemfile* ./
RUN bundle install && mkdir -p tmps/pids
COPY . ./

EXPOSE 9292
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0"]
