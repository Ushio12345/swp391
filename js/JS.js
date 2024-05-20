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

// Function to update modal content based on selected tab
function updateModalContent(tabId) {
    var modalTitle = document.querySelector(".modal-title");
    var addButton = document.querySelector('.modal-body button[data-action="add"]');
    var updateButton = document.querySelector('.modal-body button[data-action="update"]');
    var modalBody = document.querySelector(".modal-body");

    // Clear modal body content
    modalBody.innerHTML = "";

    // Update modal content based on tab
    switch (tabId) {
        case "dsAdmin":
            modalTitle.textContent = "Thông tin Admin";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idAdmin" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenAdmin" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailAdmin" class="form-control" placeholder="Nhập Email" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtAdmin" class="form-control" placeholder="Nhập SĐT" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addAdmin()" class="btn btn-success">Thêm</button>
            `;
            break;
        // co so
        case "dsCoSo":
            modalTitle.textContent = "Thông tin cơ sở";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idCoSo" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên cơ sở</label>
                    <input id="tenAdmin" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Địa chỉ</label>
                    <input id="addressCoso" class="form-control" placeholder="Nhập địa chỉ" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailCoSo" class="form-control" placeholder="Nhập Email" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Giờ hoạt động</label>
                    <input id="time" class="form-control" placeholder="Nhập giờ" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addAdmin()" class="btn btn-success">Thêm</button>
            `;
            break;
        // chủ sân
        case "dsChuSan":
            modalTitle.textContent = "Thông tin chủ sân";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idChuSan" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenChuSan" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailChuSan" class="form-control" placeholder="Nhập Email" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtChuSan" class="form-control" placeholder="Nhập SĐT" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addChuSan()" class="btn btn-success">Thêm</button>
            `;
            break;

        // khách hàng
        case "dsKhachHang":
            modalTitle.textContent = "Thông tin khách hàng";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idKH" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenKH" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailKH" class="form-control" placeholder="Nhập Email" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtKH" class="form-control" placeholder="Nhập SĐT" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addKH()" class="btn btn-success">Thêm</button>
            `;
            break;

        // staff
        case "dsStaff":
            modalTitle.textContent = "Thông tin khách hàng";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idStaff" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tebnStaff" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtKH" class="form-control" placeholder="Nhập SĐT" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">    
                    <label>Ca làm</label>
                  <div class="form-group">
                    <label>Chọn ca làm</label>
                    <select id="CaLam" class="form-control">
                        <option value="ca1">Ca 1: 7:00 - 15:00</option>
                        <option value="ca2">Ca 2: 15:00 - 23:00</option>
                        <option value="ca3">Ca 3: Cả 2</option>
                    </select>
                </div>
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addKH()" class="btn btn-success">Thêm</button>
            `;
            break;

        //sân yard
        case "dsCoSo":
            modalTitle.textContent = "Thông tin cơ sở";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idCoSo" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên cơ sở</label>
                    <input id="tenAdmin" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Địa chỉ</label>
                    <input id="addressCoso" class="form-control" placeholder="Nhập địa chỉ" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailCoSo" class="form-control" placeholder="Nhập Email" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Giờ hoạt động</label>
                    <input id="time" class="form-control" placeholder="Nhập giờ" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <button onclick="addAdmin()" class="btn btn-success">Thêm</button>
            `;
            break;
        // chủ sân
        case "dsSan":
            modalTitle.textContent = "Thông tin sân";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idYard" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenYard" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Giờ hoạt động</label>
                    <input id="timeLine" class="form-control" placeholder="Nhập giờ hoạt động" value="" />
                </div>
            `;
            // modalBody.innerHTML += `
            //     <div class="form-group">
            //         <label>Slot</label>
            //         <input id="location" class="form-control" placeholder="Nhập slot  theo định dạng (ví dụ Slot 1 - 10:00-20:00)"" />
            //     </div>
            // `;

            modalBody.innerHTML += `
                <button onclick="addChuSan()" class="btn btn-success">Thêm</button>
            `;
            break;
        // type booking
        case "qlTypeBokking":
            modalTitle.textContent = "Phân loại đặt sân";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idTypeBooking" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenTypeBooking" class="form-control" placeholder="Nhập tên" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <button onclick="addTypeBooking()" class="btn btn-success">Thêm</button>
            `;

        // quản lí slot
        case "qlSlot":
            modalTitle.textContent = "Slot";

            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Slot ID</label>
                    <input id="idSlot" class="form-control" placeholder="" value="1" readonly/>
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Slot</label>
                    <input type="number" id="tenSlot" class="form-control" placeholder="Nhập tên slot" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Giờ bắt đầu</label>
                    <input type="number" id="startTime" class="form-control" placeholder="Nhập giờ bắt đầu" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Giờ kết thúc</label>
                    <input type="number" id="endTime" class="form-control" placeholder="Nhập giờ kết thúc" value="" />
                </div>
            `;
            modalBody.innerHTML += `
                <button onclick="addTypeBooking()" class="btn btn-success">Thêm</button>
            `;
        // Handle other tabs if needed
        default:
            break;
    }
}

// Add event listeners to tab links
document.querySelectorAll(".nav-link").forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
        var tabId = event.target.getAttribute("href").replace("#", "");
        updateModalContent(tabId);
    });
});

// Initialize modal content based on active tab
var activeTab = document.querySelector(".nav-link.active").getAttribute("href").replace("#", "");
updateModalContent(activeTab);
