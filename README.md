# Poputchiki Innopolis

<img src="images/innopolis-logo.svg" height="48px" href="https://innopolis.university/en/"/>

This is a mobile app for hitchhiking between Innopolis and Kazan. In the app, there are two main types of users (other than admin); driver and passenger. A driver can publish his upcoming trip with the exact route and details about the trip such as departure time, number available seats, etc. A user can search for trips either From Kazan To Innopolis or From Innopolis To Kazan, and register on the trip. 

There will also be many functionalities available for both driver and passenger such as canceling the ride, canceling the trip, contacting driver/passenger, etc.

## What problem are we solving?

Most of Innopolis residents and workers suffer from the lack of public transportation between Kazan and Innopolis. Therefore, most of "Innopolisians" try to find a ride with someone driving from Kazan to Innopolis or vice versa. People try to solve this problem using a Telegram chat [Попутчики Иннополис](https://t.me/joinchat/BZaU2UDW8zpUizpiMvDRQA) with around 3000 users.

Our goal to implement a software which basically implements a solution for this problem with many functionalities that make it easy and convenient for people to use.

## Rational Unified Process: Artifacts

The RUP Artifacts document that explains all the requirements for our software can be found [here](https://github.com/repeating/PoputchikiInno/blob/main/RUP%20Artifact.pdf).

## How to install and run

To run the software, you should first install and run the back-end as described in the Readme file in `/backend` folder. Then, you should install and run the front-end as described in the Readme file in `/frontend` folder.

## Architecture Decision

### Back-end

We use Django framework because it's open-source and it was designed to be simple and allow flexibility, reliability, and scalability of the project.

Also we have 2 developers in the team who are familiar with Python and with framework, so it was easier for us to use this framework.

### Front-end

We decided to pick JS6, tailwindcss, Expo using React Native because:
1. Our customers will mostly consist of mobile users
2. It's the most popular at the moment. This means that our developers will have a better chance of getting hired in the future after this course ends.
3. There are at least a dozen of state management framework for scalability in React (redux, recoil,...)
4. We use tailwindcss because it gives us lots of pre-build utility classes to style app components quickly
5. Furthermore,  our developers, wanted to learn this framework for future employment
6. We used Expo because we are working on a short term project and rapid development is a priority for us.
7. Expo has in-built access to Native APIs which make it better for short term projects

### Database

We use relational database as it can easily be integrated with Django framework. We've chosen sqlite for simplicity and ease of implementation for the time being. We might later on migrate to another database when the user base grows.

### Third-Party APIs

* **Google Maps API**:

    We use Google Maps API in the back-end to get some details about the trips. We also use the API in the front-end to show the client the route of their trip. 

    We've chose Google Maps API because:
    1. It's provides $200 free monthly usage
    2. It's relatively easy to set up for the development process
    3. It's scalable in the future when our app has more users

## Architecture design

<img src="images/architecture design.jpg"/>

## Sequence diagram

<img src="images/sequence diagram.jpg"/>

## Data model

<img src="images/data model.jpg"/>

## Solid Principles

We tried to follow some Solid Principles in this project. For example, the **<em>Open/Closed</em>** principle which 
states that “software entities … should be open for extension, but closed for modification.”.

We've applied it by using the auto module migrations created by Django framework. These migrations allow to change the 
Django data modules by creating a new migration that adds up something on top of the previous migrations, instead of 
directly modifying it.

## Design patterns

Since we've used Django framework for the back-end, we've been using several Fowler's patterns that are implemented by Django. Here are a few of them according to [Django Design Patterns and Best Practices - Second Edition](https://subscription.packtpub.com/book/web_development/9781788831345/1/ch01lvl1sec13/what-is-a-pattern):

| **Fowler pattern**          | **Django component**  | **Explanation**                                                       |
|-------------------------|-------------------|-------------------------------------------------------------------|
| Active record           | Django models     | Encapsulate the database access and add domain logic on that data |
| Class table inheritance | Model inheritance | Each entity in the hierarchy is mapped to a separate table        |
| Identity field          | ID field          | Saves a database ID field in an object to maintain identity       |
| Template view           | Django templates  | Render into HTML by embedding markers in HTML                     |

## Prototype

The prototype of our mobile app can be found [here](https://miro.com/app/board/o9J_lypqN9k=/).

## Demo

The demo of our application can be found [here](https://github.com/repeating/PoputchikiInno/blob/main/Demo.mov?raw=true).

## Glosary 

* **Passenger**: Person who travels by getting free/paid lifts in passing vehicles.
* **Driver**: Person who gives a passenger a ride.
* **Trip**: A service offered by the driver to the passenger
* **General Users**: Passenger and Drivers; Users who do not have administrative privileges
* **Admin**: User who has administrative privileges
* **Client**: People who pay for this app
* **PM**: Project Manager; consultant responsible for or
* **TL**: Team (Tech) Lead

## Our team
- [Fadi Younes](https://t.me/fadi_yn)
- [Kamil Sabbagh](https://t.me/KamilSabbagh)
- [Karam Shbeeb](https://t.me/karamshbeb)
- [Du Tham Lieu](https://t.me/niuzi97)
