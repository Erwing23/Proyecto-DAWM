
 let CellLinks = document.getElementsByClassName("CellLink");
 let optionsLink = document.getElementsByClassName("LinkOption");
 
let  crearLinkFace = () => {
    let faceLink = CellLinks[0];
    if(faceLink.style.opacity==="0"){
        faceLink.style.opacity =  "1";
    }else{
        faceLink.style.opacity =  "0";
    }

  
    
}

let  crearLinkInsta = () => {
    let faceLink = CellLinks[1];
    if(faceLink.style.opacity==="0"){
        faceLink.style.opacity =  "1";
    }else{
        faceLink.style.opacity =  "0";
    }

  
    
}



let faceOption = optionsLink[3];

let instaOption = optionsLink[8];

faceOption.addEventListener("click" , crearLinkFace);
instaOption.addEventListener("click" , crearLinkInsta);


