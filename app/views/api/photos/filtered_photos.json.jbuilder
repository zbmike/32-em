json.photos do
    @photos.with_attached_photo_file.each do |photo|
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end

json.ui do
    json.hasMore @has_more
end