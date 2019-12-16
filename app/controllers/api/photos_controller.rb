class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
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
            render :show
        else
            render json: ['Photo not found.'], status: 404
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :photo_file, 
                                      :location, :category, :author_id)
    end
end