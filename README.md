# The Midnight Point and Click

This project is sort of in the style of a point click game. The main inspiration came from the ARG and the way it brought the _Midnightverse_ alive.

## Tech details

This app was built in React (built with Create React App - see below for more).

Also uses:

- Styled Components (CSS in JS)
- React Hooks
- React Context
- Canvas (Game component and TV fuzz)
- Image map (for most of the interactions)

To get started run `npm install`

## Overview

There are 3 types of interactions.

1. Modal

The majority of interactions make use of the modal component

- Television
- Book
- NoticeBoard
- Map
- Record
- Skateboard
- Pizza
- Disks
- Prom sash
- Clock

These are clickable areas on an image map and are all listed in the const MAP_AREAS.

2. Overlay

- Light
- LavaLamp
- Lamp
- Balloon

These are imported directly into App.js

3. Links

Public folder contains any assets that are not imported into the JS files. They are the bigger sized assets which I have separated from the build.

The app also uses React Context to handle when the sound is muted - this is to avoid a clash between Youtube and Horror Show and the Monsters video music.

## Components

### Balloon

Click on pink balloon.
Image overlay without pink balloon along with 2 animated images for the pop. Could potentially just use one of the animated images?

### Book

Click on book on bookshelf.
Currently just using 4 of the 6 pages. Content needs checking/updating.

### Monitor

Click on Monitor.
Chatbot content needs checking and updating.

### Clock

Click on the wall clock.
The date in the countdown needs to be updated. Just has a test date in there for now.

### Disks

Click on the desk drawer.
Just an image at the moment.

### Game

Channel 3 of TV.
This is the most complex area and isn't perfect! It's built with Canvas with window.requestAnimationFrame.

### Lamp

Click on desk lamp switch. Simple overlay image

### LavaLamp

Click on lava lamp in view 2 or 3.
Overly image with animated blobs

### NeonLight

Click on neon light, animated image

### Map

Opened from Noticeboard items

### MobileView

Set to show at screens under 700px wide
Content needs reviewing.

### NoticeBoard

Contains other clickable items

### Pizza

Click to open and links to pizza-zone.net

### Prom

Click to see prom poster and links to prom playlist

### Record

Click on record to load Spotify embed and a spinning record which is also clickable

### Skateboard

Click to see the board and click again to rotate with a link to the shop (link is no longer available)

### Television

There are 3 channels: 1) Horror Show 2) Youtube 3) Game

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
