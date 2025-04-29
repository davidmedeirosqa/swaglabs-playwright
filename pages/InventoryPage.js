const { expect } = require('playwright/test')  // Importa o módulo de assertions do Playwright

class InventoryPage {
    constructor(page) {
        this.page = page  // Armazena a instância da página
        this.tituloSecao = page.locator('span.title')  // Localiza o título da seção
        this.mochila = page.locator('#item_4_title_link')  // Localiza o item da mochila
    }

    async verificarInventoryPage() {
        await expect(this.page).toHaveURL(/.*inventory/)  // Verifica se a URL contém 'inventory'
        await expect(this.tituloSecao).toHaveText('Products')  // Verifica se o título é 'Products'
    }

    async clicarMochila() {
        await this.mochila.click()  // Clica no item da mochila
    }
}

module.exports = { InventoryPage }  // Exporta a classe para uso externo