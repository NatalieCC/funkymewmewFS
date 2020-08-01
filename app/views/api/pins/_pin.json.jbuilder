
json.extract! pin, :id, :user_id, :height, :title, :description
json.username pin.user.username

json.imageUrl url_for(pin.image)
if(pin.boards.length > 0)
    json.board pin.boards[0].title
end