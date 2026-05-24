# File System (FS) Module trong Node.js

Khi học JavaScript trong trình duyệt (browser),
chúng ta thường chỉ có thể thao tác với:

- HTML
- CSS
- Button
- Form
- DOM

Nhưng với Node.js,
JavaScript có thể làm được nhiều việc hơn rất nhiều như:

- Đọc file từ máy tính
- Ghi dữ liệu vào file
- Tạo server
- Làm việc với database
- Tương tác với hệ điều hành

Để làm được những việc này,
Node.js cung cấp các module.

==================================================

# Module là gì?

Có thể hiểu đơn giản:

Module là một "bộ công cụ"
chứa nhiều hàm phục vụ cho một chức năng cụ thể.

Ví dụ:

- fs -> làm việc với file
- http -> tạo server
- path -> xử lý đường dẫn
- os -> lấy thông tin hệ điều hành

Node.js được xây dựng xoay quanh hệ thống module này.

==================================================

# FS Module là gì?

fs là viết tắt của:

File System

Module này cho phép chúng ta:

- Đọc file
- Ghi file
- Tạo file
- Xóa file
- Làm việc với thư mục

==================================================

# Cách sử dụng module trong Node.js

Để sử dụng một module,
chúng ta cần:

1. Import module
2. Lưu module vào biến
3. Sử dụng các hàm bên trong module

Ví dụ:

const fs = require('fs');

==================================================

# Giải thích từng phần

## require('fs')

require() là hàm của Node.js dùng để:

- tải module
- import module vào file hiện tại

Ở đây:

- 'fs' là tên module File System

---

## const fs

const fs = require('fs');

Dòng code này có nghĩa là:

"Lấy toàn bộ công cụ từ module fs
và lưu vào biến fs"

Sau đó chúng ta có thể sử dụng:

fs.readFile()
fs.writeFile()
fs.unlink()

và rất nhiều hàm khác.
