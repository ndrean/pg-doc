require 'sinatra'
require "sinatra/reloader"
require "sinatra/json"
require 'logger'
require 'sequel'
require "pg"

DB = Sequel.postgres(
  ENV['POSTGRES_DB'],
  user: ENV['POSTGRES_USER'],
  password: ENV['POSTGRES_PASSWORD'],
  host: ENV['POSTGRES_HOST'],
  port: 5432,
  logger: Logger.new('/dev/stdout')
)


table = DB[:persons].freeze
data = table.all.to_json
names = table.map(:firstname)

get '/' do
  logger.info("#{names}")
  erb :index, 
    locals:{ 
      message: "Hello! You are connected to the PostgreSQL database: #{ENV['POSTGRES_DB'] }",
      host: Socket.gethostname,
      ip: request.ip,   
      path: request.path_info,
      requested_at: Time.now.strftime("%H:%M:%S:%L"),
      data: data,
      names: names

    }
end
