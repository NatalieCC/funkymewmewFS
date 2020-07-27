json.extract! user, :id, :username, :email, :description, :first_name, :last_name, :location
json.photo url_for(user.photo) if user.photo.attached?