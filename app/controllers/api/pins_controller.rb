class Api::PinsController < ApplicationController
    
    def create
      board = Board.find(params[:board_id])
      pin = Pin.create!(pin_params)
      @boardpin = BoardPin.create!(
        pin_id: pin.id,
        board_id: board.id,
        description: params[:pin][:description],
        title: params[:pin][:title]
      )
      render 'api/pins/show'
    end

    private

    def pin_params
      params.require(:pin).permit(:img_url, :image, :height)
    end

    def baordpin_params
      params.require(:pin).permit(:description, :title)
    end
  
end
