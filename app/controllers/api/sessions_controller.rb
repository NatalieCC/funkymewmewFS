# Verb Path	            action(functions)	  used for
#
# GET	/photos	          index	              display a list of all photos
# GET	/photos/new	      new	                return an HTML form for creating a new photo
# GET	/photos/:id	      show	              display a specific photo
# GET	/photos/:id/edit	edit	              return an HTML form for editing a photo
# 
# POST /photos	        create	            create a new photo
#
# PUT	 /photos/:id	    update	            update a specific photo
# PATCH	/photos/:id	    update	            update a specific photo
#
# DELETE /photos/:id	  destroy	            delete a specific photo
#
#
#
#

class Api::SessionsController < ApplicationController

  #POST call
  def create
    # debugger
    @user = User.find_by_credentials( params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
#       json.user do
#          json.partial! "api/users/user", user: @user
#       end
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  #DELETE call
  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  # def login
  
  # end

end