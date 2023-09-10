//khởi tạo các biến cho các giá trị cần sử dụng từ html
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
//khi bấm vào nút giỏ hàng thì sẽ thêm vào class active để hiện giỏ hàng
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
//khi bấm nút close thì sẽ xóa class active để ẩn giỏ hàng
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
//khởi tạo mảng sản phẩm
let products = [
    {
        id: 1,
        name: 'Climbing Lace',
        image: '1.png',
        price: 120000
    },
    {
        id: 2,
        name: 'Climbing T-Shirt',
        image: '2.png',
        price: 250000
    },
    {
        id: 3,
        name: 'Climbing Belt',
        image: '3.png',
        price: 220000
    },
    {
        id: 4,
        name: 'Climbing Hat',
        image: '4.PNG',
        price: 100000
    },
    {
        id: 5,
        name: 'Climbing Sunglasses',
        image: '5.PNG',
        price: 180000
    },
    {
        id: 6,
        name: 'Climbing Short',
        image: '6.PNG',
        price: 250000
    }
];
//khởi tạo mảng giỏ hàng = rỗng
let listCards  = [];
//khởi tạo hàm để hiện lên các sản phẩm
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
//gọi để thực hiện hàm hiện sản phẩm
initApp();
//khởi tạo hàm thêm sản phẩm vào giỏ hàng
function addToCard(key){
    if(listCards[key] == null){
        // copy form list sản phẩm vào
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//khởi tạo hàm reload lại giỏ hàng
function reloadCard(){
    //set lại giá trị danh sách giỏ hàng = rỗng
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    //tính toán mỗi lần thêm sản phẩm vào giỏ hàng
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        //nếu giá trị khác rỗng thì sẽ làm hiện sản phẩm đã thêm
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
//khởi tạo biến tăng giảm số lượng sản phẩm trong giỏ hàng
function changeQuantity(key, quantity){
    //nếu số lượng = 0 thì xóa sản phẩm tương ứng
    if(quantity == 0){
        delete listCards[key];
    //nếu số lượng giỏ hàng >0 thì giá của sản phẩm sẽ = số lượng * giá sản phẩm
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}