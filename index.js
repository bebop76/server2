const express = require('express');
const app = express();
// const PORT = 80;
app.use(express.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
const products = [
    {
      name: 'iPhone 13',
      color: 'White',
      company: 'Apple'
    },
    {
      name: 'OnePlus 9',
      color: 'Blue',
      company: 'Oneplus'
    },
    {
      name: 'iPhone 12',
      color: 'Purple',
      company: 'Apple'
    }
]

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(products)
  })

  
  app.set('port', (process.env.PORT || 5000));
  
  
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
  
  
  // app.listen(PORT, () => console.log(`API Attiva`))