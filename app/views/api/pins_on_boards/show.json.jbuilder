json.pin do
  json.partial! 'api/pins/pin', pin: @pinsOnBoard.pin
end

json.board do
  json.partial! 'api/boards/board', board: @pinsOnBoard.board
end