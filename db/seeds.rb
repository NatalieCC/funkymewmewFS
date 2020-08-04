# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

### DESTROY ALL
User.destroy_all
Pin.destroy_all
Board.destroy_all
PinsOnBoard.destroy_all



### USERS four users
user1 = User.create!({
  username: 'Jinx_Jerry',
  first_name: 'Jerry',
  last_name: 'Jinx', 
  email: 'jerry@greattom.com',
  password: '888888',
  location: 'Silicon Valley',
  description: 'Tommy is my favorite animal!'})

file = open("https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/seeds/jerry.jpg")
user1.photo.attach(io: file, filename: "jerry.jpg")

user2 = User.create!({
  username: 'Tommy_Jasper',
  first_name: 'Tom',
  last_name: 'Jasper', 
  email: 'tommy@greattom.com',
  password: '888888',
  location: 'Chicago, IL',
  description: 'Gee, I\'m throwin away a million dollars... BUT I\'M HAPPY!'})

file = open("https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/tom/tom.jpg")
user2.photo.attach(io: file, filename: "tom.jpg")

user3 = User.create!({
  username: 'Spike_Butch',
  first_name: 'Spike',
  last_name: 'Butch', 
  email: 'spike@greattom.com',
  password: '888888',
  location: 'Hollywood, CA',
  description: 'Made my first appearance in the 1942 Tom and Jerry cartoon \'Dog Trouble\''})

file = open("https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/spike/spike.jpg")
user3.photo.attach(io: file, filename: "spike.jpg")

user4 = User.create!({
  username: 'Toodles_Galore',
  first_name: 'Toodles',
  last_name: 'Galore', 
  email: 'toodles@greattom.com',
  password: '888888',
  location: 'New York City',
  description: 'I am enjoying the show...'})

file = open("https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/galore/Toodles.jpg")
user4.photo.attach(io: file, filename: "Toodles.jpg")


#Boards
board1 = Board.new({
  title: "Fantacy Arts",
  description: "My favorite art pieces.",
  is_public: true,
  user_id: user2.id
})
board1.save!

board2 = Board.new({
  title: "La La Land",
  description: "What are your dreams?",
  is_public: true,
  user_id: user1.id
})
board2.save!

board3 = Board.new({
  title: "July\'s Fun",
  description: "If it makes you happy it doesn't have to make sense.",
  is_public: true,
  user_id: user1.id
})
board3.save!

board4 = Board.new({
  title: "Sweet 16 Parties",
  description: "Bling Bling Twinkle Star >.<",
  is_public: true,
  user_id: user3.id
})
board4.save!

board5 = Board.new({
  title: "Lavish Mew Mew",
  description: "You call it waste I call it treasure?",
  is_public: true,
  user_id: user4.id
})
board5.save!

board6 = Board.new({
  title: "Funky Mew Mew",
  description: "Immaturity Rocks!",
  is_public: true,
  user_id: user1.id
})
board6.save!

board7 = Board.new({
  title: "Work Hard Play Harder",
  description: "All work and no play makes jack a dull boy~",
  is_public: true,
  user_id: user2.id
})
board7.save!

board8 = Board.new({
  title: "לתפוס אהבה",
  description: "כמה קשה להיות נאהב?",
  is_public: true,
  user_id: user1.id
})
board8.save!



### PINS & PinsOnBoard
# La La Land board2
pin1 = Pin.new({ user_id: user1.id, height: "", title: 'Milos... Hidden beaches', description: "Mílos, Kikladhes, Greece"})
p1 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l1.jpg')
pin1.image.attach(io: p1, filename: 'l1.jpg')
pin1.save!

pinsOnBoard0 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin1.id
})
pinsOnBoard0.save!

pin2 = Pin.new({ user_id: user1.id, height: "", title: 'Eguisheim', description: "~~Eguisheim | a village along the wine route, the streets are arranged in concentric circles, Alsace, France | by Mau1962~~"})
p2 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l2.jpg')
pin2.image.attach(io: p2, filename: 'l2.jpg')
pin2.save!

