class Api::BoardsController < ApplicationController
  
    def index
      @boards = Board.all.includes(:user, :pins_on_boards, :pins)
      render 'api/boards/index'
    end

    def show
      print "BoardsController show"
      @board = Board.includes(:user, :pins_on_boards, :pins).find(params[:id])
      # debugger
      render 'api/boards/show'
    end

    def update
      @board = current_user.boards.find(params[:id])
      @board.update!(board_params)
      render 'api/boards/show'
    end

    def create
      print "BoardsController create"
      @board = Board.new(board_params)
      @board.user_id = current_user.id
      @board.save!
      render 'api/boards/show'
    end

    # def destroy
    #   @board = current_user.boards.find(params[:id])
    #   @board.destroy
    #   render 'api/boards/show'
    # end

    private

    def board_params
      params.require(:board).permit(:title, :description, :is_public)
    end

end
