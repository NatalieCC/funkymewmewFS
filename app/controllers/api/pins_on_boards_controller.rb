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

    # def index
    #   #debugger
    #   @pinboardjoin = PinsOnBoard.find_by(:pin_id => params[:pin_id])
    #   render :json => @pinboardjoin
    # end
  
    # Method:POST Endpoint: api/pins_on_boards
    def create
      @pinsOnBoard = PinsOnBoard.new(pinsOnBoard_params)
      if @pinsOnBoard.save!
        render 'api/pins_on_boards/show'
      else
        render json: @boardPin.errors.full_messages, status: 422
      end
    end

  # def destroy
  #   #find only accepts id, if search by other coloums we use find_by
  #   @pinjoin = PinsOnBoard.find_by(pin_id: params[:pin_id],board_id: params[:board_id])
  #   @pinjoin.destroy
  #   @board = Board.find(params[:board_id])
  #   render 'api/boards/show'
  # end

  def destroy
    
    @pinsOnBoard = PinsOnBoard.find_by(pinsOnBoard_params)
    
    @pinsOnBoard.destroy
    #@board = Board.find(params[:board_id])
    render 'api/pins_on_boards/show'
  end

  
   private
  def pinsOnBoard_params
    #:pinsOnBoard refers to api Form Data in Chrome's Headers in Network
    params.require(:pinsOnBoard).permit(:board_id, :pin_id)
  end
  
end
