class Board < ApplicationRecord
  validates :user_id, :title, presence: true
  belongs_to :user, foreign_key: :user_id, class_name: :User
  has_many :pins_on_boards, dependent: :destroy
  has_many :pins, through: :pins_on_boards, source: :pin

  # has_many :follows, as: :followed, dependent: :destroy
  # has_many :followers, through: :follows

  def cover_urls
    # debugger
    urls = []
    pins = self.pins
    if pins.length >= 3
      pins[0..2].each do |pin|
        urls << Rails.application.routes.url_helpers.rails_blob_path(pin.image, only_path: true)
      end
    else
      pins.each do |pin|
        urls << Rails.application.routes.url_helpers.rails_blob_path(pin.image, only_path: true)
      end
    end
    urls
  end
end