pinsOnBoard1 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin2.id
})
pinsOnBoard1.save!

pin3 = Pin.new({ user_id: user1.id, height: "", title: 'Front Roe by Louise Roe', description: "Kelebek Vadisi, Turkey"})
p3 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l3.jpg')
pin3.image.attach(io: p3, filename: 'l3.jpg')
pin3.save!

pinsOnBoard2 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin3.id
})
pinsOnBoard2.save!

pin4 = Pin.new({ user_id: user1.id, height: "", title: 'Valle Verzasca', description: "Don’t be afraid to leap in!"})
p4 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l4.jpg')
pin4.image.attach(io: p4, filename: 'l4.jpg')
pin4.save!

pinsOnBoard3 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin4.id
})
pinsOnBoard3.save!

pin5 = Pin.new({ user_id: user1.id, height: "", title: 'Aubaine Selfridges', description:"An afternoon tea with scones, pecan brownies, and raspberry tart."})
p5 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l5.jpg')
pin5.image.attach(io: p5, filename: 'l5.jpg')
pin5.save!

pinsOnBoard4 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin5.id
})
pinsOnBoard4.save!

pin6 = Pin.new({ user_id: user1.id, height: "", title: 'Cityscape Photography', description: "BY ALISDAIR MILLER"})
p6 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l6.jpg')
pin6.image.attach(io: p6, filename: 'l6.jpg')
pin6.save!

pinsOnBoard5 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin6.id
})
pinsOnBoard5.save!

pin7 = Pin.new({ user_id: user1.id, height: "", title: 'Albufeira Coastline', description: "Albufeira is a Portuguese small town that has Latin American vibes."})
p7 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l7.jpg')
pin7.image.attach(io: p7, filename: 'l7.jpg')
pin7.save!

pinsOnBoard6 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin7.id
})
pinsOnBoard6.save!

pin8 = Pin.new({ user_id: user1.id, height: "", title: 'Islamic Architecture', description: ""})
p8 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/lala+land/l8.jpg')
pin8.image.attach(io: p8, filename: 'l8.jpg')
pin8.save!

pinsOnBoard7 = PinsOnBoard.new({
  board_id: board2.id,
  pin_id: pin8.id
})
pinsOnBoard7.save!
##############

# JULY'S FUN board3
pin9 = Pin.new({ user_id: user1.id, height: "", title: 'Healthy Fruit Ice', description: "Blueberry Pineapple and orange"})
p9 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j1.jpg')
pin9.image.attach(io: p9, filename: 'j1.jpg')
pin9.save!

pinsOnBoard8 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin9.id
})
pinsOnBoard8.save!

pin10 = Pin.new({ user_id: user1.id, height: "", title: 'Pink & Rose Gold Party', description: "Looking for pretty and a little bit of glam?!"})
p10 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j2.jpg')
pin10.image.attach(io: p10, filename: 'j2.jpg')
pin10.save!

pinsOnBoard9 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin10.id
})
pinsOnBoard9.save!

pin11 = Pin.new({ user_id: user1.id, height: "", title: 'Rainbow Fudge', description: "Who knew the rainbow tasted so chocolatey?"})
p11 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j3.jpg')
pin11.image.attach(io: p11, filename: 'j3.jpg')
pin11.save!

pinsOnBoard10 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin11.id
})
pinsOnBoard10.save!

pin12 = Pin.new({ user_id: user1.id, height: "", title: 'Fruit Popsicles', description: "Nothing to feel gilty about."})
p12 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j4.jpg')
pin12.image.attach(io: p12, filename: 'j4.jpg')
pin12.save!

pinsOnBoard11 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin12.id
})
pinsOnBoard11.save!

