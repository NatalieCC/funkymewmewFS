json.array! @pins do |pin|
    json.extract! pin, :id, :user_id, :title, :height
    json.imageUrl url_for(pin.image)
end
