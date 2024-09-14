import { Cafe } from "./cafe.js";

// Tạo tiệm cafe
let cafe = new Cafe(4);  // Sửa cú pháp để khởi tạo đúng đối tượng

let customer1 = cafe.getTable(1);  // Truy xuất bàn số 1
customer1.addDrinks('cappuccino', 'medium', 3);  // Sửa cú pháp
customer1.ListOfDrinks();
customer1.cleaning()
customer1.ListOfDrinks();
