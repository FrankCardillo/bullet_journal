Rails.application.routes.draw do
  

  devise_for :users
  resources :pages do
    resources :entries
  end
end
