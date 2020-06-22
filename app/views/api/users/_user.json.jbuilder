json.extract! user, :id, :username, :email
json.photo url_for(user.photo) if user.photo.attached?