Rails.application.routes.draw do
  resources :hosts do
    member do 
      post :favourite
    end
  end
  resources :lodgings
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
