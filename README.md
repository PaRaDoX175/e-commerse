E-shop

Functionality:

Viewing a list of products with the ability to sort by various criteria.
Adding items to cart and favorites.
Making purchases via Stripe's real banking system.
User authorization and registration.
View purchase history in personal profile.

Technology stack:

Backend: C#, using SQLite to store data (products, orders, users) and Redis to store favorite products.

Frontend: Angular to create a user-friendly interface.

Developed a functional e-store that allows you to conveniently find products, sort them, make secure purchases via Stripe and track order history.
The project provides a modern and intuitive online shopping tool that can be adapted for businesses of any orientation.

How to launch the project:
1) in API folder in CLI you need to write "dotnet watch run"
2) in client folder, first, you need to install all packages "npm i". Next, you need to write "ng serve".
3) And finally, in the root of the project, you need to launc REDIS "docker-compose up".
