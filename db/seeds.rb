# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

restaurants =[ "La Du Du", "Frying Nemo", "Biscuit Bitch", "Dirty Dick's Crab House"]


4.times do
  r = Restaurant.create(
    name: restaurants.sample,
  )
  5.times do
    r.items.create(
      name: Faker::Food.dish,
      description: Faker::Food.description, 
    )
  end
end

puts "seeded 4 restaurants - 5 items each"

