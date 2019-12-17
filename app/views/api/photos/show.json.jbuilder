author = @photo.author
follow = nil
if logged_in? 
    follow = author.followeds.find_by_user_id(current_user.id)
end

json.photos do
    json.set! @photo.id do
        json.partial! 'api/photos/photo', photo: @photo
    end
end

follow_id = nil
following = false
if follow
    follow_id = follow.id
    following = true
end

json.users do
    json.set! author.id do
        json.partial! 'api/users/user', user: author
        json.following following
        json.followId follow_id
    end
end

