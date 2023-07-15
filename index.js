
//1. Make a api for phone number login
//----------------------------------------//

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
// use array as a data base
const Customers = [];

const app = express();
app.use(bodyParser.json());
// accepting request from the frontend
app.use(cors());


// creating addcustomer Api 
app.post('/addCustomer',(req,res) => {
    
    const {name, email, phone } = req.body;
    
    if(!name || !email || !phone){
        res.status(400).send("Name, Email, and Phone Required!");
    }
    
    // verify customer is present or not 
    const verify = Customers.find((user) => user.email === email);
    
    if(verify){
        res.status(404).send("Email already exists");
        return;
    }
    Customers.push(req.body);
    res.status(201).send("Customer added successfully.");
});


app.listen(PORT, (req,res) => {
    console.log(`Server is running at ${PORT}`);
});



// 3 Write a function in node that inserts the following data in mysql , the email should
// be unique and if the email already exists in the system then the name of the customer
// will be updated with the new name that is there in the array for that customer.
//-----------------------------------------------------------------------------//

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
// use array as a data base
let Customer = [];

const app = express();
// 
app.use(bodyParser.json());
// accepting request from the frontend
app.use(cors());


// creating addcustomer Api 
app.post('/addCustomer',(req,res) => {
    
    const { name, email } = req.body;
    
    if(!name || !email ){
        res.status(400).send("Name and Email Required!");
    }
    
    // verify customer is present or not 
    const verify = Customers.find((user) => user.email === email);
    
    if(verify){
        res.status(409).send("User is Alreday Present");
        return;
    }
    Customers.push(req.body);
     res.status(201).send("User is Created!");
});
 // Updating Customer with new name
app.put('/UpdateCustomer',(req,res) => {
    
    const {name , email}  = req.body;
    let newArray;
      const verify = Customers.find((user) => user.email === email);
      
      if(verify){
         newArray = Customers.filter((user) => user.email !== email);
          Customers = [...newArray];
          Customers.push({name: name, email: email});
          res.send(200).send("User Update Successful!");
      }
    res.send(400).send("No User Found!");
});


app.listen(PORT, (req,res) => {
    console.log(`Server is running at ${PORT}`);
});



//4 Create a new object which have all the properties of object person and student
//------------------------------------------------------------------------------//


const person = {
  id: 2,
  gender: 'mail',
};

const student = {
  name: 'ravi',
  email: 'ravi11@yopmail.com',
};

const mergedObject = {
  ...person,
  ...student,
};

console.log(mergedObject);



//5 Make a promisifed function for the functioan having callback below , after the
//function is promisifed then call the function like you call a promise
//-------------------------------------------------------------------------------//


 const request = require('request');

function getGoogleHomePage(finalCallBack){
    
    
    return new Promise((resolve, reject) => {
      
      request('http://www.google.com', function (error, response, body) {
          
          if(error){
           console.error('error:', error); // Print the error if one occurred
           reject(error);
          }
  else{
      console.log('statusCode:', response && response.statusCode); // Print the response status
      console.log('body:', body); // Print the HTML for the Google homepage.
      resolve(body);
  }
});
});

getGoogleHomePage()
.then((data) => {
    console.log(data)
})
.catch( (err) => {
    console.log(err);
});



// 6. Imagine you have array of integer from 1 to 100 , the numbers are randomly ordered
// , one number from 1 to 100 is missing , Please write the code for finding the missing
// number
//--------------------------------------------------------------------------------//


const findMissingNumber = (nums) => {

// sorting an array to find missing number
  nums.sort((a,b) => a - b);
 
  const n = nums.length;
  
   if(nums[n-1] !== 100){
       return 100;
  }
  if(nums[0] !== 1){
      return 1;
  }
  
  for(let i = 0; i < n-1; i++){
      if(nums[i+1] - nums[i] !== 1){
          return nums[i] + 1;
      }
  }
return -1;
}
const nums = [1,2,3,4,5,6,7,8]; 
console.log(findMissingNumber(nums))