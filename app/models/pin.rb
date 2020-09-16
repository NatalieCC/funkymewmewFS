class Pin < ApplicationRecord
  validate :has_image
  # validates :title, :user_id, presence: true

  has_one_attached :image

  has_many :pins_on_boards, dependent: :destroy
  has_many :boards, through: :pins_on_boards, source: :board
  belongs_to :user

  #sanitize my input
  def self.search(param)
    
    str = "%#{param}%".downcase
    #debugger
    @pins = Pin.where(
            "LOWER(TITLE) LIKE LOWER(:query) OR 
            LOWER(DESCRIPTION) LIKE LOWER(:query)", query:str)
    
  end

  def has_image
    unless self.image.attached?
      errors[:image] << 'Attach an Image ^.^'
    end
  end
end

#"LOWER(TITLE) LIKE LOWER(?) OR 
#LOWER(DESCRIPTION) LIKE LOWER(?)", str, str
#like_keyword = "%#{params[:keyword]}%".downcase
#@pins = Pin.where("LOWER(TITLE) LIKE ? OR LOWER(DESCRIPTION) LIKE ?", like_keyword, like_keyword)