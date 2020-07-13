class Pin < ApplicationRecord
  validate :has_image
  # validates :title, :user_id, presence: true

  has_one_attached :image

  has_many :pins_on_boards, dependent: :destroy
  has_many :boards, through: :pins_on_boards, source: :board


  def has_image
    unless self.image.attached?
      errors[:image] << 'Attach an Image ^.^'
    end
  end
end
