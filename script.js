let x = document.getElementById("box1");
x.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    x.innerHTML = `<h1>${r}</h1>`;
})
x.addEventListener("mouseleave",function(){
    x.innerHTML = "<h1>1</h1>";
})
let y = document.getElementById("box2");
let clr = "red";
y.addEventListener("mouseenter",function(){
    if(clr == "red"){
        y.style.backgroundColor = clr;
        clr = "green";
    }else if(clr == "green"){
        y.style.backgroundColor = clr;
        clr = "blue";
    }
    else{
        y.style.backgroundColor = clr;
        clr = "red";
    }
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor = "white";
})

let p = document.getElementById("box3");
p.addEventListener("mouseenter",function(){
    p.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
})
p.addEventListener("mouseleave",function(){
    p.style.backgroundColor = "white";
})

let q = document.getElementById("box4");
q.addEventListener("click",function(){
    x.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},255,255)`
    y.style.backgroundColor = `rgb(255,${Math.floor(Math.random()*256)},255)`
    p.style.backgroundColor = `rgb(255,255,${Math.floor(Math.random()*256)})`
})
q.addEventListener("mouseleave",function(){
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "white";
    p.style.backgroundColor = "white";
    q.style.backgroundColor = "white";
})

