function ok() {
    let Input=document.querySelector('input').value
    console.log(Input)
    if (Input.length==0) {
        alert('ENTER COUNTRY NAME')
    }

    let countryElement = document.querySelector('.country');

    // Set the height to 500px
    countryElement.style.height = '500px';

    // let span=document.querySelector('span')

    let Cname=Input
    let API=`https://restcountries.com/v3.1/name/${Cname}?fullText=true`

    fetch(API)
    .then((res)=>{
        res.json()
        .then((result)=>{
            console.log(result)      


                        // for test
    let imgdiv=document.querySelector('.imgDiv')
    imgdiv.innerHTML=`
    <img src=${result[0].flags.svg}  alt="flag">
    <h2>${result[0].name.common}</h2>
    `

    // let uniqueCurrencies = Array.from(new Set(result[0].currencies.map(curr => curr.symbol)));

    let information=document.querySelector('.information')
    information.innerHTML = `
    <h5>capital : <span>  ${result[0].capital[0] }  </span>  </h5>
    <h5>contnent : <span> ${result[0].continents}</span>  </h5>
    <h5>population : <span> ${result[0].population} </span> </h5>
    <h5> <span>${
        result[0].currencies[Object.keys(result[0].currencies)].name
      } - ${Object.keys(result[0].currencies)[0]}</span> </h5>
    <h5>common languages : <span> ${Object.values(result[0].languages).join(', ')}</span> </h5>

    `
  
    // for test

        })


    })



}