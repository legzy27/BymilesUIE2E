var {Before,BeforeAll,After,AfterAll} = require('cucumber');


BeforeAll("@test",function(){

    console.log("Inside BeforeAll Hook");

});

AfterAll(function(){

    console.log("Inside AfterAll Hook");

});


Before(function(){

    console.log("Inside Before Hook");
 
});

After(function(){

    console.log("Inside After Hook");

});