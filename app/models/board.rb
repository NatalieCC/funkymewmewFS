class Board < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user, foreign_key: :user_id, class_name: :User
  has_many :board_pins, dependent: :destroy
  has_many :pins, through: :board_pins, source: :pin

  # will be a function here
end
