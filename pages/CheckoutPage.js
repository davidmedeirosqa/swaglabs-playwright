const { expect } = require('playwright/test')

class CheckoutPage {
    constructor(page) {
        this.page = page
        this.yourInformation = page.locator('[data-test="title"]')
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.zipCode = page.locator('#postal-code')
        this.buttonContinue = page.locator('#continue')
    }

    async verificarPaginaCheckout() {
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/)
        await expect(this.yourInformation).toHaveText('Checkout: Your Information')
    }

    async data(firstName, lastName, zipCode) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipCode.fill(zipCode)
    }

    async clickCheckout() {
        await this.buttonContinue.click()
    }

}

module.exports = { CheckoutPage }