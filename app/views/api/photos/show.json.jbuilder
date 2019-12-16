json.photos do
    json.set! @photo.id do
        json.partial! 'api/photos/photo', photo: @photo
    end
end

author = @photo.author
json.users do
    json.set! author.id do
        json.partial! 'api/users/user', user: author
    end
end