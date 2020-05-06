json.array! @pins do |pin|
    json.extract! pin, :user_id, :title
    json.imageUrl url_for(pin.image)
end