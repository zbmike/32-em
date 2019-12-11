json.extract! photo, :id, :title, :description, :location, :category, :author_id
json.photoFileUrl url_for(photo.photo_file)