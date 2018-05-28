/**
 * Created by gouwa on 2018/5/26.
 */

//生成格子
function gezi() {
    for (var y = 1; y < 25; y++) {
        var dy = "<div id = 'd" + y + "'></div>"
        $("#huabu").append(dy);
        for (var i = 0; i < 24; i++) {
            //设置一行中的div
            var dx = "<div class='ge'></div>"
            $("#d" + y + "").append(dx);
        }

    }
}
gezi();
//设置食物位置随机函数
var sx = 0;
var sy = 0;
function shiwu() {
    var x = parseInt(Math.random() * 24);
    var y = parseInt(Math.random() * 24);
    $("#huabu>#d" + x + ">:nth-child(" + y + ")").addClass("shiwu");
    sx =x;
    sy = y;
    console.log(sx,sy);

}
var arr = [[15,13],[15,12],[15,11]];
window.onload = shiwu();
//生成虫子长度为3
function shuzu(){
//刷新虫子
    $(".head").removeClass("head");
    console.dir(arr);
    $("#d"+arr[0][1]+">div:nth-child("+arr[0][0]+")").addClass("head");
    $(".chongzi").removeClass("chongzi");
    for(var x = 1;x<arr.length;x++){
        for(var y=0;y<arr[x].length;y++){
            $("#d"+arr[x][y+1]+">div:nth-child("+arr[x][y]+")").addClass("chongzi");

        }

    }
}
shuzu();
//$("#d"+arr[0][0]+">div:nth-child("+arr[0][1]+")").addClass("head");
//记录头部所在的位置
var hx = $(".head").index()+1;
var hy = $(".head").parent().index()+1;
console.log(hx,hy);

var timer = null;
var fx = 3;
//吃的函数
function chi(){
    var hhx = $(".head").index()+1;
    var hhy = $(".head").parent().index()+1;
    console.log("tou"+hhx,hhy);
    if(hhx==sy&&hhy==sx){
        arr.push(sx,sy);
        $(".shiwu").removeClass("shiwu");
        shiwu();
    }
}


//设置左移函数
function moveleft(){

    clearInterval(timer);
    timer=null;
    function task(){
        shuzu();
        hx--;
        console.log(hx,hy);
        arr.unshift([hx,hy]);
        arr.pop();
        chi();
        shuzu();
        fx =4;
        //console.log(arr);
    }
    timer = setInterval(task,1000);

}

//设置右移函数
function moveright(){

    clearInterval(timer);
    timer=null;
    function task(){
        shuzu();
        hx++;
        console.log(hx,hy);
        arr.unshift([hx,hy]);
        arr.pop();
        chi();
        shuzu();
        fx =2;

    }
    timer = setInterval(task,1000);

}
//设置上移函数
function moveup(){

    clearInterval(timer);
    timer=null;
    function task(){
        shuzu();
        hy--;
        console.log(hx,hy);
        arr.unshift([hx,hy]);
        arr.pop();
        chi();
        shuzu();
        fx =1;

    }
    timer = setInterval(task,1000);

}

//设置下移函数
function movedown(){

    clearInterval(timer);
    timer=null;
    function task(){
        shuzu();
        hy++;
        console.log(hx,hy);
        arr.unshift([hx,hy]);
        arr.pop();
        shuzu();
        chi();
        fx =3;

    }
    timer = setInterval(task,1000);

}


document.onkeydown = function (e) {
    //获得并判断键盘号

    switch (e.keyCode) {
        case 37://左
            if (!(fx==2)) {
                moveleft();
                console.log(fx);
            }else{
                console.log("我正在向右移动");
            }

            break;
        case 38://上
            if (!(fx==3)) {
                moveup();
            }
            break;
        case 39://右
            if (!(fx==4)) {
                moveright();
            }
            break;
        case 40://下
            console.log(fx);
            if (!(fx==1)) {
                movedown();
            }
            break;


    }
}

