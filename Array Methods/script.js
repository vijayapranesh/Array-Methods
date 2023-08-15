var http = new XMLHttpRequest();

http.open("GET","https://restcountries.com/v3.1/all")
http.send();

http.onload = () => {
  if (http.status === 200) {
    
    const restcountries = JSON.parse(http.response);

    console.log("RESPONSE OBJ: ", restcountries);

      const countriesInAsia = restcountries.filter((country) => {
        if(country.region === "Asia") {
          return true;
        }
      });
    console.log("COUNTRIES IN ASIA: ",countriesInAsia);

  } else {
    console.log("ERROR");
  }
};










var http = new XMLHttpRequest();

http.open("GET","https://restcountries.com/v3.1/all")
http.send();

http.onload = () => {
  if (http.status === 200) {
   
    const restcountries = JSON.parse(http.response);

    console.log("RESPONSE OBJ: ", restcountries);


    const population = restcountries.filter((country) => {
      if(country.population < 200000) {
        return true;
      }
    });
  console.log("COUNTRIES IN POPULATION: ",population);

} else {
  console.log("ERROR");
}
};








 var http = new XMLHttpRequest();
        http.open("GET","https://restcountries.com/v2/all");
        http.send();
        http.onload=function(){
            var details=JSON.parse(http.response);
           details.forEach(element => {
            console.log(element.name);
                console.log(element.flag); 
           });
        }
        







var totPop = new XMLHttpRequest();

totPop.open("GET","https://restcountries.com/v2/all");

totPop.send();

totPop.onload=function(){
    var population=JSON.parse(totPop.response);
    var totalPopulation = population.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(totalPopulation);
 
}








var http = new XMLHttpRequest();

http.open("GET","https://restcountries.com/v2/all");

http.send();

http.onload=function(){
    var dollers=JSON.parse(http.response);
   var currency = dollers.filter((country) => {
     for(let key in country.currencies){
        if(country.currencies[key].code === "USD"){
            return country;
        }
     }
   })
        console.log(currency);
    }


