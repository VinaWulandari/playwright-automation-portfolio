class InventoryPage {

constructor(page){
this.page = page
this.addBackpack = '#add-to-cart-sauce-labs-backpack'
this.cartIcon = '.shopping_cart_link'
}

async addItemToCart(){
await this.page.click(this.addBackpack)
}

async goToCart(){
await this.page.click(this.cartIcon)
}

}

module.exports = { InventoryPage }