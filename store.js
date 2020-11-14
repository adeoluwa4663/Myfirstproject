var removeCartItembuttons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
     var button = removeCartItembuttons[i]
     button.addEventListerner('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    
     })
}
function updateCartTotal() {
var CartItemContainer = document.getElementsByClassName(cart-items)[0]
var cartRows = CartItemContainer.getElementsByClassName(cart-row)
for (var i = 0; i < cartRows.length; i++) {
    varcartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName(cart-price)[0] 
}
}