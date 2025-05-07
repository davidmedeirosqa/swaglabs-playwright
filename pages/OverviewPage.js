const { expect } = require('playwright/test')

class OverviewPage {
    constructor(page) {
        this.page = page
        this.checkoutOverview = page.locator('[data-test="title"]')
        this.paymentInformation = page.locator('[data-test="payment-info-label"]')
        this.shippingInformation = page.locator('[data-test="shipping-info-label"]')
        this.priceTotal = page.locator('[data-test="total-info-label"]')
        this.buttonFinish = page.locator('#finish')
    }

    async verificarPaginaOverview() {
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/)
        await expect(this.checkoutOverview).toHaveText('Checkout: Overview')
        await expect(this.paymentInformation).toHaveText('Payment Information:')
        await expect(this.shippingInformation).toHaveText('Shipping Information:')
        await expect(this.priceTotal).toHaveText('Price Total')
    }

    async clickFinish() {
        await this.buttonFinish.click()
    }
}

module.exports = { OverviewPage }