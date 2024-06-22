function cartMobile() {
    let cartList = document.getElementById("shoppingCartList");
  
    if (cartList.classList.contains("mobile-hide")) {
      cartList.classList.remove("mobile-hide");
      cartList.classList.add("show");
    } else {
      cartList.classList.remove("show");
      cartList.classList.add("mobile-hide");
    }
  }
  
  function closeCart() {
    let cartList = document.getElementById("shoppingCartList");
    cartList.classList.remove("show");
    cartList.classList.add("mobile-hide");
  }
  
  