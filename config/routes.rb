Rails.application.routes.draw do
  root 'products#index'

  resources :products, only: :show

  namespace :api, defaults: { format: 'json' } do
    resources :products, only: %i[index show] do
      resources :comments, only: %i[create update destroy]
    end
  end
end
