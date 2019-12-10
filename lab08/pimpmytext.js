function ex4(){
    alert("Hello, World!");
    document.getElementById("textbox").style.fontSize = "24pt";
}

function ex5(){
    alert("Text Color Change!");
    if(document.getElementById("checkbox").checked){
        document.getElementById("textbox").style.color = "green";
        document.getElementById("textbox").style.textDecoration = "underline";
        document.getElementById("textbox").style.fontWeight = "bold";
    }
    else{
        document.getElementById("textbox").style.color = "black";
        document.getElementById("textbox").style.textDecoration = "none";
        document.getElementById("textbox").style.fontWeight = "normal";
    }
}

function ex6(){
    var str = document.getElementById("textbox").value;
    str = str.toUpperCase();
    var a = str.split(".");
    str = a.join("-izzle");
    document.getElementById("textbox").value = str;
}


window.onload = function(){
    document.getElementById("textbox").style.fontSize = "12pt";
    document.getElementById("pimpin").onclick = ex7_2;
    document.getElementById("checkbox").onchange = ex9;
    document.getElementById("snoopify").onclick = ex6;
    document.getElementById("pig").onclick = ex9_2;
    document.getElementById("Malkovitch").onclick = ex9_3;
}
function ex7(){
    var size = document.getElementById("textbox").style.fontSize;
    size = parseInt(size) + 2;
    document.getElementById("textbox").style.fontSize = size+"pt";
}

function ex7_2(){
    setInterval(ex7, 500);
}

function ex9(){
    if(document.getElementById("checkbox").checked){
        document.body.style.backgroundImage = "url('https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/8/hundred.jpg')";
    }
    else{
        document.body.style.backgroundImage = "none";
    }
}

function ex9_2(){
    var str = document.getElementById("textbox").value;
    var point = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||
        str[i] == 'o' || str[i] =='u'){
            break;
        }
        else{
            point ++;
        }
    }
    var front_str = str.substr(0,point);
    var back_str = str.substr(point,str.length);
    document.getElementById("textbox").value = back_str + front_str + "ay";
}

function ex9_3(){
    var str = document.getElementById("textbox").value;
    if(str.length >= 5){
        var str = document.getElementById("textbox").value = "Malkovich"; 
    }
}