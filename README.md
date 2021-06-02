# My Fake Store API Take Home 

This is my submission for P&G's Junior Web Developer take home assignment. 
Once you clone the repo, simply go to the correct directory and run the command yarn start and it should run on your local server! 

Any feedback would be very much appreciated. 

## Time elapsed
I was given the take home on the morning of June 1st with the due date of June 2nd. I spent about 3-4 hours from start to scratch. 


## Features / Criteria 

I built a React app using the Fake Store API. Due to the website being a small ecommerce website, I loaded all the products on the main page and then segmented the different products through routes and props. In a bigger project, I would not recommend this due to overloading a user's experience during their first visit to the website. 
The website has sections on the sticky header for users to go between product types or all of them at once. 
Within each page, I decided to handle the searching, sorting, and filtering logic primarily through React Hooks (room for improvement mentioned below).  

## Improvements 
Given more time, here's a list of features that I could improve on: 
 - User auth and restricted routes 
 - A modal that opens up when a user clicks on a specific product 
 - Transforming the NavLinks into a toggle dropdown once viewport width becomes small 
 - Reduce the amount of array.slice() when working with the sortBy/filter function. Maybe consider not even using hooks here at all and making it simpler
 - Logos could be added using a styling library as well as incorporating SCSS