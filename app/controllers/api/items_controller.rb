class Api::ItemsController < ApplicationController
  before_action :set_Restaurant
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: @restaurant.items
  end

  def show
    render json: @restaurant
  end

  def create
    item = @restaurant.items.new(item_params)
    if (item.save)
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  def update
    if (@item.update(item_params))
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    @item.destroy
    render json: @item
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

  def set_item
    @item = @restaurant.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description)
  end
end