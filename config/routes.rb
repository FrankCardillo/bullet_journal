Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  as :user do
    get '/' => 'api/v1/entries#index'
  end
  namespace :api do
    namespace :v1 do
      resources :entries, only: [:index, :create, :update, :destroy]
    end
  end
end
