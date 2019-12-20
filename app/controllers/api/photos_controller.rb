class Api::PhotosController < ApplicationController
    def index
        if params[:filters]
            limit = params[:filters][:limit]
            offset = params[:filters][:offset]
            @photos = Photo.all.limit(limit).offset(offset)
            @has_more = @photos.length == limit.to_i
            render :filtered_photos
        else
            @users = logged_in? ? 
                current_user.following.includes(:photos, :followeds) : []
            render :index
        end
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def show
        @photo = Photo.includes(:author).find_by_id(params[:id])
        if @photo
            @photo.views += 1
            @photo.save
            render :show
        else
            render json: ['Photo not found.'], status: 404
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :photo_file, 
                                      :location, :category, :author_id,
                                      :width, :height)
    end
end