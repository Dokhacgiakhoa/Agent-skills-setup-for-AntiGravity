---
trigger: model_decision
description: "When refactoring code, writing new features, checking coding standards, or analyzing code quality."
---

# CODE-QUALITY.MD - Engineering Excellence

> **Mục tiêu**: Đảm bảo mã nguồn luôn đạt chất lượng "Production-Grade" ngay từ dòng code đầu tiên.

---

## 🚫 1. Anti-Patterns (Cấm Tuyệt Đối)

1.  **Console Logs**: Không commit `console.log`, `print()` vào nhánh chính (trừ file debug tạm thời).
2.  **Magic Numbers**: Không dùng số cứng trong logic. Hãy đưa ra CONSTANT.
3.  **Any Type**: Hạn chế tối đa dùng `any` trong TypeScript. Hãy define type rõ ràng.
4.  **Long Functions**: Hàm không nên quá 50 dòng. Tách nhỏ logic.

---

## ✅ 2. Best Practices (Khuyên Dùng)

1.  **Naming Convention**:
    *   Variable/Function: `camelCase` (e.g., `userProfile`)
    *   Class/Component: `PascalCase` (e.g., `UserProfile`)
    *   Constant: `SCREAMING_SNAKE_CASE` (e.g., `MAX_RETRIES`)
    *   File: `kebab-case` (e.g., `user-profile.ts`)

2.  **Comments**:
    *   Giải thích "TẠI SAO", không giải thích "CÁI GÌ".
    *   Dùng JSDoc/DocString cho các hàm public.

3.  **Error Handling**:
    *   Luôn dùng `try/catch` cho async/await.
    *   Không nuốt lỗi (silent fail). Hãy log hoặc throw.

---

## 🧪 3. Testing Requirements

1.  **Unit Test**: Logic phức tạp phải có Unit Test đi kèm.
2.  **Coverage**: Cố gắng đạt > 80% coverage cho các module core.
