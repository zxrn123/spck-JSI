//khởi tạo biến cho thanh search
let inputBox = document.querySelector(".input-box"),
            Search = document.querySelector(".search"),
            closeIcon = document.querySelector(".close-icon");
//tạo event animation kéo dài ra/thu nhỏ lại bằng cách thêm class open hoặc xóa class open(còn lại animation trong css)
        Search.addEventListener("click", () => inputBox.classList.add("open"));
        closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));