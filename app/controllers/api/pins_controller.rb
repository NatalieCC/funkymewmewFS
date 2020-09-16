class Api::PinsController < ApplicationController
    
  def new
    @pin = Pin.new
    render :new
  end

  def create
    #debugger
    board = Board.find(params[:board_id])
    pin = Pin.create!(pin_params)
    @pinjoin = PinsOnBoard.create!(
      pin_id: pin.id,
      board_id: board.id,
      description: params[:pin][:description],
      #title: params[:pin][:title]
    )
    hash = {pin:pin,board:board}
    @pinsOnBoard = OpenStruct.new(hash);
    #debugger 
    render 'api/pins_on_boards/show' 
    #not rendering a route, this is a template jbuilder file it has to be in the json jbuilder 
  end

  def index
    #debugger
    if params[:keyword]
      @pins = Pin.search(params[:keyword])
    else
      @pins = Pin.all
    end
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
    #@pin.destroy
    #render 'api/pins/pin'
    if @pin
        @pin.destroy
        render "api/pins/show"
      else
        render json: ["Can't delete this board!"], status: 401
      end
  end

  # def search 
  #   search_query = pin_params.search_query
  #   query_words = search_query.split(" ").map(|word| word.downcase)
  #   @collection = []
  #   Pins.all.each do |pin|
  #       query_words.each do |word|
  #         if pin.title.include?(word)
  #         @collection << word
  #         end     
  #   end
  #   render "api/pins/search_results"
  # end

    private

    def pin_params
      params.require(:pin).permit(:title, :user_id, :image,:height,:description,:keyword)
      #,:search_query
    end
  
end
