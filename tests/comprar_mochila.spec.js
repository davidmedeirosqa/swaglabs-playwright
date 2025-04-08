// 1- Referências a Bibliotecas e Frameworks
const { test, expect } = require('playwright/test') // Importa as funções 'test' e 'expect' da biblioteca do Playwright

// 2- Funções de teste

// 2.1- Atributos/ variáveis/ objetos compartilhados entre as funções
// Aqui você pode declarar variáveis globais, como URLs, dados de teste, ou instâncias reutilizáveis


// 2.2- Funções de apoio
// Funções auxiliares que ajudam nos testes, como login, navegação, geração de dados, etc


// 2.3- Funções de teste em si
// Onde você escreve os testes com a função 'test', usando asserções com 'expect'

test('Fluxo de compra da mochila', async ({ page }) => {
    // A. Realizar acesso na página do Login

    // Acessa o site de testes da SauceDemo
    // Site alvo
    await page.goto('https://www.saucedemo.com/')

    // Preenche o campo de usuário com 'standard_user'
    await page.fill('#user-name', 'standard_user') // Seletor - Id

    // Preenche o campo de senha com 'secret_sauce'
    await page.fill('[name="password"]', 'secret_sauce') // Seletor - Name

    // Clica no botão de login
    await page.click('.btn_action') // Seletor - Class

    // Verifica se a URL atual contém "/inventory" (confirma se o login foi bem-sucedido)
    await expect(page).toHaveURL(/.*inventory/)

    // Verifica se o título da página é 'Products' após o login
    await expect(page.locator('span.title')).toHaveText('Products')

    // Aguarda 2 segundos antes de continuar (usado para fins de observação ou timing)
    await page.waitForTimeout(2000)

    // B. Página detalhes do produto

    // Clica no link do item com Id 'item_4_title_link'
    await page.click('#item_4_title_link') // Seleciona a mochila

    // Verifica se a URL é da página de detalhes do item com Id 4 (mochila)
    await expect(page).toHaveURL(/.*inventory-item.html?id=4/)

    // Verifica se o botão de voltar exibe o texto 'Back to products'
    await expect(page.locator('#back-to_products')).toHaveText('Back to products')
})