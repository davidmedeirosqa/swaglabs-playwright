const { expect } = require('playwright/test')

class CompletePage {
    constructor(page) {
        this.page = page
        this.checkoutComplete = page.locator('[data-test="title"]')
        this.confirmedPurchase = page.locator('[data-test="complete-header"]')
    }

    async verificarPaginaComplete() {
        await expect(this.page).toHaveURL(/.*checkout-complete.html/)
        await expect(this.checkoutComplete).toHaveText('Checkout: Complete!')
        await expect(this.confirmedPurchase).toHaveText('Thank you for your order!')
    }
}

module.exports = { CompletePage }