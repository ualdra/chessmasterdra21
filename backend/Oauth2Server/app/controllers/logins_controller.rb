class LoginsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        user = User.find_by_name(params[:name]) if params[:name].present? || params[:password].present?
        user&.refresh_token
        
        if user&.authenticate(params[:password]) && user.save
            render :json => {"token" => user.token}
        elsif
            render :json => nil
        end
    end
end
