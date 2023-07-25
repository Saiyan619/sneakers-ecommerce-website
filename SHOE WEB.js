 let sneaks1 = document.getElementById('bata-1');
 let sneaks2 = document.getElementById('bata-2');
 let sneaks3 = document.getElementById('bata-3');
 let sneaks4 = document.getElementById('bata-4');
 let jawns = document.getElementById('jawn');
 let cartNumber = document.getElementById('carting-no');
 let cartBtn = document.getElementById('cart-button'); 
 let cartBtnB = document.getElementById('cart-button-2'); 
//  let cartNumber = cartingNo;

sneaks1.addEventListener("click",function () {
      jawns.src = sneaks1.src; 
})

sneaks2.addEventListener("click",function () {
    jawns.src = sneaks2.src; 
})

sneaks3.addEventListener("click",function () {
    jawns.src = sneaks3.src; 
})

sneaks4.addEventListener("click",function () {
    jawns.src = sneaks4.src; 
})

let count = 0;

cartBtn.addEventListener('click',function () {
    count++;
    prompt('Want to add to cart?');
    cartNumber.textContent = count;
    setTimeout(() => {
            alert(`Added to ${cartNumber.textContent} item Cart`);
    },500);
})

//  let remove = 0;
cartBtnB.addEventListener('click',function () {
    if (count > 0) {
        count--;
    }
    cartNumber.textContent = count;
})












