---
description: Khả năng điều khiển trình duyệt Web để thu thập dữ liệu (Browser Subagent Core).
---

# BROWSER-SUBAGENT-CORE: Agent-First Vision & Web Scraping

> **Mục tiêu**: Cấp quyền cho Agent chủ động mở trình duyệt (Sandbox Chromium), phân tích cấu trúc DOM và tương tác thao tác đa điểm với thành phần tĩnh/động của máy chủ Website.

## 🛠️ Công Cụ (Tools API Integration)
Bất cứ một Sub-agent nào trong mạng lưới cũng có quyền import và gọi file `cli/tools/browser.js` để thực thi các tác vụ:

1. `init({headless})`: Khởi tạo phiên làm việc của Trình duyệt.
2. `goto(url)`: Điều hướng đến trang mục tiêu an toàn (chờ networkidle).
3. `readDOM(selector)`: Trích xuất nội dung văn bản (innerText) để phân tích, tránh quá tải Context Token khi quét Website.
4. `captureScreenshot(name)`: Chụp ảnh Website và lưu về thư mục `.agent/vision/` (Cho kịch bản cần AI Vision).
5. `type(selector, text)` và `click(selector)`: Mô phỏng hành vi của một User thực sự tương tác với DOM.

## ⚠️ Nguyên Tắc Lõi (Subagent Principles)

- **Graceful Error Handling**: Luôn luôn sử dụng `try/catch` để bắt các lỗi Timeout hoặc "Selector Not Found" từ Playwright. Báo lỗi này về lại Manager View.
- **Tiết kiệm Trí nhớ (Tokens limit)**: KHÔNG bao giờ nạp toàn bộ mã nguồn HTML `innerHTML` một cách máy móc. Hãy sử dụng hàm `readDOM` hoặc khoanh vùng bằng `CSS Selector` cụ thể.
- **Clean-up Resource**: Sau khi quét xong một luồng, Agent BẮT BUỘC gọi hàm `close()` để không gây tình trạng ngốn RAM hay mở lén tiến trình rác trên thiết bị khách hàng.
