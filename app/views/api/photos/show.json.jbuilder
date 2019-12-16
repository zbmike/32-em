author = @photo.author
if logged_in? 
    follow = author.followeds.find_by_user_id(current_user.id)
end

json.photos do
    json.set! @photo.id do
        json.partial! 'api/photos/photo', photo: @photo
    end
end

followed_by = []
if follow
    followed_by.push(follow.user_id)
end

json.users do
    json.set! author.id do
        json.partial! 'api/users/user', user: author
        json.followedBy followed_by   
    end
end

if follow 
    json.follows do
        json.set! follow.id do
            json.partial! 'api/follows/follow', follow: follow
        end
    end
else
    json.follows ({})
end