const btn = document.querySelector('button');
const modalContainer = document.querySelector(".modal-parent");
const sectionElem = document.querySelector('section');
const removeElem = document.querySelector('.X');

function removeModal(){
    // sectionElem.setAttribute("style", "filter: blur(0px);");
    sectionElem.removeAttribute("style");
    modalContainer.style.display = "none";
}

btn.addEventListener('click',function(){
    modalContainer.style.display = "block";
    sectionElem.setAttribute("style", "filter: blur(10px);");
    // console.log(modalContainer);
    // console.log(sectionElem);
})

removeElem.addEventListener("click", removeModal);
document.body.addEventListener('keyup',(e)=>{
    if (e.keyCode === 27)
        removeModal();
    
})