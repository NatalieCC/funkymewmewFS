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

  def update
    @pin = current_user.pins.find(params[:id])

    if @pin.update(pin_params)
      render "api/pins/show"
    else
      render json: ["Can't edit this pin!"], status: 401
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
