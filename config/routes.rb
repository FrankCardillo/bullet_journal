Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  as :user do
    get '/' => 'pages#index'
  end
  namespace :api do
    namespace :v1 do
      resources :pages do
        resources :entries
      end
    end
  end
end
