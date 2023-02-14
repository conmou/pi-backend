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
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //反轉日期
    list.reverse()
    res.send(list);
    var createdAt = new Date(reportDate._seconds * 1000);
});

app.get("/date", async (req, res) => {
    const snapshot = await date.orderBy('date','desc').limit(5).get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //反轉日期
    res.send(list);
});

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

app.listen(5001, () => console.log("Up & RUnning *5001"));