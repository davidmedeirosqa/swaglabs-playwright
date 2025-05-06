const { test, expect } = require('playwright/test')  // Importa módulos do Playwright para testes
const { lerCsv } = require('../utils/lerCsv')  // Importa a função lerCsv do módulo local '../utils/lerCsv'
const { LoginPage } = require('../pages/LoginPage')  // Importa classe LoginPage
const { InventoryPage } = require('../pages/InventoryPage')  // Importa classe InventoryPage
const { InventoryItemPage } = require('../pages/InventoryItemPage')  // Importa classe InventoryItemPage

// Carrega os dados do arquivo CSV especificado e armazena na variável 'registros'
const registros = lerCsv('C:/Iterasys-projects/swaglabs144/fixtures/csv/massaProdutos.csv')


for (const { user, password, sku, tituloProduto, precoProduto } of registros) {
    test(`Fluxo de compra da ${tituloProduto} - Page Object`, async ({ page }) => {  // Define caso de teste
        const loginPage = new LoginPage(page)  // Instancia LoginPage
        const inventoryPage = new InventoryPage(page)  // Instancia InventoryPage
        const inventoryItemPage = new InventoryItemPage(page)  // Instancia InventoryItemPage

        await loginPage.goto('https://www.saucedemo.com/')  // Navega para URL de login
        await loginPage.login(user, password)  // Executa login com credenciais
        await inventoryPage.verificarInventoryPage()  // Valida página de inventário
        await inventoryPage.clicarProduto(sku)  // Clica no item mochila
        await inventoryItemPage.verificarInventoryItemPage()  // Valida página do item
        await inventoryItemPage.verificarTituloPrecoProduto(tituloProduto, precoProduto)  // Valida título e preço do produto
    })
}