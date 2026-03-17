class CartPage {

constructor(page){
this.page = page
this.cartIcon = '.shopping_cart_link'
this.checkoutButton = '#checkout'
}

async goToCart(){
await this.page.click(this.cartIcon)
}

async clickCheckout(){
await this.page.click(this.checkoutButton)
}

}

module.exports = { CartPage }