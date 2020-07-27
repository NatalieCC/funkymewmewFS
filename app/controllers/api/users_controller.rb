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

  # inside includes is the assoication in user model we defined
  def show
      @user = User.includes(:boards, :pins).find_by!(username: params[:id])
      render 'api/users/show'
  end

  # def show
  #   @user = selected_user
  #   render "api/users/show"
  # end

  # def show
  #   render "api/users/show"
  # end

  def update
      @user = current_user
      #debugger
      @user.update!(user_params)
      render 'api/users/show'
  end

  def destroy
      @user = current_user
      @user.destroy!
  end

  private

  def user_params
    params.require(:user).permit(
      :username, 
      :password,
      :photo,
      :email,
      :first_name,
      :last_name,
      :location
      )
  end

  
end
