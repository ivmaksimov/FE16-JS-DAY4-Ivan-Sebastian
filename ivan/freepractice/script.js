let results= document.getElementById("results");
    let books = {
        "Javascript": [{
            "title": "JS made easy",
            "price": 70
        }, {
            "title": "Javascript for Dummies",
            "price": 40
        }],
        "PHP": [{
            "title": "PHP for the People",
            "price": 1000
        }, {
            "title": "PEE H. PEE",
            "price": 1300
        }]
    }
 

    results.innerHTML= "<h2>Javascript Books:</h2>"
    for (i = 0; i < books.Javascript.length; i++) {
      results.innerHTML+=`<div><h3> ${books.Javascript[i].title} </h3><b>price:</b> ${books.Javascript[i].price} EUR</div>`;
    }

    results.innerHTML+= "<hr><h2>PHP Books:</h2>"
    for (i = 0; i < books.PHP.length; i++) {
      results.innerHTML+=`<div><h3> ${books.PHP[i].title} </h3><b>price:</b> ${books.PHP[i].price} EUR</div>`;
    }


    let mydata = JSON.parse(employees); // convert string into an object

    console.log(mydata); // prints converted object into the console
    /* Prints data from Object1 */
    // document.getElementById('results'). innerHTML += "My name is " + mydata[0].firstName + " and I am working as a " +
    //   mydata[0].jobTitleName + "<hr>";
    // /* Prints data from Object2 */
    // document.getElementById('results'). innerHTML += "My name is " + mydata[1].firstName + " and I am working as a " +
    //   mydata[1].jobTitleName + "<hr>";
    // /* Prints data from Object3 */
    // document.getElementById('results'). innerHTML += "My name is " + mydata[2].firstName + " and I am working as a " +
    //   mydata[2].jobTitleName + "<hr>";

      for (let i = 0 ; i < mydata.length ; i++) {
      document.getElementById('results'). innerHTML += `My name is ${mydata[i].firstName}  and I am working as a ${mydata[i].jobTitleName }<hr>`;
    }