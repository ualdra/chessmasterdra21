Rails.application.routes.draw do
  match 'login', to: 'sessions#login', via: [:post]
  match 'session', to: 'sessions#session', via: [:post]
  match 'users', to: 'users#create', via: [:post]
  match 'users', to: 'users#index', via: [:get]
end