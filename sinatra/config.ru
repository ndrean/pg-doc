require 'rubygems'
# Rack will run this file to launch dependencies
# and run the app with: "rackup"

require 'bundler'
require 'dotenv'
Dotenv.load('../.env') # <- early loading of ENV VARS
Bundler.require # <- require everything in the Gemfile

require './app'

run Sinatra::Application
