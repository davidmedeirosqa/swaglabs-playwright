const { expect } = require('playwright/test')  // Importa o módulo de assertions do Playwright

class InventoryPage {
    constructor(page) {
        this.page = page  // Armazena a instância da página
        this.tituloSecao = page.locator('span.title')  // Localiza o título da seção
        // this.mochila = page.locator('#item_4_title_link')  // Localiza o item da mochila
    }

    async verificarInventoryPage() {
        await expect(this.page).toHaveURL(/.*inventory/)  // Verifica se a URL contém 'inventory'
        await expect(this.tituloSecao).toHaveText('Products')  // Verifica se o título é 'Products'
    }

    async clicarProduto(sku) {
        // await this.mochila.click()  // Clica no item da mochila
        this.page.locator(`#item_${sku}_title_link`).click(); // Clica no elemento do produto dinâmico usando SKU (ID formatado como #item_[SKU]_title_link)
    }
}

module.exports = { InventoryPage }  // Exporta a classe para uso externo