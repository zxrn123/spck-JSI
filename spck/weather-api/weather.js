//khởi tạo các biến tương ứng với các phần như input thanh tìm kiếm, thành phố, quốc gia, ....
var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var ShortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body')

//cú pháp gọi Api
async function changeWeatherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=69d539405adfac07a67d1b569961ae76`;
    let data = await fetch(apiURL).then(res => res.json())
    //nếu giá trị data == 200
    if(data.cod == 200){
        //xóa các class hide khỏi phần content
        content.classList.remove('hide')
        //gắn giá trị cho các biến ở trên thành dữ liệu từ api
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15))
        value.innerText = temp
        ShortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toLocaleString('vi')

        console.log(body)
        //điều kiện nhiệt độ để đổi background cho web
        body.setAttribute('class', 'hot')
        if(temp <= 25){
            body.setAttribute('class','warm')
        }

        if(temp <= 22){
            body.setAttribute('class','cool')
        }

        if(temp <= 19){
            body.setAttribute('class','cold')
        }
    //nếu không tìm thấy quốc gia, thành phố đã nhập
    }else{
        //thêm class hide cho content
        content.classList.add('hide')
    }
}
//tạo event khi bấm nút enter trên bàn phím sau khi nhập quốc gia/thành phố xong
search.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        let capitalSearch = search.value.trim();
        //thực hiện hàm đổi giao diện, thông tin UI ở trên
        changeWeatherUI(capitalSearch)
    }
})

// changeWeatherUI('Ha Noi')