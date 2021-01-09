function checkInfo(row,col) {
    
    if (!(row >= 0 && col >= 0 && row <= 50 && col <= 50)) {
        var alertBox = document.getElementById("alert-box");
        alertBox.textContent = "(*) Input is not valid! Please try again.";
        return false;
    }
        var alertBox = document.getElementById("alert-box");
        alertBox.textContent = "(*) Input is valid!";
    
        return true;   
}
function createTable(){
    let row = document.getElementById("row").value;
    let col = document.getElementById("col").value;
    if(!checkInfo(row,col))
        return false;
    
        var result=document.getElementById("result");
        var tb=document.createElement("table");
        tb.setAttribute("border",1);
        for(let i=1;i <= parseInt(row);i++){
            var r=document.createElement("tr");
            tb.appendChild(r);

            for(let j=1;j <= parseInt(col);j++){
                var c=document.createElement("td");
                var textNode=document.createTextNode(i*j);
                c.appendChild(textNode);
                r.appendChild(c);
    }
    }
    result.appendChild(tb);
    return true;
}