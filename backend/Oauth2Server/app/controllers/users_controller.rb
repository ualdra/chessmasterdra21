class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        user = User.find_by_name(params[:name]) if params[:name].present?
               
        if user.present?
            render :json => user
        elsif
            render :json => nil
        end
    end

    def destroy
        user = User.find_by_name(params[:name]) if params[:name].present?
               
        if user.present?
            user.destroy
            render :json => {"response" => "successfully"}
        elsif
            render :json => nil
        end
    end

end
