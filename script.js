let cart=JSON.parse(localStorage.getItem("cart"))||[];
function addToCart(n,p){cart.push({name:n,price:p});localStorage.setItem("cart",JSON.stringify(cart));alert("Додано");}
function loadCart(){let l=document.getElementById("cart"),t=0;cart.forEach(i=>{let li=document.createElement("li");li.textContent=i.name+" — "+i.price+" грн";l.appendChild(li);t+=i.price});document.getElementById("total").textContent="Разом: "+t+" грн";}
if(document.getElementById("cart"))loadCart();