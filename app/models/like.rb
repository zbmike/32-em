class Like < ApplicationRecord
    validates :user_id, uniqueness: { scope: :photo_id,
        message: "should only like once" }

    belongs_to :user,
        :foreign_key => "user_id",
        :class_name => "Api::User"

    belongs_to :photo,
       :foreign_key => "photo_id", 
       :class_name => "Photo"

end