# Test

`docker run -it ruby:3.0.1-alpine irb`

> no "class App < Sinatra::Base"

- `ruby app.rb`(port set by user)
- or `rackup config.ru` (default is port 9292, then "-p 4000" for example)
- or `bundle exec rackup` with gem "puma" installed

> connect ot a db

- install
  `ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')`
