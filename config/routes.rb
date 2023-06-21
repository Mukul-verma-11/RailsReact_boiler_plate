Rails.application.routes.draw do
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :user, only: [:index,:create]

  get "user", to: "user#index"
  # get "user/create", to: "user#create"
  post "user/create" , to: "user#create"

end
