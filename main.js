
  function AddingToCart(){
    function addToCart(divId) {
      // Find the div element to add to cart
      var itemToAdd = document.getElementById("product");
      
      // Clone the div element
      var clonedItem = itemToAdd.cloneNode(true);
      
      // Append the cloned div to the shopping cart container
      var cart = document.getElementById('Addeditems');
      
      cart.appendChild(clonedItem);
  }
    


  }


  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show-sidebar');
  }
  
  
  let deletePost = (e) => {
    e.parentElement.remove();
  };