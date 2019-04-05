Rails.application.routes.draw do
  root 'products#index'

  resources :products

  namespace :api, defaults: { format: 'json' } do
    resources :products
  end
end
