class SessionsController < ApplicationController

    def login
        debugger
        user = User.find_by_name(params[:name]) if params[:name].present? || params[:password].present?
        user&.refresh_token
        
        if user&.authenticate(params[:password]) && user.save
            render :json => {"token" => user.token}
        elsif
            render :json => nil
        end
    end

    def session
        user = User.find_by_token(params[:token]) if params[:token].present?
        
        if user.present?
            render :json => {"token" => user.token}
        elsif
            render :json => nil
        end
    end

end
