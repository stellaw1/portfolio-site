---
title: Food Fairy
img: foodfairy.png
date: '2019-10-12'
description: 'A foodwaste manager project built at the University of Washington Dubhacks hackathon'
github: https://github.com/stellaw1/food-fairy
tags:
    - JS
    - HTML
    - CSS
    - FireBase
---

![prototype](/images/projects/foodfairy.png)

## Inspiration

In 2016, roughly 50% of all food produce in the United States was thrown away - $160 billion dollars worth of food - and while much of this waste is produced on a commercial level, we wanted to create a tool that minimizes food waste on a consumer level. We want to minimize the need to throw food in our kitchens away, simply because we've forgotten we still had that bag of tomatoes sitting in the corner of our fridges, or some ground beef that expired 2 days ago.

## Purpose

Never let your food go bad again! Food fairy is a web application that allows the user to log food items they have in their kitchen as a way to keep track of expiration dates. The tool also recommends customized recipes based on which foods on the log are about to expire, to help the user make the most out of their ingredients before they go bad.

## Design

We utilized cloud functions on Google Cloud Platform for getting the recommended recipe. By checking the expiring date of food from firebase, we can get recipe based on the expiring ingredient by a recipe API and display it on the client side. We also used firebase to store "My food" data. We then connected the backend to our frontend to function as a web app.

## Challenges

We ran into issues with CORS block, and it took us a long time to figure out with the mentors.

## Accomplishments

-   Picked up JavaScript, HTML, and CSS from very minimal experience.
-   Collaborated with a diverse group of individuals
-   Sharpened Google Cloud and firebase skills and problem solving for cloud computing
-   Tried out FireBase for the first time!

## Plans

Once the web application has been finalized, we'd like to create a mobile app version of the tool for easier user accessibility. Future goals are to integrate our application into a voice assistant such as Google Assistant or Cortana for hands-free accessibility from the convenience of the users' homes and devices.

## Prototypes

[http://foodfairy.tech/](http://foodfairy.tech/)

[DevPost](https://devpost.com/software/food-fairy)

[GitHub](https://github.com/stellaw1/food-fairy)
