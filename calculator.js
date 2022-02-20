
var numberOfRows = 4;
 document.getElementById("button").addEventListener('click', (evt)=>
 {
     numberOfRows++;
    var container = document.getElementById("container");
    var newRow = container.insertRow(-1);
    var newCell = newRow.insertCell(0);
    newCell.className = "sims";
    var newCell2 = newRow.insertCell(1);
    newCell2.className = "sims";
    newCell.innerHTML = "Activity"+numberOfRows;
    newCell2.innerHTML = "A"+numberOfRows;
    var newCell3 = newRow.insertCell(2);
    newCell3.className = "sims";
    var input = document.createElement("input");
    input.type = "number";
    input.name = "w";
    input.style.width = "35px";
    input.style.height = "20px";
    input.style.paddingRight = "10px"
    newCell3.appendChild(input);
    var newCell4 = newRow.insertCell(3);
    newCell4.className = "sims";
    var input1 = document.createElement("input");
    input1.type = "number";
    input1.name = "g";
    input1.id = "g"+numberOfRows;
    input1.style.width = "35px";
    input1.style.height = "20px";
    input1.style.paddingRight = "10px"
    newCell4.appendChild(input1);
    var textNode = document.createTextNode("/");
    newCell4.appendChild(textNode);
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.name = "g"+numberOfRows+"g";
    input2.className = "gg"
    input2.style.width = "35px";
    input2.style.height = "20px";
    input2.style.paddingRight = "10px"
    newCell4.appendChild(input2);
    var newCell5 = newRow.insertCell(4);
    newCell5.className = "sims";
    var div = document.createElement("div");
    newCell5.appendChild(div);   

    document.getElementsByName("g"+numberOfRows+"g")[0].addEventListener('keyup', (evt)=>{
        var b = document.getElementsByName("g"+numberOfRows+"g");
        var c = b[0].value;
        var x = document.getElementById("g"+numberOfRows).value;
        var perc = (x/c)*100;
        var perc1 = parseFloat(perc).toFixed(2);
        div.innerHTML = perc1+"%";
    
    
    });
    document.getElementsByName("g"+numberOfRows+"g")[0].addEventListener('click', (evt)=>{
        var b = document.getElementsByName("g"+numberOfRows+"g");
        var c = b[0].value;
        var x = document.getElementById("g"+numberOfRows).value;
        var perc = (x/c)*100;
        var perc1 = parseFloat(perc).toFixed(2);
       div.innerHTML = perc1+"%";
    });

});

document.getElementsByName("g1g")[0].addEventListener('keyup', (evt)=>{
    var b = document.getElementsByName("g1g");
    var c = b[0].value;
    var x = document.getElementById("g1").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";


});
document.getElementsByName("g1g")[0].addEventListener('click', (evt)=>{
    var b = document.getElementsByName("g1g");
    var c = b[0].value;
    var x = document.getElementById("g1").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";
});

document.getElementsByName("g2g")[0].addEventListener('keyup', (evt)=>{
    var b = document.getElementsByName("g2g");
    var c = b[0].value;
    var x = document.getElementById("g2").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";


});
document.getElementsByName("g2g")[0].addEventListener('click', (evt)=>{
    var b = document.getElementsByName("g2g");
    var c = b[0].value;
    var x = document.getElementById("g2").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";
});

document.getElementsByName("g3g")[0].addEventListener('keyup', (evt)=>{
    var b = document.getElementsByName("g3g");
    var c = b[0].value;
    var x = document.getElementById("g3").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";


});
document.getElementsByName("g3g")[0].addEventListener('click', (evt)=>{
    var b = document.getElementsByName("g3g");
    var c = b[0].value;
    var x = document.getElementById("g3").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";
});

document.getElementsByName("g4g")[0].addEventListener('keyup', (evt)=>{
    var b = document.getElementsByName("g4g");
    var c = b[0].value;
    var x = document.getElementById("g4").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";


});
document.getElementsByName("g4g")[0].addEventListener('click', (evt)=>{
    var b = document.getElementsByName("g4g");
    var c = b[0].value;
    var x = document.getElementById("g4").value;
    var perc = (x/c)*100;
    var perc1 = parseFloat(perc).toFixed(2);
    b[1].innerHTML = perc1+"%";
});

document.getElementById("weighted").addEventListener('click', (evt)=>{
    var w = document.getElementsByName("w");
    var g = document.getElementsByName("g");
    var gg = document.getElementsByClassName("gg");
    var a = 0; var b = 0; var alert = 0;
    for(var i = 0; i < w.length;i++)
    {
        var j = 0
        if(w[i].value == ""){
            a += 0
            alert++;
        }
        else
        {
            a += parseFloat(w[i].value);
            j = parseFloat(w[i].value);
        }
        var x = 0;
        if(g[i].value == ""){
            alert++
        }
        else 
        {
            x = parseFloat(g[i].value);
        }
        var y = 1
        if(gg[i].value == "")
        {
            x = 0;
            alert++
        }
        else{
            y = parseFloat(gg[i].value);
        }

        var q = (x/y)*j;
        b += q;
    }
    var m = b/a;
    var s = document.getElementById("Result1");
    if(alert > 0){
        window.alert("There is an empty box");
    }
    s.innerHTML = m.toFixed(2);
    
    
});

document.getElementById("mean").addEventListener('click', (evt)=>{
    var g = document.getElementsByName("g");
    var gg = document.getElementsByClassName("gg");
    var a = 0;  var alert = 0; var count = 0;
    for(var i = 0; i < g.length;i++){
        var x = 0;
        var y = 1;
        if(g[i].value == ""){
            alert++
            count++;
        }
        else{
            x = parseFloat(g[i].value);
        }
        if(gg[i].value == "")
        {
            x = 0;
            alert++
        }
        else{
            var y = parseFloat(gg[i].value);
        }
        a += (x/y);
    }
    var m = a/(g.length-count);
    var s = document.getElementById("Result1");
    if(alert > 0){
        window.alert("There is an empty box");
    }
    s.innerHTML = m.toFixed(2);
})


    

