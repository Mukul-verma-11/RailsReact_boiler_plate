class UserController < ApplicationController

    def index 
        @user = User.all 
        # puts user
        render json: @user, status: :ok
    end

    def create 
        User.create(Username: params[:username], Password: params[:password])
        render html: "create"
    end

    def delete 
        p "8888888888888888888888*****************" 
        p params[:id]
        user = User.find_by(id: params[:id])
        user.destroy 
        user.save
        p "8888888888888888888888*****************" 
        render html: 'delete'
    end

end