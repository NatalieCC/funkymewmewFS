
json.board do
  json.partial! 'api/boards/board', board: @board
end

json.pins do
  @board.pins_on_boards.each do |pin_on_board|
    json.set! pin_on_board.pin.id do
      json.partial! 'api/pins/pin', pin: pin_on_board.pin
    end
  end
end

