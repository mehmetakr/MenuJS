
 import menu from "./database.js"

const menuContainer =document.getElementById("menucontainer");

const  filterbutton =document.querySelectorAll(".filter-btn")
 /* 
 Databaseden gelen menu dizisini array metodu dönecez 
 diziden dönen her bir veri için ekrana bir eleman bastırılacak

 Map metodu döndürdüğü her elemana  disarıya döndürdüğü itemı aktarır

 */
console.log("merabaaaa")

/* Sayfa yükleniği anda fonksiyonları caliştırmak ıcın  */

document.addEventListener('DOMContentLoaded' ,()=>{

displayMenu(menu)

})

// Sayfaya yuklendıgı anda fonksıyonları calıstırmak ıcın 
function displayMenu(menuItems) {


     const titles = menuItems.map((menuItem)=> `<div class="d-flex align-items-center gap-3 flex-column flex-md-row  my-2" id="card">

     <img src=${menuItem.img} alt="" id="image" class="rounded shadow">
<div>
     <div class="d-flex justify-content-between">
         <h5>${menuItem.title}</h5>
         <p>${menuItem.price} ₺</p>

         <div>
             <p class="lead">
           ${menuItem.desc}
                 </p>

     </div>
 </div>
`)


dispMenu =dispMenu.join('')
menuContainer.innerHTML=dispMenu
}


//Filtreleme işlemi yapan butonları foreach ile dönuyor

 // forEach kullanılıyor çünkü map metodu sadece dizilerde kullanilir
filterbutton.forEach((button)=>{

// Her bir butona bir olay dinleyicisi ekleniyor

 button.addEventListener("click", (e)=>{

    // htmde verdigimiz dataset özelliği sayesinde elemanı te
const category =e.target.dataset.id

seacrhcategory(category)

 })

});


function seacrhcategory(categoryInfo)
{
   const filteredMenu = menu.filter((menuItem)=>{

if (categoryInfo===menuItem.category) 

    return menuItem
    
})


if (categoryInfo==='all') {
    displayMenu(menu)
}
displayMenu(filteredMenu)

}
 
