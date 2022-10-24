---
title: Chatroom Web App
img: chatroom-webapp.png
date: '2021-12-05'
description: 'Built a web application for students and professors to chat online'
github: https://github.com/stellaw1/chatroom-project
tags:
  - JS
  - HTML
  - CSS
  - MongoDB
  - Express
---


![product](https://github.com/ubc-cpen322-2021/classroom/raw/master/assets/screenshot.png?raw=true)

This is an online dicussion forum web app for students and professors to chat online, where anyone can create a chat room about a topic and people can have live chats that I built for a Software Construction course. 

## How I built it
1. Development started with the client side GUI, which involved using a lot of HTML, JavaScript, and CSS to layout and style the elements. 
2. Then, I turned the application into a single-page application via Client-side routing, defined high level objects to manage the application state, defined components that dynamically update according to changes in the application state, and created event handlers to add interactivity in the application and to update the application state.
3. Then, I implemented AJAX requests that allow the client to read and update the list of chat rooms from the server, implemented a WebSocket client to send and receive messages from the server, and a WebSocket server to act as a message broker between the client applications.
4. Then, I set up a MongoDB database for the application, wrote a driver for interacting with the MongoDB service, and created REST endpoints for reading objects from the database.
5. Lastly, I added security to the web app by implement a simple authentication mechanism, added user authentication using session cookies, and sanitized user input to defend against Cross-Site Scripting attacks.

## Technologies
- JavaScript 
- HTML
- CSS
- MongoDB
- Express

## What I learnt
Through developing this chatroom web app, I gained fundamental understanding for how web apps are built and learnt essential skills for how to add security, data storage, and REST requests. 