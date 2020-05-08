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

user1 = User.create!({username: 'poppy', email: 'poppy@aa.com',password: '123321'})

pin1 = Pin.new({ user_id: user1.id, height: "", title: 'la poppies'})
p1 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/poppy.jpg')
pin1.image.attach(io: p1, filename: 'poppy.jpg')
pin1.save!

pin2 = Pin.new({ user_id: user1.id, height: "", title: 'dear maple'})
p2 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/dearMaple.jpg')
pin2.image.attach(io: p2, filename: 'dearMaple.jpg')
pin2.save!

pin3 = Pin.new({ user_id: user1.id, height: "", title: 'Venice'})
p3 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/Venice.jpg')
pin3.image.attach(io: p3, filename: 'Venice.jpg')
pin3.save!

pin4 = Pin.new({ user_id: user1.id, height: "", title: 'the Abstract'})
p4 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/abstract.jpg')
pin4.image.attach(io: p4, filename: 'abstract.jpg')
pin4.save!

pin5 = Pin.new({ user_id: user1.id, height: "", title: 'Greece dinning'})
p5 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/de+dinning.jpg')
pin5.image.attach(io: p5, filename: 'de_dinning.jpg')
pin5.save!

pin6 = Pin.new({ user_id: user1.id, height: "", title: 'Buddha and I'})
p6 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/buddha.jpg')
pin6.image.attach(io: p6, filename: 'buddha.jpg')
pin6.save!

pin7 = Pin.new({ user_id: user1.id, height: "", title: 'backyard'})
p7 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/backyard.jpg')
pin7.image.attach(io: p7, filename: 'backyard.jpg')
pin7.save!
