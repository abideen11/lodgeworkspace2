class LodgingsController < ApplicationController

    def index
        @lodgings = Lodging.all 
        render json: @lodgings, only: [:id, :host_id, :user_id, :booking]
    end
end
