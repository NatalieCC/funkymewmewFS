# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Pin.destroy_all

user1 = User.create!([{ username: 'poppy' }, { email: 'poppy@aa.com' },{ password: '123321' }])

pin1 = Pin.create!({ user_id: 1, height: "", title: 'flowers'})
# p1 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/R9STgtz1WUB3sUsajoVosVoj')
# pin1.image.attach(io: p1, filename: 'p1')
# pin1.save!