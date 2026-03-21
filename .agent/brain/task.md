# Nhật Ký Công Việc (Task Registry) - Agent First Meta

## TSK-001: Implement Core Manager View
- **Assignee**: `@frontend-specialist` (Chuyên gia Terminal/CLI UI)
- **Target**: `cli/index.js` và thư mục `cli/ui/`
- **Mô tả**: Thiết kế giao diện CLI (sử dụng chalk, boxen) hiển thị chia cột, panel thông báo Realtime Agent Status.

## TSK-002: Build Browser Sandbox & Subagent Core
- **Assignee**: `@backend-specialist` / `@ai-agents-architect`
- **Target**: `cli/skills/` hoặc Module Tools mới
- **Mô tả**: Thêm khả năng cho Agent điều khiển Chrome/Browsers, đọc DOM và chụp màn hình qua Browser Tooling.

## TSK-003: Refactor Orchestrator Routing
- **Assignee**: `@orchestrator`
- **Target**: `.agent/workflows/orchestrate.md` & `.agent/rules/`
- **Mô tả**: Đặt lại luật định tuyến, cho phép khởi tạo mạng lưới Agent đa luồng (Multi-agent swarm) chạy độc lập, báo cáo về Manager View.
