import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBekBYiDu8qz4hcydS6hFSlTq9dehXIBs4",
    authDomain: "fir-test-a527c.firebaseapp.com",
    databaseURL: "https://fir-test-a527c.firebaseio.com",
    projectId: "fir-test-a527c",
    storageBucket: "fir-test-a527c.appspot.com",
    messagingSenderId: "287384582023",
    appId: "1:287384582023:web:2d169cc84fc9667a2fc522",
    measurementId: "G-6ZH57RS9YD"
};

let num = 0;

export default async (req, res) => {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    firebase.firestore()
        .collection('cronTest')
        .doc(num.toString())
        .set({'test':'rishabh',
        'date': new Date()})
        .then((doc) => {
            res.json(doc);
        })
        .catch((error) => {
            res.json({ error });
        });
    num++;
};
