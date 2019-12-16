class Follow < ApplicationRecord
    validates :user_id, uniqueness: { scope: :followee_id,
        message: "should only follow once" }

    belongs_to :follower,
        :foreign_key => "user_id",
        :class_name => "Api::User"

    belongs_to :followee,
       :foreign_key => "followee_id", 
       :class_name => "Api::User"

end