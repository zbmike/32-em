json.photos do
    @photos.with_attached_photo_file.each do |photo|
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end

follower_records = @user.followeds
following_records = @user.follows

json.users do
    current_id = current_user.id
    follow = @user.followeds.find_by_user_id(current_id)
    following = false
    follow_id = nil
    if follow
        following = true
        follow_id = follow.id
    end
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
        json.following following
        json.followId follow_id
        json.followerCount follower_records.length
        json.followingCount following_records.length
    end

    @user.followed_by.each do

    end
end