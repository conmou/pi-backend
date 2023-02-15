const express = require("express");
const cors = require("cors");
const min = require("./config");
// const date = require("./config");
// const { query } = require("express");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.send("hello conmou");
});

app.get("/min", async (req, res) => {
    const snapshot = await min.orderBy('temp','desc').limit(5).get();
    const list = snapshot.docs.map((doc) => ({ 
        // const timestamp = element.data().TS
        // const date = new Date(timestamp)
        // time = {
        //     nanoseconds: 0,
        //     seconds: date
        // }
        // const limit = new Date(time.seconds*1000)
        // const list2 = limit.toLocaleString("zh-TW");
        id: doc.id, temp: doc.data().temp, hunidity: doc.data().hunidity, TS: doc.data().TS 
    }));
    
    // min.orderBy('TS','desc').limit(5).get().then(snapshot => {
    //     snapshot.forEach( element => {
    //         const timestamp = element.data().TS
    //         const date = new Date(timestamp);
    //         // console.log(date.getDay())
    //         time = {
    //             nanoseconds: 0,
    //             seconds: date
    //         }
    //         const limit = new Date(time.seconds*1000)
    //         // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //         // console.log(limit.toLocaleDateString(undefined, options))
    //         const list2 = limit.toLocaleString("zh-TW");
    //         res.send(list2);
    //     })
    // })
    list.reverse()
    res.send(list);
});

app.get("/day", async(req,res) => {
    
})

// app.get("/date", async (req, res) => {
//     const snapshot = await date.orderBy('date','desc').limit(5).get();
//     const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     //反轉日期
//     res.send(list);
// });

//  app.post("/create", async (req, res) => {
//    const data = req.body;
//    await User.add({ data });
//    res.send({ msg: "User Added" });
//  })

//  app.post("/update", async (req, res) => {
//    const id = req.body.id;
//    delete req.body.id;
//    const data = req.body;
//    await User.doc(id).update(data);
//    res.send({ msg: "Updated" });
//  })

//  app.post("/delete", async (req, res) => {
//    const id = req.body.id;
//    await User.doc(id).delete();
//    res.send({ msg: "Deleted" });
//  });

// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
// res.send('Hello World!');
// });
// var server = app.listen(3000, function () {
// var host = server.address().address;
// var port = server.address().port;
// console.log('Example app listening at http://%s:%s', host, port);
// });
app.listen(5001, () => console.log("Up & RUnning *5001"));