document.getElementById("getdata").addEventListener("click", getiss)

function getiss(){
    
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((res) => res.json())
    .then((data) =>{

        let lat = data.latitude
        let longi = data.longitude
        let output = ""
        output += `
            <p>Latitude: ${lat} Longitude: ${longi}</p>
            <img id="map" src='https://maps.locationiq.com/v2/staticmap?key=pk.ff67f232b80b13ea94296e55d23d6265&size=600x360&center=0,0&zoom=0&markers=icon:small-red-cutout|${lat},${longi}'/>
            
        `
        revGeo(lat, longi)
        document.getElementById("location").innerHTML = output
       console.log(data)


    })
}

function revGeo(a,b){
    
    fetch("https://us1.locationiq.com/v1/reverse.php?key=pk.ff67f232b80b13ea94296e55d23d6265&lat="+a+"&lon="+b+"&format=json")
    .then((res)=> res.json())
    .then((data)=>{
        let out=""
        if(data.address !== undefined){
            out = `
            <h3>Address:</h3>
            <p>State: ${data.address.state} Country: ${data.address.country}</p>
        `
        }
        console.log(data)
        
        document.getElementById("address").innerHTML = out

    })
}
