
$(function() {
   console.log("hello js");
   initSockets();
   screens = [];
   ctxs = [];
   initScreens(8,960,150);

    // function getRndColor() {
    //     var r = 255*Math.random()|0,
    //             g = 255*Math.random()|0,
    //             b = 255*Math.random()|0;
    //     return 'rgb(' + r + ',' + g + ',' + b + ')';
    // }
    // window.setInterval(function(){

    //     ctx.clearRect(0,0,500,500);
    //     ctx.fillStyle = getRndColor();
    //     ctx.fillRect(Math.random()*500,Math.random()*500,50,50);
    //     ctx.fillStyle = "black";
    //     ctx.font = "100px serif";
    //     ctx.fillText("Hello world", 10, 100);
    //     //this update function says to update the texture in aframe
    //     component.updateTexture();
    // },100)
    


});

function initScreens(number, w, h) {
    var img=document.getElementById("image")
    for (var i = number - 1; i >= 0; i--) {
        screens[i] = document.querySelector("#screen"+i).components["canvas-material"];
        ctxs[i] = screens[i].getContext();
        ctxs[i].drawImage(img, 0,150*i,960,150,0,0,960,150)
        screens[i].updateTexture();
    }
    // body...
}

// SOCKET.IO
function initSockets(){
    socket = io.connect('http://localhost:3000');
    
    socket.on('hello', function(data) {
        console.log("Socket hello:");
        console.log(data);
        if(data.users){
            for(var i=0;i<data.users.length;i++){
                $("#container.section #content").append("<p>"+data.users[i]+ " from " + data.company+ " says hello</p>");
            }
        }
    });
}


var screenpos1 = document.querySelector('#screen1');
function setPos (x,y,z) {
  screenpos1.setAttribute('position', {
    x: x,
    y: y,
    z: z
  });
}


