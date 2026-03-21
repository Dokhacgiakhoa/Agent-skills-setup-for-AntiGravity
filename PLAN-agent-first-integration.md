# Strategic Implementation Plan: Agent-First Integration

> [!IMPORTANT]
> Mục tiêu: Nâng cấp linh hồn của Antigravity IDE v4.2.0 sang một hệ thống Agent-First hoàn chỉnh, bám sát mô hình Google Antigravity (Gemini 3). Trọng tâm là khả năng tự trị hoàn toàn qua Browser Subagent và giao diện quản lý đa agent (Manager View).

> [!WARNING]
> Việc tích hợp Browser Subagent và refactor Orchestrator có thể gây xung đột với luồng làm việc cũ nếu không được cách ly context tốt. Cần giám sát chặt Watchdog rules.

## 1. Clear Goals (Mục Tiêu Cốt Lõi)
- **Tích hợp Browser Automation**: Cấu hình kỹ năng cho phép Agent tự động mở trình duyệt, điều hướng, và click/gõ phím để test web.
- **Phát triển Manager View (CLI Dashboard)**: Tạo bảng điều khiển Terminal hiển thị realtime trạng thái của nhiều luồng Agent.
- **Xây dựng Self-Healing Loop**: Chế độ tự động xử lý khi một tác vụ thất bại (Loki Mode / Recursive Learning).

## 2. Dependency Chains (Chuỗi Phụ Thuộc)
- **Terminal UI**: Cần thư viện vẽ giao diện command line (sẵn có `boxen`, `chalk`, có thể thêm `cli-table3` hoặc tự build bảng).
- **Core Automation**: Phụ thuộc thư viện điều khiển trình duyệt (VD: Puppeteer, Playwright, hoặc tương thích tool gọi native).
- **Quy trình Core**: Cập nhật file `.agent/workflows/orchestrate.md` và `.agent/rules/runtime-watchdog.md` để các Agent biết phối hợp với nhau thay vì giẫm chân lên nhau.

## 3. Phase-by-Phase Breakdown (Các Bước Triển Khai)

### 🔴 Phase 1: Nền tảng hiển thị - Manager View
- Nâng cấp file CLI lõi (`cli/index.js`) để hỗ trợ Mode Dashboard.
- Tạo màn hình chia các session tiến trình để theo dõi các Agent làm việc đồng thời (Multiple Agents).

### 🟡 Phase 2: Action-Oriented - Browser Subagent
- Viết Skill mới: `cli/skills/browser-automation-pro/SKILL.md` hoặc cấu hình Agent Tooling.
- Tích hợp tính năng Vision và Web Scraping cho hệ thống, đảm bảo Agent hiểu DOM.

### 🟢 Phase 3: Nâng cấp Orchestrator & Self-Healing
- Cập nhật quy trình gọi Agent chéo (Sub-agent dispatch) tại `.agent/workflows/orchestrate.md`.
- Ràng buộc cấu trúc `ERRORS.md`: Khi lỗi DOM/Trình duyệt, ghi lại để Prompt/Agent tái thực thi thông minh.

## 4. Verification Plan (Kiểm Thử & Xác Nhận)
- **Tự động (Automated)**: Chạy `npm test` trên các module Routing nội bộ của IDE.
- **Thủ công (Manual)**: Yêu cầu hệ thống thao tác với một form đăng nhập đơn giản thông qua chế độ Manager View/Browser chạy ngầm. Ghi nhận thời gian response và tỷ lệ thành công.
