json.user do
    json.partial! "api/users/user", user: @user
end

json.boards do
    @user.boards.each do |board| 
        json.set! board.id do
            json.partial! "api/boards/board", board: board
        end
    end
end

json.pins do 
    @user.pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :user_id, :height, :title
            json.imageUrl url_for(pin.image)
        end
    end
end