import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()



document.getElementById("logoDiv").addEventListener("click",function(){
    alert("Option not available Login Manually")
})


document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})


document.getElementById("btn112").addEventListener("click" ,()=>{
    alert("Login Successful ☺")
    window.location.href = "./index.html"
})

document.getElementById("create").addEventListener("click" ,()=>{
  //  alert("Sign-Up Successful ☺")
    window.location.href = "./signup.html"
})