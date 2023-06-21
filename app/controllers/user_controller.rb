class UserController < ApplicationController

    def index 
        @user = User.all 
        # puts user
        render json: @user, status: :ok
    end

    def create 
        # byebug
        puts "************************************"
        puts params[:username] 
        puts params[:password] 
        User.create(Username: params[:username], Password: params[:password])
        # puts params.require(:user).permit(:username, :password)
        puts "************************************"

        render html: "create"
    end

end