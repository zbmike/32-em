class Photo < ApplicationRecord
    validates :title, presence: true
    validates :category, presence: true
    validates :author_id, presence: true

    belongs_to :author,
       :foreign_key => "author_id", 
       :class_name => "Api::User"

    has_one_attached :photo_file

end