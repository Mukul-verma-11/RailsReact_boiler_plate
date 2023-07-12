Rails.application.routes.draw do
  root 'home#index'

  post "create", to: "task#create"

  get "tasks" , to: "task#tasks_data"
  get "workers", to: "worker#index"

  delete "tasks/delete/:id" , to: "task#destroy"

  put "tasks/update/:id", to: "task#update"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
