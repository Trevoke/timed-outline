Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'outlines#index'
  resources :outlines, only: [:index, :create, :show] do
    resources :steps, only: [:create, :destroy]
  end
end
