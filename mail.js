var express = require('express');
var bodyParser = require('body-parser');
const fs=require('fs');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//app.use(express.bodyParser());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/here',function(req,res)
{
  console.log("inside ")
}
)  
 

app.post('/formProcesss', function (req, res) {
    //console.log("here")
    var data=req.body;
    console.log(data);
    console.log(data[0]);

    var data1=JSON.stringify(data);
    console.log(data1);
    console.log(data1[0])
    console.log(data1);
    const name2=req.query.name1;
   console.log(name2);
  //  const folder_name="./c:/node/"
      fs.appendFile(js_set1.txt, data1, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "prkasadh12"
      });
      

      
  
});

    const port = 8080;
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })  




      // var obj=[{
      //   "name":dhruv,
      //   "email":"d@fma.com",

      // }]

      // obj[0].name;
      // obj.em