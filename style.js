function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }


document.addEventListener('DOMContentLoaded', function() {
    var tabNavTabs = document.querySelectorAll('.tab-nav .tab');
    
    tabNavTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var dataTab = this.getAttribute('data-tab');
            var tabContents = document.querySelectorAll('.tab-nav-content .content');

            tabContents.forEach(function(content) {
                if (content.getAttribute('data-tab') === dataTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});
