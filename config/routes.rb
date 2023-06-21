Rails.application.routes.draw do
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :user, only: [:index,:create, :delete]

  # resources :students

  get "user", to: "user#index"
  # get "user/create", to: "user#create"
  post "user/create" , to: "user#create"
  post "user/delete/:id" , to: "user#delete"

end
