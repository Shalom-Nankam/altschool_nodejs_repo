// create entities(collections)
db.createCollection('items')

db.createCollection('categories')

db.createCollection('users')


// insert records into collections
db.items.insertOne({_id: 1, name: 'iPhone 14', price: 1000000, size: 'Max', category_id: 1, created_at: Date(), updated_at: Date()})

db.categories.insertOne({name: 'Fashion', _id: 2, created_at: Date(), updated_at: Date()})

db.users.insertOne({id: 1, first_name: 'Bola', last_name: 'Tinubu', email: 'bolatinubu@gmail.com', password: 'BolaTinubu', role: 'regular', created_at: Date(), updated_at: Date() })

// getting records from collections
db.items.find()

db.categories.findOne({name: 'Electronics'})


// updating records on collections
db.users.updateOne({id: 1}, {$set: {role: 'admin', }})

db.items.updateOne({id: 2, }, {$set: {name: 'Stockings', size: 'small'}})


// deleting records from collections
db.items.deleteOne({name: 'iPhone 14'})

db.users.deleteOne({role: 'regular'})