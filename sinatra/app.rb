require 'sinatra'
require "sinatra/reloader"
require "sinatra/json"
require 'logger'
require 'sequel'
require "pg"

DB = Sequel.postgres(
  ENV['POSTGRES_DB'],
  user: ENV['POSTGRES_USER'],
  password: ENV['POSTGRES_PASSWORD'] || "cyberdyne",
  host: ENV['POSTGRES_HOST'] || "localhost",
  port: ENV['POSTGRES_PORT'] || '5432',
  logger: Logger.new('/dev/stdout')
)


# table = DB[:persons].freeze
# names = table.map(:firstname) <- for logger testing
data = DB[:requests].freeze

get '/' do
  data.insert(
    app: "Ruby",
    ip: request.ip,   
    host: Socket.gethostname, 
    req_at: Time.now.strftime("%a %d %B %Y %H:%M:%S")
  )

  # logger.info("#{names}")

  erb :index, 
    locals:{ 
      message: "Hello! You are connected to the PostgreSQL database: #{ENV['POSTGRES_DB'] }",
      requests: data.reverse(:req_at)

    }
end
