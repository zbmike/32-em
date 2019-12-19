class Api::UsersController < ApplicationController
    def create
      @user = Api::User.new(user_params)
      if @user.save
        login!(@user)
        render :login
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = Api::User.includes(:followeds, :follows, :photos)
          .find_by_id(params[:id])
      @photos = @user.photos
      render :show
    end

    private
  
    def user_params
      params.require(:user).permit(:username, :password)
    end
end