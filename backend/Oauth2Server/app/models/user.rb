class User < ActiveRecord::Base
    before_save :refresh_token
    validates :name, presence: true
    
    has_secure_password


    def refresh_token
        token = ""
        
        loop do
            token = SecureRandom.hex(32)
            break unless User.find_by_token(token).present?
         end

         self.token = token
    end

end
