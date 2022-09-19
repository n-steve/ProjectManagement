# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: "Steve", last_name: "Nguyen", email: "sampleemail@email.com")


app1 = App.create(app_name: "Project Helper", app_details: "web for developers to help each other",user_id: user1.id)





ticket1 = Ticket.create(title: "association issues", description:"cannot connect associations properly", issue: "code error", status: "open", priority: "low", app_id: app1.id)

comment1 = Comment.create(user_id: user1.id,ticket_id: ticket1.id, comment_chat: "Can anyone help me?")