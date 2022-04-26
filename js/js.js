
const navBtn = document.querySelector(".nav-btn i");
let navItem = document.querySelector(".nav-item");
let bollem = true;

  navBtn.addEventListener('click',(e) =>{
    console.log(e.target.className);
    navItem.classList.add("activenav");
    if(bollem){
      console.log("1");
      bollem = false
      navItem.classList.add("activeNav");
      document.querySelector("body").style.position = "fixed";
     
    } else {
      console.log("2");
      bollem = true;
      navItem.classList.remove("activeNav");
      document.querySelector("body").style.position = "";

     
    }
  });

  
function removeclass(classBtn, removeClass, className) {
  classBtn.addEventListener("click", () =>{
      removeClass.classList.remove(className);
      document.querySelector("body").style.position = "";

    })
}
removeclass(document.querySelector(".fa-times"),navItem,"activeNav");

let hover = document.querySelector(".hover");
let dropdownUl = document.querySelector(".drapdown ul");

let i = document.createElement("i");
i.classList.add("far");
i.classList.add("fa-arrow-left");
i.setAttribute("id","shopItem");
let ItemShopAttrbute =i.id;
console.log(ItemShopAttrbute);

function toggle(clickBtn,clasAdd,className,chiled,childTExt){
 
  clickBtn.addEventListener("click" , (e) =>{
  clasAdd.classList.add(className);
  chiled.appendChild(i);
  childTExt.textContent = "Servise"
  document.querySelector(".drapdown").style.left = "0"
});
  
}
let editorText = document.querySelector(".nav-respose-menu h3 .ser1");
let textEdit = document.querySelector(".nav-respose-menu h3 .ser2");
let icons= document.querySelector(".nav-respose-menu h3 .ser1 i");

toggle(hover,dropdownUl,"dropdownActive",editorText,textEdit);
let shopDetaBtn, ShopBtnDateBolem=true;
function iconToggle(IconBtn,editorIconText,textIcon,clasRemove,clasNAmeRemove){
  IconBtn.addEventListener("click", () =>{
   if(ShopBtnDateBolem){
    clasRemove.classList.remove(clasNAmeRemove);
    editorIconText.textContent = textIcon;
   console.log(clasNAmeRemove);
    document.querySelector(".nav-respose-menu h3 .ser1 i").remove();
    
   } else{
    shopDetaBtn.classList.remove("activeSHopRes");
    ShopBtnDateBolem=true;
   }
  
   })

}

 function toggleShop(ShopBtn,drapdownSHop,claasShopAdd,editText,text,childShop){
   
   ShopBtn.addEventListener("click", () =>{
    drapdownSHop.classList.add(claasShopAdd);
    editText.textContent=text;
    childShop.appendChild(i)


   })
 }
let ShopRemove = document.querySelector(".drapdownSHop");
 toggleShop(document.querySelector(".ShopBtn"),ShopRemove,"activeShop",textEdit,"SHop",editorText);
 iconToggle(i,textEdit,"Menu",dropdownUl,"dropdownActive");
 iconToggle(i,textEdit,"Menu",ShopRemove,"activeShop");

let colShopHeader = document.querySelectorAll(".colShopHeader");

colShopHeader.forEach((postDate) =>{
   postDate.addEventListener("click", (e)=>{
  e.target.parentElement.nextElementSibling.classList.add("activeSHopRes");
   shopDetaBtn = e.target.parentElement.nextElementSibling;
  console.log(shopDetaBtn);
  ShopBtnDateBolem=false;
 })
})
















