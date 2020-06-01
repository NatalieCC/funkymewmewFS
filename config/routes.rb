Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show] # api/session/
    resources :users # api/users/
    resources :boards do
      resources :pins, only: [:create]
      resources :board_pins, only: [:create]
    end
    resources :pins, only: [:destroy, :index, :show, :update]
    resources :board_pins, only: [:destroy, :index, :show, :update]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
