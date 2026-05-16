const fs = require('fs');

// để đọc 1 file theo cách
// Non-Blocking hay Asynchronous ta làm như sau

// fs.readFile('./txt/start.txt', 'utf-8', <callback> )

// thay vào đó ta sẽ thêm vào 1 hàm Call back

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => { })

// Node sẽ đọc file đc chỉ định trong nền, và ngay sau khi nó sẵn sàng,
// nó sẽ gọi hàm call back được chỉ định sau dấu phẩy
// hàm call back này gồm có 2 đối số không quan trọn tên gọi, miến đúng thứ tự với lỗi là đối 1 và dữ liệu thực tế là đối só 2
// 1 là err: lỗi 
// 2 là data: dữ liệu thực tế | lưu ý "data" là tên mà ta chỉ định, nó có thể là "text" hoặc từ khác, không quan trọng


// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);     
// });
// console.log("will read this");

// => kết quả của đoạn code trên sẽ là will read this rồi mới đến nội dung file start là "read-this"
// bởi vì khi chạy, node sẽ đọc file start ở dưới nền và thực thi tiếp dòng lệnh tiếp theo mà không cần đợi
// sau khi thực hiện và in ra will read this, node đã sẵn sàng khi đọc xong file start, từ đó bắt đầu chạy hàm call back từ đó in ra "read-this"


// Kế đến ta sẽ tiến xa hơn bằng cách lồng nhiều lệnh async với nhau


fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {                       // Biến err ở đay được dùng khi catch được lỗi ví dụ, không có file 
    if (err)                                                                    // khí đó hàm này sẽ chỉ trả về lỗi và skip qua toàn bộ các hàm được lồng bên trong nó
        return console.log('lỗi ròi em ơi');                                        
    
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {                  // hàm này sẽ phụ thuộc vào hàm 1 vì cần lấy dữ liệu từ 1 để chèn vào tên file (lưu ý sử dụng backstick)
        console.log(data2);     
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            
            fs.writeFile('./txt/final', `${data2}\n${data3}` , 'utf-8', err => {  // để ghi vào file ta sẽ tiếp tục sử dụng hàm write async, hàm này cũng sẽ nhận
                console.log("đã ghi vô ròi nha môm");                             // 1 hàm call back nhưng vì không có dữ liệu được đọc nên sẽ chỉ nhận 1 đối số là err
            })
        });
    }); 
});
console.log("will read this");

// 1 cục code như trên được gọi là call back hell
// gọi lần lượt các hàm theo số thứ tự
// khi hoạt động hàm 1 sẽ được đọc dưới nền và skip đến hàm 2
// sau đó hàm 2 sẽ được đọc dưới nền và skip đến hàm 3
// sau đó hàm 3 sẽ lại được đọc dưới nền và skip đến hàm 4
// 1 lần nữa skip hàm 4 đến console 5
// sau khi sẵn sàng thì quay lại hàm 1
// cung cấp data cho hàm 2, hàm 2 sẵn sàng, gọi đến hàm 3,
// hàm 3 khi đó sẵn sàng và gọi đến hàm 4 để ghi vào file final
//cuối cùng kết quả sẽ là
// will read this
// The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
// APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter.
// đã ghi vô ròi nha môm
// cũng không khác mấy so với khi sử dụng hàm đồng ộ nhỉ, và như ta biết khi hệ thống lớn dần, hàm đồng bộ sẽ yêu cầu hệ thống bắt người dùng đợi
// vậy khi rơi vào callback hell tất cả mọi thứ gần như quay về 0
