class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def index
    @users = User.all
    render "api/users/index"
  end

  # def show
  #   render "api/users/show"
  # end
  
  # def edit
    
  # end

  # def update
    
  # end


  private

  def user_params
    params.require(:user).permit(:username, :password,:email)
  end

  
end
