Rails.application.routes.draw do
  root 'static_pages#index'

  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout


  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :destroy]
      resources :feedbacks, only: [:create]
      resources :favorites, only: [:index, :create]
      resources :songs, only: [:index, :show, :create, :edit, :destroy] do
        resources :feedbacks, only: [:create]
      end
      resources :upvotes, only: [:create]


      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end

    end
  end


  resources :users, only: [:show]

  get '*path', to: 'static_pages#index'
end
