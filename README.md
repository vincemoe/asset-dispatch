# Asset Dispatch
A dispatching app made by [Vincent Moeykens](https://github.com/vincemoe).
## Todo: Add More stuff up here

## Technologies I Used

- React
- ES6
- React Router
- Firebase
- Google Cloud Platform


#### Docker
- Docker Compose

## How to Run
### Requirements:
- Docker
- Google Firebase Web API Keys

### Running Test Version locally
1. Clone the repo
2. Navigate to the `asset-dispatch` folder
3. Run `cd /src/firebase`
4. Run `touch firebase.js`
5. Open `/src/firebase/firebase.js` in a text editor/IDE
6. Give the file the following contents: 
    ```
    import * as firebase from 'firebase';
       
    const config = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STOREAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    };
       
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
       
    const auth = firebase.auth();
       
    export {
        auth,
    };
    ```
7. Run `docker-compose up -d --build`
8. Visit `localhost:3000` in your browser

### Running Production Version Locally
1. Clone the repo
2. Navigate to the `asset-dispatch` folder
3. Run `cd /src/firebase`
4. Run `touch firebase.js`
5. Open `/src/firebase/firebase.js` in a text editor/IDE
6. Give the file the following contents: 
    ```
    import * as firebase from 'firebase';
       
    const config = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STOREAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     };
       
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
       
    const auth = firebase.auth();
       
    export {
        auth,
    };
    ```
7. Run `docker-compose -f docker-compose-production.yml up -d --build`
8. Visit `localhost` in your browser