class SingingsController < ApplicationController
    skip_before_action :verify_authenticity_token

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
