console.log("well well well");
function drawer(){
    let src = "./tiles/tiles/desktop/0.png";
    draw_image(src,240,150);
}
function draw_image(src,x,y){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    make_base(src,x,y);
    function make_base(src,x,y) {
        let base_image = new Image();
        base_image.src = src;
        base_image.width=248;
        base_image.height=159;
        base_image.onload = function () {
            context.drawImage(base_image, x, y);
        }
    }

}

function start_game(){
    fetch('./maps/intro/intro_C9857A5B1326861719.json')
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
                let n = String(code[i]);
                if (n=="A"){
                    n=10;
                }
                if (n=="B"){
                    n=11;
                }
                if (n=="C"){
                    n=12;
                }
                n--;
                let p=`./tiles/tiles/desktop/${n}.png`;
                let x= 0;
                let y = 0;
                let disy = 139;
                let disx = 237;
                if (i == 1){
                    x=disx;
                    y=0;
                }
                if (i == 2){
                    x=0;
                    y=disy;
                }
                if (i == 3){
                    x=disx;
                    y=disy;
                }
                if (i == 4){
                    x=0;
                    y=2*disy;
                }
                if (i == 5){
                    x=disx;
                    y=2*disy;
                }


                draw_image(p,x,y);

            }

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}