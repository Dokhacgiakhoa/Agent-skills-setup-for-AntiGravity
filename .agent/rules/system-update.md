---
trigger: model_decision
description: "Khi người dùng hỏi về cập nhật, phiên bản, hoặc nâng cấp của gói agent-skills-setup-for-antigravity."
---

# SYSTEM-UPDATE.MD - Version Control Protocol

> **Mục tiêu**: Đảm bảo tính nhất quán tuyệt đối về phiên bản trên toàn bộ hệ thống.

---

## 🚫 1. ZERO-DRIFT POLICY (Chính sách Không lệch)

Khi người dùng yêu cầu "update", "nâng cấp", hoặc "đẩy phiên bản mới", Agent **BẮT BUỘC** phải cập nhật đồng bộ các file sau cùng một lúc:

1.  **`package.json`**: Trường `version`.
2.  **`README.md`**:
    *   Header: `### *Advanced Edition • vX.Y.Z Meta-Engine*`
    *   Section: `## ✨ The Premium Edge (vX.Y.Z)`
3.  **`README.vi.md`**:
    *   Header: `### *Phiên bản Nâng cao • vX.Y.Z Meta-Engine*`
    *   Section: `## ✨ Điểm khác biệt (Phiên bản vX.Y.Z)`
4.  **`docs/MASTER_OPERATIONS.md`**: Line `**Version**: X.Y.Z`
5.  **`docs/MASTER_OPERATIONS.vi.md`**: Line `**Version**: X.Y.Z`

**TUYỆT ĐỐI KHÔNG** cập nhật lẻ tẻ. Một phiên bản được coi là "hợp lệ" chỉ khi tất cả các file trên khớp nhau 100%.

---

## 🛠️ 2. AUTOMATION TOOL (Công cụ Tự động)

Để tránh sai sót do con người (hoặc AI), hãy sử dụng script đã được chuẩn bị sẵn:

```bash
node scripts/bump.js <new-version>
# Ví dụ: node scripts/bump.js 4.1.9
```

Script này sẽ tự động tìm và thay thế tất cả các vị trí cần thiết.

---

## 🚀 3. PUBLISHING CHECKLIST

Sau khi bump version, quy trình chuẩn để phát hành là:

1.  **Commit**: `git commit -m "chore: release vX.Y.Z"`
2.  **Tag**: `git tag vX.Y.Z`
3.  **Push Code**: `git push`
4.  **Push Tag**: `git push origin vX.Y.Z` (Kích hoạt CI/CD & GitHub Release)

---

## 4. HUMAN-IN-THE-LOOP PROTOCOL (QUAN TRỌNG)

> **Mệnh lệnh tối cao**: Tuyệt đối **KHÔNG** tự động đẩy version mới (git tag / npm publish) nếu chưa có hiệu lệnh rõ ràng từ User.

1.  **Chế độ chờ**: Khi hoàn thành code, chỉ chạy test và báo cáo.
2.  **Xin phép**: Hỏi "Bạn có muốn tôi release phiên bản mới (vX.Y.Z) không?".
3.  **Thực thi**: Chỉ chạy `scripts/bump.js` và các lệnh git khi User trả lời "OK", "Push đi", "Duyệt".

---

> **Lưu ý**: Nếu người dùng phàn nàn về version cũ/mới, hãy kiểm tra ngay 5 file trong danh sách trên đầu tiên.
