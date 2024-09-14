const drinks = 
{
    'matcha' : 15,
    'coffee' : 25,
    'pinocchio' : 40,
    'milk' : 25,
    'espresso' : 20,
    'cappuccino' : 35,
    'latte' : 30,
    'mocha' : 35,
    'americano' : 35,
    'affogato' : 30
};



const size = 
{
    small : 0.5,
    medium : 1,
    big : 1.5
};



export class Customer
{
    constructor()
    {
        this.drinks = [];
    }


    // Gọi đồ uống
    addDrinks(drink, sizeOfDrink = 'medium', k = 1)
    {
        if (!(drink in drinks))
        {
            console.log(`Món đồ uống ${drink} không tồn tại!`);
        }
        else if (!(sizeOfDrink in size))
        {
            console.log(`Kích cỡ ${sizeOfDrink} không hợp lệ!`);
        }
        else if (k > 10)
        {
            console.log(`Số lượt gọi món vượt quá 10. Vui lòng thử lại.`);
        }
        else
        {
            for (let i = 1; i <= k; i++)
            {
                this.drinks.push([drink, sizeOfDrink]);
            }
        }
    }


    // Tính tiền
    purchase()
    {
        let ans = 0;
        for (let [drink, sizeOfDrink] of this.drinks)
        {
            ans += drinks[drink] * size[sizeOfDrink];
        }
        console.log(`Giá tiền: ${ans}k`)
    }


    // Xuất hóa đơn
    ListOfDrinks()
    {
        let tableOfDrinks = {};
        for (let [drink, sizeOfDrink] of this.drinks)
        {
            let drinkKey = `${drink} (${sizeOfDrink})`;  // Tạo key bao gồm cả tên đồ uống và kích cỡ
            if (!(drinkKey in tableOfDrinks))
            {
                tableOfDrinks[drinkKey] = 1;
            }
            else
            {
                tableOfDrinks[drinkKey] += 1;
            }
        }
        console.log(tableOfDrinks);
    }


    // Cái này là khi khách rời đi
    cleaning()
    {
        this.drinks = [];
    }
}