const parentElements = document.querySelectorAll(".list-yard");

parentElements.forEach((parentElement) => {
    const numberOfCards = parseInt(parentElement.closest(".yard").dataset.cards, 10);

    for (let i = 0; i < numberOfCards; i++) {
        const cardYardDiv = document.createElement("div");
        cardYardDiv.classList.add("card-yard");

        let changeLink = "bookingDetail.html";
        if (window.location.pathname.includes("Guest.html")) {
            changeLink = "login.html";
        }

        cardYardDiv.innerHTML = `
            <div class="card-yard-img">
                <img src="../img/download.jpg" alt="" />
            </div>
            <div class="card-yard-content">
                <p>Tên sân:</p>
                <p>Địa chỉ:</p>
                <p>Giá tiền:</p>
                <p>Giờ mở cửa:</p>
                <div class="stars">
                    <form action="" onsubmit="return false;">
                        <input class="star star-5" id="star-5-${parentElement.dataset.index}-${i}" type="radio" name="star-${parentElement.dataset.index}-${i}" />
                        <label class="star star-5" for="star-5-${parentElement.dataset.index}-${i}"></label>
                        <input class="star star-4" id="star-4-${parentElement.dataset.index}-${i}" type="radio" name="star-${parentElement.dataset.index}-${i}" />
                        <label class="star star-4" for="star-4-${parentElement.dataset.index}-${i}"></label>
                        <input class="star star-3" id="star-3-${parentElement.dataset.index}-${i}" type="radio" name="star-${parentElement.dataset.index}-${i}" />
                        <label class="star star-3" for="star-3-${parentElement.dataset.index}-${i}"></label>
                        <input class="star star-2" id="star-2-${parentElement.dataset.index}-${i}" type="radio" name="star-${parentElement.dataset.index}-${i}" />
                        <label class="star star-2" for="star-2-${parentElement.dataset.index}-${i}"></label>
                        <input class="star star-1" id="star-1-${parentElement.dataset.index}-${i}" type="radio" name="star-${parentElement.dataset.index}-${i}" />
                        <label class="star star-1" for="star-1-${parentElement.dataset.index}-${i}"></label>
                    </form>
                </div>
                <a href="${changeLink}">Đặt Ngay</a>
            </div>
        `;

        parentElement.appendChild(cardYardDiv);
    }
});
// hiện mật khẩu và check pas và re password
const pas = document.getElementById("password");
const rePassword = document.getElementById("re-password");
document.getElementById("lock").addEventListener("click", function (icon) {
    const type = pas.getAttribute("type") === "password" ? "text" : "password";
    pas.setAttribute("type", type);
    this.classList.toggle("fa-lock");
    this.classList.toggle("fa-eye");
});
const form = document.querySelector("#register-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const passwordValue = pas.value;
    const rePasswordValue = rePassword.value;

    if (passwordValue !== rePasswordValue) {
        document.querySelector("#wrong-repass").textContent = "Mật khẩu bạn nhập không khớp";
    } else {
        document.querySelector("#wrong-repass").innerHTML = "";
    }
});
