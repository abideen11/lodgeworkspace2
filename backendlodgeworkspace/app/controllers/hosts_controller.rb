class HostsController < ApplicationController
    skip_before_action :check_authentication

    def index
        @hosts = Host.all 
        render json: @hosts, only: [:id, :name, :age, :location, :rental, :max_days, :price, :rental_img1, :rental_img2, :fave]
    end
    def show
        @host = Host.find(params[:id])
        render json: @hosts, only: [:id, :name, :age, :location, :rental, :max_days, :price, :rental_img1, :rental_img2, :fave]
    end

    # Make a host a favourite
    # POST /hosts/:id/fave
    def favourite
        @host = Host.find(params[:id])
        @host.update!(fave: !@host.fave)
        render json: {result: :success}.as_json
    end
end
