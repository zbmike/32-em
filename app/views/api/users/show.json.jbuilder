json.photos do
    @photos.each do |photo|
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end

json.users do
    current_id = current_user.id
    follow = @user.followeds.find_by_user_id(current_id)
    following = false
    follow_id = nil
    if follow
        following = true
        followId = follow.id
    end
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
        json.following following
        json.followId follow_id
    end
end