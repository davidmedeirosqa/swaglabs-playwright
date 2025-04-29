const { expect } = require('playwright/test') // Importa o módulo de assertions do Playwright

class LoginPage {

    constructor(page) {
        this.page = page // Inicializa a instância da página
        this.username = page.locator('#user-name') // Seletor do campo de usuário
        this.password = page.locator('[name="password"]') // Seletor do campo de senha
        this.loginButton = page.locator('.btn_action') // Seletor do botão de login
    }

    async goto(url) {
        await this.page.goto(url) // Método para navegar para uma URL
    }

    async login(username, password) {
        await this.username.fill(username) // Preenche o campo de usuário
        await this.password.fill(password) // Preenche o campo de senha
        await this.loginButton.click() // Clica no botão de login
    }
}

module.exports = { LoginPage } // Exporta a classe para ser usada em outros arquivos