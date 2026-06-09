---
description: Kiểm tra và cập nhật phiên bản Antigravity IDE
---

# /update - Hệ thống Cập nhật Tự động

Quy trình này hướng dẫn Agent cách kiểm tra và thực hiện cập nhật gói `agent-skills-setup-for-antigravity`.

## 📋 Các bước thực hiện

1. **Kiểm tra thông tin hiện tại**:
   - Đọc `version` trong `package.json` tại thư mục dự án.
   - Ghi nhớ số phiên bản này (Ví dụ: 4.0.0).

2. **Truy vấn NPM Registry**:
   // turbo
   - Chạy lệnh: `npm view agent-skills-setup-for-antigravity version`
   - Lấy kết quả đầu ra.

3. **Phân tích so sánh**:
   - Nếu `phiên bản NPM` > `phiên bản hiện tại`: Chuyển sang bước 4.
   - Nếu bằng nhau: Thông báo "Bạn đang sử dụng phiên bản mới nhất (vX.X.X)".

4. **Hành động**:
   - Gửi tin nhắn: "Đã có phiên bản mới **v[LATEST]** (bạn đang dùng **v[CURRENT]**). Bạn có muốn cập nhật ngay không?"
   - Đợi người dùng phản hồi.
   - Nếu người dùng nói "Có/Ok/Ưm":
     // turbo
     - Chạy lệnh: `npm install -g agent-skills-setup-for-antigravity@latest`
     - Thông báo thành công và nhắc người dùng chạy `antigravity-update` để đồng bộ skills (nếu cần).
   - Nếu người dùng nói "Không": Kết thúc quy trình.
