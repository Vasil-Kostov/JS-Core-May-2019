function solve() {
   let addButtons = Array.from(document.getElementsByClassName("add-product"));
   let textareaElement = document.getElementsByTagName("textarea")[0];
   let shoppingCart = new Set();
   let totalPrice = 0;

   for (const button of addButtons) {
      button.addEventListener("click", () => {
         let productElement = button.parentElement.parentElement;
         let productName = productElement.getElementsByClassName("product-title")[0].textContent;
         let productPrice = productElement.getElementsByClassName("product-line-price")[0].textContent;

         shoppingCart.add(productName);
         totalPrice += Number(productPrice);
         textareaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
      });
   }

   let checkoutButton = document.getElementsByClassName("checkout")[0];
   checkoutButton.addEventListener("click", () => {
      textareaElement.textContent += `You bought ${Array.from(shoppingCart.values()).join(", ")} for ${totalPrice.toFixed(2)}.`;
      for (const button of addButtons) {
         button.disabled = true;
      }
      checkoutButton.disabled = true;
   });
}