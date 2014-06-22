Rails.application.routes.draw do
  root 'outlines#index'
  resources :outlines, only: [:index, :create, :show] do
    resources :steps, only: [:create, :destroy]
  end
end
