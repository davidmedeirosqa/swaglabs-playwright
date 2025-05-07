const { expect } = require('playwright/test')  // Importa assertions do Playwright para validações

class InventoryItemPage {
    constructor(page) {
        this.page = page  // Armazena a instância da página atual
        this.backButton = page.locator('#back-to-products')  // Localiza botão de retorno
        this.tituloProduto = page.locator('div.inventory_details_name.large_size')  // Localiza título do produto
        this.precoProduto = page.locator('div.inventory_details_price')  // Localiza preço do produto
        this.buttonAddCart = page.locator('#add-to-cart')
        this.buttonCart = page.locator('#shopping_cart_container')
    }

    async verificarInventoryItemPage() {
        await expect(this.page).toHaveURL(/.*inventory-item/)  // Valida URL da página
        await expect(this.backButton).toHaveText('Back to products')  // Valida texto do botão
    }

    async verificarTituloPrecoProduto(tituloProduto, precoProduto) {
        await expect(this.tituloProduto).toHaveText(tituloProduto)  // Valida título do produto
        await expect(this.precoProduto).toHaveText(precoProduto)  // Valida preço do produto
    }

    async adicionarCarrinho() {
        await this.buttonAddCart.click()
    }

    async clicarCarrinho() {
        await this.buttonCart.click()
    }
}

module.exports = { InventoryItemPage }  // Exporta a classe para reutilização