Install Template -- complete
Deploy heroku -- complete

Project Plan

Will be creating a task management, user friendly similar to a bug tracker
Instead of having a admin or sr. developer assign tasks, allow users to cooperate with each other for a more friendly application similar to Stack Over Flow where users can submit their issues or problems and other users can add supportive ideas or solutions to their problems!

Create diagram of models

User with login/password

1. first name
2. last name
3. email as login - must be unique, presence
4. password_digest and security - must be unique presence
5. a USER has many Apps
6. a USER has many tickets
7. a USER has many comments through tickets

User's main app with the following

1. application name
2. FOREIGN KEY - App belongs to a user

User's ticket with the following <-- Main Model that will have CRUD

1. title of the ticket
2. description of what the user's having trouble with
3. priority of the ticket urgent, high, medium or low
4. type of issue bug or error type
5. status of the ticket, not started, in-progress, complete
6. FOREGIN key - Ticket belongs to a user, user_id
7. FOREIGN key - Ticket belongs to the App, app_id

Ticket's comments between users

1. comment between users about issues and support.
2. FOREIGN key - Comment belongs to Ticket, ticket_id

# should create a live chatbox? or a saved chatbox? Both?

4 Models/Migration created -- incomplete, still adjusting and editing.

create sample seed DataBase to double check migration foreign keys, and association.
