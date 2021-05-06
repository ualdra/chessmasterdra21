class UsersController < ApplicationController

    def index
        user = User.find_by_name(params[:name]) if params[:name].present?
               
        if user.present?
            render :json => user
        elsif
            render :json => nil
        end
    end

    def create
        user = User.new(name:params[:name], password: params[:password], password_confirmation: params[:password])

        if user.save
            user = User.find_by_name(params[:name])
            render :json => {"token" => user.token}
        elsif
            render :json => nil
        end
    end

end
