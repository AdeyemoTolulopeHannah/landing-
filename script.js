let responsive = document.querySelector('.toggle');
let view = document.querySelector('.nav ul');
let content = document.querySelector('.nav button')

responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block',
    content.style.display ='none';
    
  }
  else{
    view.style.display = 'none',
    content.style.display ='block';
  }
});