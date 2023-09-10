//tạo các biến cho thanh search
const SearchWrapper = document.querySelector(".input-box");
const inputBox2 = SearchWrapper.querySelector("input");
const suggBox = SearchWrapper.querySelector(".autocom-box");
const searchBtn = document.querySelector(".search-icon");
//tạo biến cho phần gợi ý khi tìm kiếm
var suggestions=[];
//dùng callapi tự tạo để lấy ra những mục gợi ý(từ html)
fetch('https://64a95f268b9afaf4844a98bb.mockapi.io/Suggestions')
.then(response => response.json())
.then(json => suggestions = json)
//tạo chuỗi lệnh thực hiện khi nhập từ cần tìm vào phần input của thanh search
inputBox2.onkeyup = (e) => {
    //lấy giá trị nhập từ input của thanh search
    let userData = e.target.value;
    //khởi tạo mục gợi ý trùng theo giá trị nhập trong input(lúc đầu mục gợi ý sẽ rỗng, sau đó sẽ code để hiển thị các mục gợi ý trùng với giá trị nhập sau)
    let emptyArray = [];
    if(userData){
        //lọc và trả về những mục gợi ý trùng với giá trị nhập
        emptyArray = suggestions.filter((data) =>{
            //dùng tolocalelowercase để khi lọc giá trị thì sẽ không bị lỗi vì mỗi kí tự là 1 dạng mã hóa khác nên theo máy tính thì chữ in sẽ khác chữ thường
            return data.Name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        //trả về mục gợi ý phù hợp và in ra màn hình dạng <li></li>
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data.Name +'</li>';
        });
        console.log(emptyArray);
        //thêm class active để kích hoạt những tính năng css đã code từ trước
        SearchWrapper.classList.add("active");
        //tạo hàm showSuggestions và áp dụng cho biến emptyArray
        showSuggestions(emptyArray);
        //khởi tạo biến để dùng cho phần tự động điền nốt sau khi chọn vào mục cần tìm(như google)
        let allList = suggBox.querySelectorAll("li");
        for(let i = 0 ; i < allList.length ; i++){
            //sử dụng hàm tự tạo select() để khi chọn được mục gợi ý cần tìm thì tự động ẩn hết mục gợi ý còn lại
            allList[i].setAttribute("onclick","select(this)");
        }
    }
    else{
        //nếu giá trị nhập không trùng mục gợi ý thì xóa đi các tính năng làm hiện mục gợi ý từ css bằng cách xóa áp dụng class
        SearchWrapper.classList.remove("active");
    }
}
//tạo event để khi bấm vào nút kính lúp tìm kiếm thì đến trang web cần đến
searchBtn.addEventListener("click", () => {
    //nếu giá trị nhập sau khi chọn = các mục gợi ý như "Home","About",.... thì sẽ đưa đến trang web tương ứng
    if (inputBox2.value.trim() == "Home"){
        window.location.href ="../Home page/Home.html";
        //set lại giá trị input bằng rỗng để tránh trường hợp khi back lại bằng nút back của web, vẫn lưu giá trị nhập cũ
        inputBox2.value = [];
    }
    if (inputBox2.value.trim() == "About"){
        window.location.href ="../Home page/About.html";
        inputBox2.value = [];
    }
    if (inputBox2.value.trim() == "Contact"){
        window.location.href ="../Home page/Contact.html";
        inputBox2.value = [];
    }
    if (inputBox2.value.trim() == "Login"){
        window.location.href ="../signup login/signup-login.html";
        inputBox2.value = [];
    }
})
//sử dụng hàm tự tạo select() để khi chọn được mục gợi ý cần tìm thì tự động ẩn hết mục gợi ý còn lại
function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
    inputBox2.value = selectUserData;
    SearchWrapper.classList.remove("active");
}
//tạo hàm showSuggestions và áp dụng cho chuỗi lệnh chính
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox2.value;
        listData = '<li>'+ userData +'</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}