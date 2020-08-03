Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show] # api/session/
    resources :users # api/users/
    resources :boards do
      resources :pins, only: [:create]  
    end
    resources :pins, only: [:create,:destroy, :index, :show, :update]
    resources :pins_on_boards, only: [:destroy, :create,:index,:show]
    # get 'pins_on_boards' => 'pins_on_boards#getBoardIdFromPinId', :as => :getBoardIdFromPinId
    resource :pins_on_boards, :members => {:getBoardIdFromPinId => :get}
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end

#table name needs to = controller name and after resources it  is the talble name,table name is plural of model!
