const fetch = require("node-fetch")
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

var attires = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
];
    
    
// ---------option 3
// var attires = async () => {
//      attires = await getClothing();
//     //  setTimeout(attires,15000);
// return (attires);
// }

// async function getClothing(){
// 	var url = 'https://fakestoreapi.com/products';	
// 	var response = await fetch(url);
// 	var json     = await response.json();
//     console.log(json.data);
// 	return json.data;
// }

// setTimeout(getClothing,15000);
// console.log(JSON.stringify(getClothing));

// ---------option 3 correction? text instead json
// async function getClothing(){
//     let response = await fetch('https://fakestoreapi.com/products');
//     let data = await response.text();
//     console.log(data);
// }


// ---------option 6
// async function getClothing() {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const attires = await response.json();
//     // console.log(attires);
//   }
  
//   var attires = getClothing();
//   console.log(attires);

// ---------option 1
// var attires = [{id:0,name:"sleeves"},{id:1,name:"short"}]

// ---------option 2
// var attires = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const clothesData = await response.json();
//     console.log(clothesData);
//     return clothesData;
//   };
  
// ---------option 4 
// const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   fetch("https://fakestoreapi.com/products", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// ---------option 5
// var attires = fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json))


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.get("/attires", (req,res)=>{
    res.send(attires);
})
app.post("/attire",(req,res)=>{
    attires.push({id:req.body.id, title:req.body.title, price:req.body.price })
    res.send(`${JSON.stringify(attires)} created`)
})
app.delete("/attires/:id", (req,res)=>{
    console.log('delete:id:'+req.params.id)
    attires = attires.filter(item=> item.id != req.params.id)
    res.send("attires left:"+JSON.stringify(attires));
})
app.put("/attiresUpdate/:id", (req,res)=>{
    console.log('update:id:'+ req.params.id)
    if(!attires[req.params.id]) {
        throw new Error("Attire ID doesnt exist " + req.body.params)
      }
    //   attires[req.body.id] = {
    //     ...attires[req.body.id],
    //     ...attires,
    //   };
    //      res.send("attires updated:"+JSON.stringify(attires));
    //   return attires[req.body.id];

      attires[req.params.id] = ({id: req.body.id, title:req.body.title, price: req.body.price}),
        
     
      console.log(JSON.stringify(attires[req.body.id]))
      res.send("attires updated:"+JSON.stringify(attires));
      return attires[req.body.id];

    
    
})

app.listen(4000,()=>console.log('Listening on 4000'))