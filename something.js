
//const map = require("./maps/intro/intro_1A2B3670694207638A.json");

fetch('./maps/intro/intro_1A2B3670694207638A.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the JSON data here
        const code= data.mapCode;
        console.log(code);

        for (let i=0;i<6;i++){
            let x = String(code[i]);
            let p=`./tiles/tiles/desktop/${x}.png`;
            let sect= document.getElementById(String(i));
            let pic=document.createElement("img");
            pic.src=p;
            sect.appendChild(pic);
        }

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

