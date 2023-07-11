class WorkerController < ApplicationController 
    def index 
        data = Worker.all
        render json: data
    end
end