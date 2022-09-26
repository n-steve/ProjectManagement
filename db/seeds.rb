# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(first_name: "Steve", last_name: "Nguyen", email: "sampleemail@gmail.com")
user2 = User.create!(first_name: "Test", last_name: "Subject", email: "randomemail@gmail.com")

app1 = App.create(app_name: "Project Helper", app_details: "web for developers to help each other",user_id: user1.id)
app2 = App.create(app_name: "Random App", app_details: "random app for users", user_id: user2.id)


ticket1 = Ticket.create!(title: "association issues", description:"cannot connect associations properly", issue: "code error", status: "open", priority: "low", app_id: app1.id)
ticket2 = Ticket.create!(title: "cannot run app", description: "cannot successfully route app to rails", issue: "typo error", status: "open", priority: "high", app_id: app2.id)
ticket3 = Ticket.create!(title: "type issues", description:"no network", issue: "newtwork", status: "open", priority: "low", app_id: app1.id)


comment1 = Comment.create(user_id: user1.id,ticket_id: ticket1.id, comment_chat: "Can anyone help me?")
comment3 = Comment.create(user_id: user1.id,ticket_id: ticket1.id, comment_chat: "Almost there?")


comment2 = Comment.create(user_id: user2.id, ticket_id: ticket2.id, comment_chat: "I'm seriously stuck and can't find the typo")