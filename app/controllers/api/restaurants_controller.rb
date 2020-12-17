class Api::RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :update, :destroy]

  def index
    render json: Restaurant.all
  end

  def show
    render json: @restaurant
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant.save
      render json: restaurant
    else
      render json: restaurant.errors, status: 422
    end
  end

  def update
    if @restaurant.update(restaurant_params)
      render json: @restaurant
    else
      render json: @restaurant.errors, status: 422
    end
  end

  def destroy
    @restuarant.destroy
    render json: @restaurant
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name)
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end