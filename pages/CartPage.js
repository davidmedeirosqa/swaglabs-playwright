const { expect } = require('playwright/test')

class CartPage {
    constructor(page) {
        this.page = page
        this.quantity = page.locator('div.cart_quantity_label')
        this.description = page.locator('div.cart_desc_label')
        this.tituloProdutoCarrinho = page.locator('[data-test="inventory-item-name"]')
        this.precoProdutoCarrinho = page.locator('[data-test="inventory-item-price"]')
        this.buttonCheckout = page.locator('#checkout')
    }

    async verificarPaginaCarrinho() {
        await expect(this.page).toHaveURL(/.*cart.html/)
        await expect(this.quantity).toHaveText('QTY')
        await expect(this.description).toHaveText('Description')
    }

    async verificarTituloPrecoProdutoCarrinho(tituloProduto, precoProduto) {
        await expect(this.tituloProdutoCarrinho).toHaveText(tituloProduto)
        await expect(this.precoProdutoCarrinho).toHaveText(precoProduto)
    }

    async clickCheckout() {
        await this.buttonCheckout.click()
    }
}

module.exports = { CartPage }