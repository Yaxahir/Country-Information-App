function ok() {
    let Input=document.querySelector('input').value
    console.log(Input)
    if (Input.length==0) {
        alert('ENTER COUNTRY NAME')
        return
    }

    let countryElement = document.querySelector('.country');

    // Set the height to 500px
    countryElement.style.height = '520px';

    // let span=document.querySelector('span')

    let Cname=Input
    let API=`https://restcountries.com/v3.1/name/${Cname}?fullText=true`

    fetch(API)
    .then((res)=>{
        res.json()
        .then((result)=>{
            console.log(result)      
            
            let imgdiv=document.querySelector('.imgDiv')
            let inputDiv=document.querySelector('.inputDiv')
            let information=document.querySelector('.information')
            // let sumDiv=document.createElement("div")
            // sumDiv.appendChild(imgdiv,information)
        

            if ( result[0]?.name?.common.toLowerCase() !== Cname) {
                countryElement.style.height='100px'
                countryElement.style.overflow="hidden"
                inputDiv.style.paddingBottom="50px"
                alert('The country name entered is invalid. Please enter a valid country name.');
                let Input=document.querySelector('input').value=""
                
                return; // Exit the function if values don't match
            }

            

                        // for test
    imgdiv.innerHTML=`
    <img src=${result[0].flags.svg}  alt="flag">
    <h2>${result[0].name.common}</h2>
    `

    // let uniqueCurrencies = Array.from(new Set(result[0].currencies.map(curr => curr.symbol)));

    information.innerHTML = `
    <h5>capital : <span>  ${result[0].capital[0] }  </span>  </h5>
    <h5>contnent : <span> ${result[0].continents}</span>  </h5>
    <h5>population : <span> ${result[0].population} </span> </h5>
    <h5> <span>${
        result[0].currencies[Object.keys(result[0].currencies)].name
      } - ${Object.keys(result[0].currencies)[0]}</span> </h5>
    <h5>common languages : <span> ${Object.values(result[0].languages).join(', ')}</span> </h5>

    `
    

    let Input=document.querySelector('input').value=""





    
    
    
    
    // for test

 

        })

       


    })



}