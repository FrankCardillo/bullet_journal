Rails.application.routes.draw do
  resources :users, except: :index do
    resources :pages
  end

  resources :pages do
    resources :entries
  end
end
