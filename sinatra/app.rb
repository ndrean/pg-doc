require 'sinatra'
require "sinatra/reloader"
require "sinatra/json"
require 'logger'
require 'sequel'
require "pg"

p "Running on port 9292"

DB = Sequel.connect(
  adapter: 'postgres',
  database: ENV['POSTGRES_DB'],
  user: ENV['POSTGRES_USER'],
  password: ENV['POSTGRES_PASSWORD'] || "cyberdyne",
  host: ENV['POSTGRES_HOST'] || "localhost",
  port: ENV['POSTGRES_PORT'] || '5000',
  logger: Logger.new('/dev/stdout')
)

data = DB[:requests].freeze

get '/ruby/api' do
    data.insert(
      app: "Ruby",
      url: request.url,
      ip: request.ip,   
      host: Socket.gethostname, 
      req_at: Time.now.strftime("%a %d %B %Y %H:%M:%S"),
      d: (Time.now.to_f*1000).to_i
    )
    json({status:"success", json: data.order(:id).last})
    # since we didn't use a model, the "last method needs the db to be ordered first"
end

get "/" do
  redirect "/ruby"
end

get '/ruby' do
#### FIRST TESTING ####
# table = DB[:persons].freeze
# names = table.map(:firstname) <- for logger testing
# logger.info("#{names}")

  data.insert(
    app: "Ruby",
    url: request.url,
    ip: request.ip,   
    host: Socket.gethostname, 
    req_at: Time.now.strftime("%a %d %B %Y %H:%M:%S"),
    d: (Time.now.to_f*1000).to_i
  )

  erb :index, 
    locals:{ 
      message: "Hello! You are connected to the PostgreSQL database: #{ENV['POSTGRES_DB'] }",
      requests: data.reverse(:d),
      data: data.group_and_count(:host, :app)

    }

end
