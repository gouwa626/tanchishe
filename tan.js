/**
 * Created by gouwa on 2018/5/26.
 */

//���ɸ���
function gezi() {
    for (var y = 1; y < 25; y++) {
        var dy = "<div id = 'd" + y + "'></div>"
        $("#huabu").append(dy);
        for (var i = 0; i < 24; i++) {
            //����һ���е�div
            var dx = "<div class='ge'></div>"
            $("#d" + y + "").append(dx);
        }

    }
}
gezi();
//����ʳ��λ���������
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
//���ɳ��ӳ���Ϊ3
function shuzu(){
//ˢ�³���
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
//��¼ͷ�����ڵ�λ��
var hx = $(".head").index()+1;
var hy = $(".head").parent().index()+1;
console.log(hx,hy);

var timer = null;
var fx = 3;
//�Եĺ���
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


//�������ƺ���
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

//�������ƺ���
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
//�������ƺ���
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

//�������ƺ���
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
    //��ò��жϼ��̺�

    switch (e.keyCode) {
        case 37://��
            if (!(fx==2)) {
                moveleft();
                console.log(fx);
            }else{
                console.log("�����������ƶ�");
            }

            break;
        case 38://��
            if (!(fx==3)) {
                moveup();
            }
            break;
        case 39://��
            if (!(fx==4)) {
                moveright();
            }
            break;
        case 40://��
            console.log(fx);
            if (!(fx==1)) {
                movedown();
            }
            break;


    }
}

