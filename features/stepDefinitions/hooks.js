var {Before,BeforeAll,After,AfterAll} = require('cucumber');


BeforeAll(function(){

    console.log("Inside BeforeAll Hook");

});

AfterAll(function(){

    console.log("Inside AfterAll Hook");

});


Before("not @dev",function(){

    console.log("Inside Before Hook");
 
});

After("not @dev",function(){

    console.log("Inside After Hook");

});