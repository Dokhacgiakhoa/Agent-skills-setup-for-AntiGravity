const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

/**
 * 🤖 Browser Subagent Core
 * Module gốc phục vụ cho hệ thống Antigravity Agent-First
 * Hỗ trợ giao tiếp trực tiếp với DOM và Vision.
 */
class BrowserSubagent {
    constructor() {
        this.browser = null;
        this.page = null;
    }

    async init(headless = true) {
        if (!this.browser) {
            // Sử dụng Chromium core từ Playwright cho Sandbox mặc định
            this.browser = await chromium.launch({ headless });
            this.page = await this.browser.newPage();
            // Thiết lập tỷ lệ màn hình tiêu chuẩn cho Vision check
            await this.page.setViewportSize({ width: 1280, height: 800 });
        }
    }

    async goto(url) {
        await this.init();
        const response = await this.page.goto(url, { waitUntil: 'networkidle' });
        return {
            status: response.status(),
            url: this.page.url()
        };
    }

    async readDOM(selector = 'body') {
        if (!this.page) throw new Error('Trình duyệt chưa được Agent khởi tạo. Gọi goto() trước.');
        // Rút trích DOM thành văn bản thuần, lược bỏ các tag thừa
        const domContent = await this.page.$eval(selector, el => el.innerText);
        return domContent.trim();
    }

    async type(selector, text) {
        if (!this.page) throw new Error('Trình duyệt chưa được khởi tạo.');
        await this.page.fill(selector, text);
        return `✅ Đã nhập text vào [${selector}]`;
    }

    async click(selector) {
        if (!this.page) throw new Error('Trình duyệt chưa được khởi tạo.');
        await this.page.click(selector);
        await this.page.waitForLoadState('networkidle');
        return `✅ Đã tương tác click vào [${selector}]`;
    }

    async captureScreenshot(name = 'vision-check') {
        if (!this.page) throw new Error('Trình duyệt chưa được khởi tạo.');
        
        const outDir = path.join(process.cwd(), '.agent', 'vision');
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        
        const filePath = path.join(outDir, `${name}-${Date.now()}.png`);
        await this.page.screenshot({ path: filePath, fullPage: true });
        return filePath;
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
            this.page = null;
        }
    }
}

module.exports = { BrowserSubagent };
