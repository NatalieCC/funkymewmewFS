class PinsOnBoard < ApplicationRecord
  validates :pin_id, :board_id, presence: true
  validates :pin_id, uniqueness: { scope: :board_id }

  belongs_to :pin
  belongs_to :board
  #has_one :creator, through: :board, source: :creator
end
