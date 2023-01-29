Rails.application.routes.draw do
  get 'greetings/index'
  root "greetings#index"
end
