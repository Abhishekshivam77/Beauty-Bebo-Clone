

window.addEventListener("load",()=>{
    let sum =0;
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    for(let i=0;i<cartData.length;i++){
        sum += cartData[i].price * 79;
    }
    localStorage.setItem("sum",sum);
    document.getElementById("cart").innerText = `My cart - ₹${sum}`;
})



