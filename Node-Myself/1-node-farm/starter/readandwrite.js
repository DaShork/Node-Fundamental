const fs = require('fs');

// fs.readFileSync()

// Ở đây sync nghĩa là đồng bộ hay Synchronous (ngoài ra còn có 1 pb bất đồng bộ hay async)
// Hàm này sẽ nhận 2 đối số
// - Đầu tiên là đường dẫn đến file mà ta đọc và sau đó là mã hóa ký tự

// fs.readFileSync('./txt/input.txt', 'utf-8');

// ở đây ký tự mã hóa thường sẽ là utf-8 khi sử dụng chỉ tiếng anh, nếu ta không định nghĩa ký tự này
// ta sẽ nhận được 1 buffer thay vì văn bản
// khi gọi hàm này ta sẽ đọc dữ liệu từ tệp và trả về, vì vậy ta phải lưu nó vào 1 biến

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

// Kế đến để bắt đầu ghi ra 1 file khác hãy gọi 1 biến cho đầu ra, về cơ bản là sẽ viết 1 chuỗi bao gồm văn bản này vào file

// const textOut = 

// đối với es6 khi muốn chèn 1 string chúng ta sẽ cần dùng toán tử "+" ví dụ 'Đây là" + textIn
// nhung đối với template string ta sẽ chỉ cần dùng dấu backstick (kế số 1 trên bàn phím) và kèm với cú pháp ${Biến}

// const textOut = `This is what we know about quả bơ ${textIn}.`

// Về cơ bản, trong syntax ${...} ta có thể viết bất kỳ code javascript nào không chỉ đơn giản là biến

const textOut = `This is what we know about quả bơ: ${textIn}. \n Created on ${Date.now()}`;

// sau đó ghi vào file bằng hàm write

fs.writeFileSync('./txt/output.txt', textOut);
console.log('Ghi rồi nha môm'); // vì khi ghi chúng ta sẽ không biết đã thành công hay không trừ khi vào file check nên ta sẽ ghi log để kiểm tra

// h thì chạy file bằng lệnh: node <tên file> và vào file txt mới check nội dung hoi