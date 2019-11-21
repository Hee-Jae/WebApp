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