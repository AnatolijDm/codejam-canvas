"use strict"

let isEnabled = true;

document.querySelector('.draw').addEventListener('click', function() {
    if (isEnabled) {
        var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json")
        .then(resp => resp.json())
        .then(data => {
            for(let i=0; i < data.length; i++) {
                for(let j=0; j < data[i].length; j++) {
                    ctx.fillStyle = `#${data[i][j]}`;
                    ctx.fillRect(i*64, j*64, 64, 64);
                }
            }
        })  
    };
}
})

document.querySelector('.draw1').addEventListener('click', function() {
    if (isEnabled) {
        var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json")
        .then(resp => resp.json())
        .then(data => {
            for(let i=0; i < data.length; i++) {
                for(let j=0; j < data[i].length; j++) {
                    ctx.fillStyle = `rgba(${data[i][j]})`;
                    ctx.fillRect(i*8, j*8, 8, 8);
                }
            }
        })  
    };
}
})

document.querySelector('.image').addEventListener('click', function() {
    if (isEnabled) {
        var canvas = document.getElementById('canvas');
        var img = new Image();
        img.src = "./asset/images/image.png";
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);  
    };
})