pin13 = Pin.new({ user_id: user1.id, height: "", title: 'Cake Pops', description:"Easy to make and look just gorgeous."})
p13 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j5.jpg')
pin13.image.attach(io: p13, filename: 'j5.jpg')
pin13.save!

pinsOnBoard12 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin13.id
})
pinsOnBoard12.save!

pin14 = Pin.new({ user_id: user1.id, height: "", title: 'Sweet-Table in Pudertönen', description: "Weiß und Schwarz als Detailfarbe. Das ist ja farblich genau"})
p14 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j6.jpg')
pin14.image.attach(io: p14, filename: 'j6.jpg')
pin14.save!

pinsOnBoard13 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin14.id
})
pinsOnBoard13.save!

pin33 = Pin.new({ user_id: user1.id, height: "", title: 'Rose Balloons', description: "Love capture."})
p33 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j7.jpg')
pin33.image.attach(io: p33, filename: 'j7.jpg')
pin33.save!

pinsOnBoard32 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin33.id
})
pinsOnBoard32.save!

pin34 = Pin.new({ user_id: user1.id, height: "", title: 'Floral Cotton Candies', description: "Little wheels\'re delivering the fun."})
p34 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/July+Fun/j8A.jpg')
pin34.image.attach(io: p34, filename: 'j8A.jpg')
pin34.save!

pinsOnBoard33 = PinsOnBoard.new({
  board_id: board3.id,
  pin_id: pin34.id
})
pinsOnBoard33.save!

##############
# FUNKY MEWMEW  board6
pin15 = Pin.new({ user_id: user1.id, height: "", title: 'Wild Flower Linen', description: "Vibiana Events."})
p15 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f1.jpg')
pin15.image.attach(io: p15, filename: 'f1.jpg')
pin15.save!

pinsOnBoard14 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin15.id
})
pinsOnBoard14.save!

pin16 = Pin.new({ user_id: user1.id, height: "", title: 'Populuxe Look of the New Art Deco Style', description: "New Art Deco is painted in pastel color schemes."})
p16 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f2.jpg')
pin16.image.attach(io: p16, filename: 'f2.jpg')
pin16.save!

pinsOnBoard15 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin16.id
})
pinsOnBoard15.save!

pin17 = Pin.new({ user_id: user1.id, height: "", title: 'Wood Arts', description: "By the Turquoise Iris."})
p17 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f3.jpg')
pin17.image.attach(io: p17, filename: 'f3.jpg')
pin17.save!

pinsOnBoard16 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin17.id
})
pinsOnBoard16.save!

pin18 = Pin.new({ user_id: user1.id, height: "", title: 'Home Tour', description: "Are you ready to see the ultimate cool-girl homespace?"})
p18 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f4.jpg')
pin18.image.attach(io: p18, filename: 'f4.jpg')
pin18.save!

pinsOnBoard17 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin18.id
})
pinsOnBoard17.save!

pin19 = Pin.new({ user_id: user1.id, height: "", title: 'Art for The Wall', description:"The little green store and gallery."})
p19 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f5.jpg')
pin19.image.attach(io: p19, filename: 'f5.jpg')
pin19.save!

pinsOnBoard18 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin19.id
})
pinsOnBoard18.save!

pin20 = Pin.new({ user_id: user1.id, height: "", title: 'Lienzo Alebrije de blanquiurris', description: "Millones de diseños originales hechos"})
p20 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f6.jpg')
pin20.image.attach(io: p20, filename: 'f6.jpg')
pin20.save!

pinsOnBoard19 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin20.id
})
pinsOnBoard19.save!

pin31 = Pin.new({ user_id: user1.id, height: "", title: 'Coral Treats', description: "Get more excited about desserts."})
p31 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f7.jpg')
pin31.image.attach(io: p31, filename: 'f7.jpg')
pin31.save!

pinsOnBoard30 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin31.id
})
pinsOnBoard30.save!

pin32 = Pin.new({ user_id: user1.id, height: "", title: 'Rose Balloons', description: "Love capture."})
p32 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/funkymewmew/f8.jpg')
pin32.image.attach(io: p32, filename: 'f8.jpg')
pin32.save!

