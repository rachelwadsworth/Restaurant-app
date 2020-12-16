# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
require "faker"
restaurants = ["La du du", "Frying Nemo", "Biscuit Bitch"]

3.times do
  r = Restaurant.create(
    name: restaurant.sample,
  )
  5.times do
    r.items.create(
      name: Faker::Food.dish,
      description: Faker::Food.description, 
    )
  end
end

puts "seeded with 3 restaurants - 5 items each"