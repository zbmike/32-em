class Api::SessionsController < ApplicationController
    def create
        @user = Api::User.find_by_credentials(params[:user][:username],params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid username/password combo.'], status: 401
        end
    end

    def destroy
        if logout!
            render json: {}
        else
            render json: ['Already logged out.'], status: 404
        end
    end
end