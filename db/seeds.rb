# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user1 = User.create(first_name: "Steve", last_name: "Nguyen", email: "anyemail@gmail.com", password: "hello", password_confirmation: "hello")
user2 = User.create(first_name: "Sam", last_name: "Sam", email: "newemail@gmail.com ", password: nil, password_confirmation: nil)

app1 = App.create(app_name: "First App", app_details: "First App Details", user_id: user1.id)
app2 = App.create(app_name: "Second App", app_details: "Second App Details", user_id: user1.id)

ticket1 = Ticket.create(title: "Serializer Issue", description: "can't connect routes", issue:"TypeError", status: "In Progress", priority: "Urgent", app_id: app1.id)
ticket2 = Ticket.create(title: "React on Rails creation issue", description: "troubles downloading correct files", issue: "TypeError", status: "Open", priority: "Low", app_id: app2.id)

comment1 = Comment.create(user_id: user1.id, ticket_id: ticket1.id, comment_chat: "Can anyone help me fix this issue?")
comment2 = Comment.create(user_id: user1.id,ticket_id: ticket2.id,comment_chat: "Can't figure anything out")