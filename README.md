![logo](logo.png)

A dispatching app made by [Vincent Moeykens](https://github.com/vincemoe).

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/vincemoe/road-trip-ballot.svg?branch=master)](https://travis-ci.org/vincemoe/road-trip-ballot) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/vincemoe/road-trip-ballot/LICENSE) [![GitHub version](https://badge.fury.io/gh/vincemoe%2Fasset-dispatch.svg)](https://badge.fury.io/gh/vincemoe%2Fasset-dispatch) <a href="https://codeclimate.com/github/vincemoe/asset-dispatch/maintainability"><img src="https://api.codeclimate.com/v1/badges/1b11605a577471d1d82d/maintainability" /></a>

## Todo: Add More stuff up here

## Technologies I Used

- React
- ES6
- React Router
- Firebase
- Google Cloud Platform
- reactstrap (React Boostrap Wrapper)
- react-map-gl (*Uber* Mapbox.js Wrapper)


#### Docker
- Docker Compose

## How to run
1. `git clone https://github.com/vincemoe/asset-dispatch.git`
2. `cd asset-dispatch`
3. `touch .env`
4. Copy the following into `.env`:
    ```
    REACT_APP_MAP_TOKEN="MY MAPBOX TOKEN"
    REACT_APP_apiKey="MY FIREBASE API KEY"
    REACT_APP_authDomain="MY FIREBASE AUTH DOMAIN"
    REACT_APP_databseURL="MY FIREBASE DATABASE URL"
    REACT_APP_projectId="MY FIREBASE PROJECT ID"
    REACT_APP_storageBucket="MY FIREBASE STORAGE BUCKET"
    REACT_APP_messagingSenderId="MY FIREBASE MESSAGING SENDER"
    ```
5. *Obviously you must replace the values in quotes with your correct api creds*
6. Run `docker-compose up -d --build`
7. Visit `localhost:3000` in your browser