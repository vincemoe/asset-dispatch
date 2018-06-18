import { db_ref } from './firebase';


// User API

export const doCreateUser = (id, username, email) =>
    db_ref.ref(`users/${id}`).set({
        username,
        email,
    });

export const onceGetUsers = () =>
    db_ref.ref('users').once('value');

export const getUser = (key) =>
    db_ref.ref('users'/key).once('value');

export const getAssets = () =>
    db_ref.ref('assets').once('value');

export const addAsset = (description, lat, lng, name, type, points, timestamp, addedby) =>
    db_ref.ref().child('assets').push({
        description,
        lat,
        lng,
        name,
        type,
        points,
        timestamp,
        addedby,
    });



// Other Entity APIs ...