# League of Looking for Group
### Deployed here : https://leagueoflookingforgroup.herokuapp.com/
------------------------------------------------------------------
### Or run locally:
##### To run this locally, you will need an api key from Riot Games! Their api keys refresh daily until they approve a project, which can take a little bit. As such, I would recommend either using the deployed site(which does not search for rank for new users) or contacting me before trying to run locally. That said... 
* Fork this repo
* Clone it to your machine
* Fork and clone this repo : placeholder.url
* Run the proxy server using the command: node server.js
* Make sure you have npm installed
* run: npm install react-router-dom bootstrap
* in the root, run: npm start 
* in the api folder, run: json-server -p 5002 -w database.json

#### After launching the page, you should see:
![Splash page](https://i.imgur.com/yTivXNc.jpg)
* Links will not work until successful login

#### Upon successul login (you can use connor@gmail.com / password) to test, you will be taken to your profile: 
![Profile page](https://i.imgur.com/3XMTywE.png)
* You can update portions of your profile from this page

#### Once you click the search button on the navbar, you are taken here: 
![Search page](https://i.imgur.com/9rzvjeN.png)
* This page defaults to showing all active users, but you can narrow down your search using the drop down

#### Once you've narrowed down your search to a specific queue you should see users in that queue: 
![Narrowed search](https://i.imgur.com/6raVCcx.png)

#### Clicking the add friend button on a user will redirect you to your friends page and show more about that user:
![Friend page](https://i.imgur.com/qPvY3k2.png)
* You can also delete a friend, which will remove them from your list and vice versa

#### Finally, the chat screen allows users to post openly and talk about whatever they want via open forum:
![Chat page](https://i.imgur.com/qIrsSbV.png)
* You should be able to see chat updates in real time

