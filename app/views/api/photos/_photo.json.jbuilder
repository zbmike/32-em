json.extract! photo, :id, :title, :description, :location, :category
json.authorId photo.author_id
json.photoFileUrl url_for(photo.photo_file)
json.timeAgo time_ago_in_words(photo.created_at) + " ago"