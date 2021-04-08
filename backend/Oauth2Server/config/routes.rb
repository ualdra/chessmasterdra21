Rails.application.routes.draw do
  match 'logins', to: 'logins#create', via: [:post]
  match 'singings', to: 'singings#create', via: [:post]
  match 'users', to: 'users#destroy', via: [:delete]
  match 'users', to: 'users#index', via: [:get]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
