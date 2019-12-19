if @photos.empty?
    json.photos({})
else
    json.photos do
        @photos.with_attached_photo_file.each do |photo|
            json.set! photo.id do
                json.partial! 'api/photos/photo', photo: photo
            end
        end
    end
end

json.users do
    @users.each do |user|
        current_id = current_user.id
        follow = user.followeds.find_by_user_id(current_id)
        json.set! user.id do
            json.partial! 'api/users/user', user: user
            json.following true
            json.followId follow.id
        end
    end
end
