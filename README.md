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

## How to run
1. `git clone https://github.com/vincemoe/asset-dispatch.git`
2. `cd asset-dispatch/src/firebase`
3. `touch firebase.js`
4. Copy the following into `firebase.js`:
   ```
    import * as firebase from 'firebase';
    
    const config = {
       apiKey: "AIzaSyCk3Chnafd-D3CjgzhR1zVa9mAAid5ZoT8",
       authDomain: "asset-dispatch.firebaseapp.com",
       databaseURL: "https://asset-dispatch.firebaseio.com",
       projectId: "asset-dispatch",
       storageBucket: "asset-dispatch.appspot.com",
       messagingSenderId: "1098131309656",
    };
    
    if (!firebase.apps.length) {
       firebase.initializeApp(config);
    }
    
    const auth = firebase.auth();
    
    export {
       auth,
    };

5. Navigate back to the `asset-distpatch` directory root
6. Run `docker-compose up -d --build`
7. Visit `localhost:3000` in your browser