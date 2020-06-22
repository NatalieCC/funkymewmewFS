class Api::PinsOnBoardsController < ApplicationController
    
    def show
      #debugger 
        @pins = []
        @pinboardjoins = PinsOnBoard.find(params[:id])
        @pinboardjoins.map do |pinboardjoin| 
            pin = Pin.find(pinboardjoin.pin_id)
            pins << pin
        end
        #debugger 
        render 'api/pins/index'
    end

  def create  
    #@refers to jbuilder
    @board = Board.find(params[:board_id])
    pin = Pin.find(params[:pin_id])
    #pinson board refer to its model
    @pinjoin = PinsOnBoard.create!(
      pin_id: pin.id,
      board_id: board.id,
    )
    render 'api/boards/show'
    
  end

  def destroy
    #find only accepts id, if search by other coloums we use find_by
    @pinjoin = PinsOnBoard.find_by(pin_id: params[:pin_id],board_id: params[:board_id])
    @pinjoin.destroy
    @board = Board.find(params[:board_id])
    render 'api/boards/show'
  end

   
  
end
