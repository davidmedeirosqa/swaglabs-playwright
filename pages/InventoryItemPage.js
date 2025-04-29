const { expect } = require('playwright/test')  // Importa assertions do Playwright para validações

class InventoryItemPage {
    constructor(page) {
        this.page = page  // Armazena a instância da página atual
        this.backButton = page.locator('#back-to-products')  // Localiza botão de retorno
        this.tituloProduto = page.locator('div.inventory_details_name.large_size')  // Localiza título do produto
        this.precoProduto = page.locator('div.inventory_details_price')  // Localiza preço do produto
    }

    async verificarInventoryItemPage() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4')  // Valida URL da página
        await expect(this.backButton).toHaveText('Back to products')  // Valida texto do botão
    }

    async verificarTituloPrecoProduto(tituloProduto, precoProduto) {
        await expect(this.tituloProduto).toHaveText(tituloProduto)  // Valida título do produto
        await expect(this.precoProduto).toHaveText(precoProduto)  // Valida preço do produto
    }
}

module.exports = { InventoryItemPage }  // Exporta a classe para reutilização