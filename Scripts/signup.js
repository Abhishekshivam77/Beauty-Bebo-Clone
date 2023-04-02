import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()

document.getElementById("footer").innerHTML = footer()



document.getElementById("magic").addEventListener("click",() =>{
    document.getElementById("cart-popup").style.visibility="visible";
    });

document.getElementById("logoDiv").addEventListener("click",function(){
    alert("Option not available create Account Manually")
})

document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})

document.getElementById("but").addEventListener("click" ,()=>{
    alert("Sign-Up Successful ☺")
    window.location.href = "./login.html"
})