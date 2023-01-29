Rails.application.routes.draw do
  get 'greetings/index'
  root "greetings#index"
    namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
end
