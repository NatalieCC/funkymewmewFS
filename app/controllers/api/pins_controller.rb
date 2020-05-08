class Api::PinsController < ApplicationController
    
  def new
    @pin = Pin.new
    render :new
  end


  def index
    @pins = Pin.all
    render :index
  end

  def show
    # @pin = Pin.find(params[:id])
    # render :show
  end

    private

    def pin_params
      params.require(:pin).permit(:title, :user_id, :image,:height)
    end
  
end
