const firebase =require("firebase");

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

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
let num = 0;
const sendBirthdayMessage = async () => {
    const db = firebase.firestore();
    const collectionRef = db.collection("cronTest");
    const term = `I love you 💻 ${num}`;
    await collectionRef.add({term});
    num++;
    console.log(term)
};


sendBirthdayMessage();

module.exports = (req, res) => {
    sendBirthdayMessage();
    res.json({
        num
    })
}
