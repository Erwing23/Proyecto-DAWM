
// Fondos
let CellBase = document.getElementsByClassName("CellBase")[0];

let wallpapers = document.getElementsByClassName("ContainerWallpaper");
let wall1 = wallpapers[0];
let wall2 = wallpapers[1];
let wall3 = wallpapers[2];
let wall4 = wallpapers[3];
let wall5 = wallpapers[4];
let  fondo1 = () =>{
    CellBase.style.backgroundImage = "url('./media/CellBase.png'), url('./media/wallpaper1.jpg')"; 
  }
  let  fondo2 = () =>{
    CellBase.style.backgroundImage = "url('./media/CellBase.png'), url('./media/wallpaper2.jpg')"; 
  }
  let  fondo3 = () =>{
    CellBase.style.backgroundImage = "url('./media/CellBase.png'), url('./media/wallpaper3.jpg')"; 
  }
  let  fondo4 = () =>{
    CellBase.style.backgroundImage = "url('./media/CellBase.png'), url('./media/wallpaper4.jpg')"; 
  }
  let  fondo5 = () =>{
    CellBase.style.backgroundImage = "url('./media/CellBase.png'), url('./media/wallpaper5.jpg')"; 
  }
wall1.addEventListener("click" , fondo1);

wall2.addEventListener("click" , fondo2);

wall3.addEventListener("click" , fondo3);

wall4.addEventListener("click" , fondo4);

wall5.addEventListener("click" , fondo5);
