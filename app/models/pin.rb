class Pin < ApplicationRecord
  validate :has_image

  has_one_attached :image

  has_many :board_pins
  has_many :boards, through: :board_pins, source: :board

  def has_image
    unless self.image.attached?
      errors[:image] << 'Attach an Image ^.^'
    end
  end
end
