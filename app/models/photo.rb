class Photo < ApplicationRecord
    validates :title, presence: true
    validates :category, presence: true
    validates :author_id, presence: true

    belongs_to :author,
        :foreign_key => "author_id", 
        :class_name => "Api::User"

    has_many :likes,
        :foreign_key => "photo_id", 
        :class_name => "Like"

    has_many :liked_by,
        :through => "likes",
        :source => "user"

    has_one_attached :photo_file

end