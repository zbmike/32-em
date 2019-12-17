class Api::User < ApplicationRecord
    validates :password, length: {minimum: 6, null: true}
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
  
    attr_reader :password
  
    before_validation :ensure_token

    has_many :photos,
       :foreign_key => "author_id", 
       :class_name => "Photo"

    has_many :followeds,
        :foreign_key => "followee_id",
        :class_name => "Follow"

    has_many :followed_by,
        :through => "followeds",
        :source => "follower"

    has_many :follows,
        :foreign_key => "user_id",
        :class_name => "Follow"

    has_many :following,
        :through => "follows",
        :source => "followee"
  
    def self.find_by_credentials(username, password)
      user = Api::User.find_by(username: username)
      user && user.is_password?(password) ? user : nil
    end
  
    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save
      self.session_token
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def ensure_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end
  end
  