class Api::PinsController < ApplicationController
    
  def new
    @pin = Pin.new
    render :new
  end

  def create
    
    board = Board.find(params[:board_id])
    pin = Pin.create!(pin_params)
    @pinjoin = PinJoin.create!(
      pin_id: pin.id,
      board_id: board.id,
      description: params[:pin][:description],
      title: params[:pin][:title]
    )
    render 'api/pins/pin'
    
  end

  def index
    @pins = Pin.all
    render :index
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def edit
    @pin = Pin.find(params[:id])
    if @pin.user_id == current_user.id
      render :edit
    else
      render 'api/pins/pin'
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if (@pin.user_id === current_user.id && @pin.update(pin_params))
      render 'api/pins/pin'
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render 'api/pins/pin'
  end

    private

    def pin_params
      params.require(:pin).permit(:title, :user_id, :image,:height)
    end
  
end
