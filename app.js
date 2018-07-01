fetch('https://free.currencyconverterapi.com/api/v5/currencies')
  .then(response => response.json())
  .then(({results}) => {
    console.log(results)
    let currencyArray = Object.values(results);
    let selects = document.querySelectorAll('select');
    selects.forEach(select => {
      currencyArray.forEach(currency => {
      let option = document.createElement('option');
      option.value = currency.id;
      option.innerText = currency.id;
        select.appendChild(option)
      })  
    })
    
  })
  .catch(console.log)





function Get(whateverUrl){
        const Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",whateverUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }


     document.getElementById("convert").addEventListener("click", () => {
      let currencyA = currency1.value;
      let currencyB = currency2.value;

      let query = currencyA + '_' + currencyB;
      fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`)
      .then(response => response.json())
      .then(data => {
            let rate = Object.values(data)[0].val;
            document.getElementById("result").value = rate * document.getElementById("number").value;
      })
        
    }); 