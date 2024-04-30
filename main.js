



  function AddingToCart(){
    DoneOb.innerHTML +=this.parentElement;
  }


  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show-sidebar');
  }
  
  
  let deletePost = (e) => {
    e.parentElement.remove();
  };