pinsOnBoard31 = PinsOnBoard.new({
  board_id: board6.id,
  pin_id: pin32.id
})
pinsOnBoard31.save!

##############

# HEBREW  board8
pin21 = Pin.new({ user_id: user1.id, height: "", title: 'Glamorous Destination', description: "With Classic Palette & Glowing Candles."})
p21 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h1.jpg')
pin21.image.attach(io: p21, filename: 'h1.jpg')
pin21.save!

pinsOnBoard20 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin21.id
})
pinsOnBoard20.save!

pin22 = Pin.new({ user_id: user1.id, height: "", title: 'Purple Dendrobium Orchids', description: "Dendrobium Orchid Centerpieces."})
p22 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h4.jpg')
pin22.image.attach(io: p22, filename: 'h4.jpg')
pin22.save!

pinsOnBoard21 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin22.id
})
pinsOnBoard21.save!

pin23 = Pin.new({ user_id: user1.id, height: "", title: 'Past', description: "Bear Mr.Handsome..."})
p23 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h9.jpg')
pin23.image.attach(io: p23, filename: 'h9.jpg')
pin23.save!

pinsOnBoard22 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin23.id
})
pinsOnBoard22.save!

pin24 = Pin.new({ user_id: user1.id, height: "", title: 'Forget-Me-Nots', description: "These blue blooms are the Alaskan state flower."})
p24 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h8.jpg')
pin24.image.attach(io: p24, filename: 'h8.jpg')
pin24.save!

pinsOnBoard23 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin24.id
})
pinsOnBoard23.save!

pin25 = Pin.new({ user_id: user1.id, height: "", title: 'Baby Fox', description: "Adorable Foxes To Fall Hopeless In Love With."})
p25 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h10.jpg')
pin25.image.attach(io: p25, filename: 'h10.jpg')
pin25.save!

pinsOnBoard24 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin25.id
})
pinsOnBoard24.save!

pin26 = Pin.new({ user_id: user1.id, height: "", title: 'Illustration of Pink', description: "Pink and indigo marble."})
p26 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h2.jpg')
pin26.image.attach(io: p26, filename: 'h2.jpg')
pin26.save!

pinsOnBoard25 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin26.id
})
pinsOnBoard25.save!

pin27 = Pin.new({ user_id: user1.id, height: "", title: 'Botanical Art Print', description: "Tropical palm trees."})
p27 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h6.jpg')
pin27.image.attach(io: p27, filename: 'h6.jpg')
pin27.save!

pinsOnBoard26 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin27.id
})
pinsOnBoard26.save!

pin28 = Pin.new({ user_id: user1.id, height: "", title: 'Wedding Centerpiece', description: "Stunning wedding decorations."})
p28 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h3.jpg')
pin28.image.attach(io: p28, filename: 'h3.jpg')
pin28.save!

pinsOnBoard27 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin28.id
})
pinsOnBoard27.save!

pin29 = Pin.new({ user_id: user1.id, height: "", title: 'Bridal Brooch Bouquet', description: "Custom Lush Blush Pink and Ivory with Gold and Rose Gold."})
p29 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h5.jpg')
pin29.image.attach(io: p29, filename: 'h5.jpg')
pin29.save!

pinsOnBoard28 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin29.id
})
pinsOnBoard28.save!

pin30 = Pin.new({ user_id: user1.id, height: "", title: 'No Breeze Whispered', description: "A brief encounter..."})
p30 = open('https://active-storage-mewtrest-dev.s3-us-west-1.amazonaws.com/hebrew/h7.jpg')
pin30.image.attach(io: p30, filename: 'h7.jpg')
pin30.save!

pinsOnBoard29 = PinsOnBoard.new({
  board_id: board8.id,
  pin_id: pin30.id
})
pinsOnBoard29.save!


















