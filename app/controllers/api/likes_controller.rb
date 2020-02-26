class Api::LikesController < ApplicationController

    def create
        @follow = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.destroy(params[:id])
        render :show
    end

    def index
        @photo = []
        if logged_in?
            @photo = Api::User.find_by_id(current_user.id).liked_photos
            render :index
        else
            render json: ['Must be logged in'], status: 404
        end
    end

    private

    def like_params
        params.require(:follow).permit(:user_id, :followee_id)
    end
end