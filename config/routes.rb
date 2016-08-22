Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  as :user do
    get '/' => 'pages#index'
  end
  resources :pages do
    resources :entries
  end
end
