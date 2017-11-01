Rails.application.routes.draw do
  root 'static_pages#index'

  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout


  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :feedbacks, only: [:create]
      resources :songs, only: [:index, :show, :create] do
        resources :feedbacks, only: [:create]
      end

      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end

    end
  end

  get '/songs/:id', to: 'static_pages#index'

  resources :songs do
    resources :feedbacks, except: [:index, :show]
  end

  resources :users, only: [:show]

end
