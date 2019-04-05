Rails.application.routes.draw do
  root 'products#index'

  namespace :api, defaults: { format: 'json' } do
    resources :products
  end
end
