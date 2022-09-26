class AppsController < ApplicationController
    
def index
    app = App.all
    render json: app
end
end
