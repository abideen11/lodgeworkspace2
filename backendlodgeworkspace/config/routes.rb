Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :hosts do
    member do 
      post :favourite
    end
  end
  resources :lodgings
  post '/login', to: "log_in#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
