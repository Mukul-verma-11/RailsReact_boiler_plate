Rails.application.routes.draw do
  root 'home#index'

  post "create", to: "todo#create"

  get "todos" , to: "todo#todos_data"
  get "workers", to: "worker#index"

  delete "todos/delete/:id" , to: "todo#destroy"

  put "todos/update/:id", to: "todo#update"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
