document.getElementById("getdata").addEventListener("click", getiss)

function getiss(){
    
    fetch("http://api.open-notify.org/iss-now.json")
    .then((res) => res.json())
    .then((data) =>{

        let lat = data.iss_position.latitude
        let longi = data.iss_position.longitude
        let output = ""
        output += `
            <p>Latitude: ${data.iss_position.latitude} Longitude: ${data.iss_position.longitude}</p>
            <img src='https://maps.locationiq.com/v2/staticmap?key=pk.ff67f232b80b13ea94296e55d23d6265&size=720x480&center=0,0&zoom=0&markers=icon:small-red-cutout|${lat},${longi}'/>
            
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
