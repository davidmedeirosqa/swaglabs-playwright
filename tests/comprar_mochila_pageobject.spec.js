const { test, expect } = require('playwright/test')  // Importa módulos do Playwright para testes
const { LoginPage } = require('../pages/LoginPage')  // Importa classe LoginPage
const { InventoryPage } = require('../pages/InventoryPage')  // Importa classe InventoryPage
const { InventoryItemPage } = require('../pages/InventoryItemPage')  // Importa classe InventoryItemPage

test('Fluxo de compra da mochila - Page Object', async ({ page }) => {  // Define caso de teste
    const loginPage = new LoginPage(page)  // Instancia LoginPage
    const inventoryPage = new InventoryPage(page)  // Instancia InventoryPage
    const inventoryItemPage = new InventoryItemPage(page)  // Instancia InventoryItemPage

    await loginPage.goto('https://www.saucedemo.com/')  // Navega para URL de login
    await loginPage.login('visual_user', 'secret_sauce')  // Executa login com credenciais
    await inventoryPage.verificarInventoryPage()  // Valida página de inventário
    await inventoryPage.clicarMochila()  // Clica no item mochila
    await inventoryItemPage.verificarInventoryItemPage()  // Valida página do item
    await inventoryItemPage.verificarTituloPrecoProduto('Sauce Labs Backpack', '$29.99')  // Valida título e preço do produto
})