let saturate=document.getElementById("saturate");
let contrast=document.getElementById("contrast");
let brightness =document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let gray_scale=document.getElementById("gray_scale");
let blur=document.getElementById("blur");
let huerotate=document.getElementById("hue-rotate");
let dowmload=document.getElementById("download");
let upload=document.getElementById("upload");
let reset=document.querySelector("span");
let img_box=document.querySelector(".img_box");
let img=document.getElementById("img");
window.onload=function(){

dowmload.style.display='none';
reset.style.display='none';

}
upload.onchange=function(){
    resetway();
    dowmload.style.display='block';
    reset.style.display='block';
    
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]);

     file.onload= function() {
         img.src = file.result;
     }
    }

     let filters=document.querySelectorAll(' ul li input');
     filters.forEach( filter =>{
        filter.addEventListener('input' , function(){
            img.style.filter=`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${gray_scale.value})
            Blur(${blur.value}px)
            hue-rotate(${ huerotate.value}deg)

            `
        } 
        )
     });
     function resetway(){
           img.style.filter='none'
           saturate.value='100'
           brightness.value='100'
           contrast.value='100'
           sepia.value='0'
           gray_scale.value='0'
           blur.value='0'
           huerotate.value='0'
     };
  


       







    