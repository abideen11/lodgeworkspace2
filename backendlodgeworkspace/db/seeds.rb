# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Host.destroy_all

h1 = Host.create(name: "Shane D. Svendsen", age: 76, location: "Rocky Mount, NC", rental: "4 Bedroom House", max_days: 4, price: 58, rental_img1: "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale", rental_img2: "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/new-york-hotel-pennsylvania/media/cache/ppc-king-exec-5d72c5d440d29-748x625.jpg", fave: false)
h2 = Host.create(name: "Maureen Chavez", age: 25, location: "Ocala, FL", rental: "3 Bedroom House", max_days: 3, price: 62, rental_img1: "https://www.adamshomes.com/images/photo%20aug%2023%202%2043%2011%20pm.jpg", rental_img2: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/205684046.jpg?k=edd4b442376ac9cf1784cb06c8de0dc8a6037a871e50f060ba8bbcdc297cb74a&o=", fave: false)
h3 = Host.create(name: "Merle Munson", age: 38, location: "Mount Pleasant, MI", rental: "2 Bedroom Apartment", max_days: 3, price: 47, rental_img1: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/2293-3/the-reserve-at-eisenhower-apartments-building.jpg", rental_img2: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/256642502.jpg?k=6564c70881677c0300c541aaa642553fc3a5aad6a01e6f941096380a5a5c6716&o=", fave: false)
h4 = Host.create(name: "Teri R. Morris", age: 51, location: "Crawford, TN", rental: "2 Bedroom Condo", max_days: 6, price: 82, rental_img1: "https://images1.apartments.com/i2/remVizPVYlvkHCg_oHcUxVkS9_1yaf4FF4pa5rrkJPk/117/the-murphy-irvine-irvine-ca-building-photo.jpg", rental_img2: "https://assets.roomstogo.com/king-bedroom-sets_room-grid.jpg?cache-id=1137961473616752a3ad2fa809712c38w=1664&q=100", fave: false)
h5 = Host.create(name: "David Emerson", age: 36, location: "Green Cove Springs, FL", rental: "4 Bedroom House", max_days: 5, price: 52, rental_img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFmEHkrxp12FIPflGb4zWDXUlR7eJyEPYYYQ&usqp=CAU", rental_img2: "https://www.murnis.com/murnis_wp/wp-content/uploads/2018/05/Murnis-Houses-The-Big-House-2nd-Floor-Coconut-Bedroom-2-1024.jpg", fave: false)
h6 = Host.create(name: "Alan T. Trombley", age: 32, location: "Salinas, CA", rental: "4 Bedroom House", max_days: 5, price: 74, rental_img1: "https://ap.rdcpix.com/f7354b5e2f64b44ea85c831e52f45ef7l-m1872324939xd-w1020_h770_q80.jpg", rental_img2: "https://images.trvl-media.com/hotels/1000000/1000000/996300/996229/4f2f8e68.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium", fave: false)



