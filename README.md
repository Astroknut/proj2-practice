Trello Board: https://trello.com/b/qMupHAhQ/project-2

Project 2: Hoppy Hour

Wireframes
![Alt text](./img/signup.png?raw=true "Signup Page")
![Alt text](./img/login.png?raw=true "Login Page")
![Alt text](./img/myBeers.png?raw=true "User Home Page")
![Alt text](./img/search.png?raw=true "Search Page")

If you're one of the tens of people who just LOVE Brewdog Brewery's ridiculously large beer selection, this is the app for you. 

Have you ever found yourself daydreaming about a crisp, refreshing pint of Vagabond Pilsner? Then you have probably thought to yourself: "I really wish there was some way for me to make a list of all of my favorite Brewdog beers, so I can read all about them whenever I want!"

Well rub my lamp and call me Genie, because your wish is my command! Introducing Hoppy Hour! An App designed specifically for you, the only person who has nothing better to do than to go through a random list of beers no one else has heard of and save them to a list(Who doesn't love a good list?). Now introducing our newest feature: "Delete"! Not only can you save beers to your own personal list, but now you delete them from that very same list! Lucky you! Well what are you waiting for? No one else is ever going to use this app, so get in there and start making some lists!

** Heroku link: https://guarded-escarpment-64492.herokuapp.com/ **


//API
This app uses the Punk API v2 from Brewdog Brewery as a thris party API, and the source of every single beer you will come across in the app. If you are interested in seeing exactly how easy this API was to use and how little I actually managed to make work, check out https://punkapi.com/documentation/v2 for more documentation. 

//Style
To keep up with the changing times, and to appease the minimalist lifestyle of the users who obviously have nothing better to do than use this app, you will find there is NO CSS. WHAT A BOLD MOVE, YOU SAY??? Design inspires trust, you say? Well so does alcohol, and theres a good chance if you're using this app that alcohol was involved.(Don't worry, you'll see some styles in the next version....or 3). 

//Authentication
"Well, at least your use of Passport to verify users and ensure their credentials stay secure is impressive." Jokes on you, i'm not even sure how that works. But hey, it gets you into the app and the password saved in our database looks like you made it after a weekend bender. Guess you'll just have to trust I wasn't drunk when I built the authentication method. But you'd be wrong. 

//FrontEnd
Our minimalist style is easy on your alcohol-induced visual sensitivity. Unforunately, you can't see the magic happeneing to bring that page to your screen!(Unless those weren't just ordinary mushrooms on your pizza 0_o) . I've used cutting edge EJS techniques to render the frontend with JAVASCRIPT (*insert Shia LaBeouf magic gif*). Crazy, I know. But wait, theres more! I even made some AJAX calls to render those beers on your search page! WOOO! If nothing else, I have learned to use words that my friends and family don't understand at all! Finally, something we have in common! 

//Routing
Take a peek behind the curtain, and you'll see that your data is being carefully handled by my magnificient express routing. Luckily, you can't get a DUI on these routes. We used some AJAX on the frontend to make those api calls to Brewdog, but now we need to use our very own api to get our data to and from the backend! "WOW, you've managed to build a full CRD app!", and all I need to hit the MVP is U(settle down sparky, i'm talkin 'bout the Update'). Babysteps, guys. What part of alcohol did you not understand. I need a minute....

//Database
A SQL query walks into a bar..... and I don't understand this joke because I use MongoDb. How do we communicate with that MongoDb? MONGOOSE! According to the documentation: 'Mongoose provides a straight-forward, schema-based solution to model your application data.' Wtf is a Schema? Idk apparently its a plate and a model is a lunchlady. Who cares, IT'S CALLED MONGOOSE! Well anyways, you'll see two lunchladys in this app: User & Beer(Back in my day, the lunch lady's name was Eunice). Our User model contains the local property to house your login credentials, as well as an array of Beers. Those beers are embedded data based on the Beer Schema, which includes all that information that you don't care about but I listed for your beers anyways because hey, I had to make something, right? When you click the "Save Beer" button on the search page, it creates a new Beer to embed into the beers array for your user model. I know you don't get any confirmation that it was saved yet, sheesh who am I, Matt Webb? 

While there is still more work to be done, and i'm sure this README will be overhauled before my resume and portfolio go live, this app did help me to build a better understanding of several skills and technologies. After spending 3 hours trying to build a delete route, I finally realized that callback and commas will ruin your self confidence. Embedded data seems like a breeze! Until you try to render it in EJS!(still working on that one....)  Overall, I learned that building this app is like installing a turn signal into a BMW: Even if I made it perfectly, chances are no one will ever use it.




