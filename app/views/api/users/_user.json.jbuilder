json.extract! user, :id, :username, :email, :description
json.photo url_for(user.photo) if user.photo.attached?