
async function Brewerydata(url){
    let response = await fetch(url)
    return response.json()
}

Brewerydata('https://api.openbrewerydb.org/breweries')
   .then((res)=>{
     //console.log(res);
      for(let i of res){
       
        let insert_data = `
          <p>${'Name : '+ i.name}</p>
          <p>${'Type : '+ i.brewery_type}</p>
          <p>${'Address : ' + i.street + ',' + '\n' +i.city + ',' +'\n' + i.state}</p>
          <p>${'Postal_code- ' + i.postal_code + ',' +i.country+'.'}</p>
          <p>${'website_Url : ' + i.website_url}<p>
          <p>${'Phone-no : ' + i.phone}<p>
          
          <p>${'----------------------------------------'}</p>
        `
       // creating div element to feed data into it.

        let display_data = document.createElement('div')
        display_data.className = 'div1'
        display_data.innerHTML = insert_data;
        

        // append the collected data into Body to Display OUTPUT
        document.body.append(display_data);
       
      }
    })

  
  