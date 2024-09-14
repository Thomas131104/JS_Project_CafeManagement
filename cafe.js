import { Customer } from "./customer.js";

export class Cafe
{
    // Khởi tạo số lượng bàn ghế trong quán
    constructor(table = 1)
    {
        this.table = table;
        this.customer = []
        for (let i = 1; i <= table; i += 1)
        {
            this.customer.push(new Customer())
        }
    }


    // Thêm bàn ghế
    addTable(number = 1)
    {
        for (let i = 1; i <= number; i+=1)
        {
            this.table += 1;
            this.customer.push(new Customer());  // Sửa cú pháp
        }
    }

    // Lấy bàn ghế
    getTable(number = 1)
    {
        return this.customer[number - 1];  // Truy xuất đúng bàn
    }


    // Cất bàn ghế
    deleteTable()
    {
        this.customer.pop()
    }
}
