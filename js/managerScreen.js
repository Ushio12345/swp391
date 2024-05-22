// Function to update modal content based on the selected tab
function updateModalContent(tabId) {
    var modalTitle = document.querySelector(".modal-title");
    var addButton = document.querySelector('.modal-body button[data-action="add"]');
    var updateButton = document.querySelector('.modal-body button[data-action="update"]');
    var modalBody = document.querySelector(".modal-body");

    // Clear modal body content
    modalBody.innerHTML = "";

    // Update modal content based on the tab ID
    switch (tabId) {
        case "dsAdmin":
            modalTitle.textContent = "Thông tin Admin";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idAdmin" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenAdmin" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailAdmin" class="form-control" placeholder="Nhập Email" />
                </div>
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtAdmin" class="form-control" placeholder="Nhập SĐT" />
                </div>
                <button onclick="addAdmin()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "dsCoSo":
            modalTitle.textContent = "Thông tin cơ sở";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idCoSo" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên cơ sở</label>
                    <input id="tenAdmin" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Địa chỉ</label>
                    <input id="addressCoso" class="form-control" placeholder="Nhập địa chỉ" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailCoSo" class="form-control" placeholder="Nhập Email" />
                </div>
                <div class="form-group">
                    <label>Giờ hoạt động</label>
                    <input id="time" class="form-control" placeholder="Nhập giờ" />
                </div>
                <button onclick="addAdmin()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "dsChuSan":
            modalTitle.textContent = "Thông tin chủ sân";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idChuSan" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenChuSan" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailChuSan" class="form-control" placeholder="Nhập Email" />
                </div>
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtChuSan" class="form-control" placeholder="Nhập SĐT" />
                </div>
                <button onclick="addChuSan()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "dsKhachHang":
            modalTitle.textContent = "Thông tin khách hàng";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idKH" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenKH" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input id="emailKH" class="form-control" placeholder="Nhập Email" />
                </div>
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtKH" class="form-control" placeholder="Nhập SĐT" />
                </div>
                <button onclick="addKH()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "dsStaff":
            modalTitle.textContent = "Thông tin khách hàng";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idStaff" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenStaff" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input id="sdtStaff" class="form-control" placeholder="Nhập SĐT" />
                </div>
                <div class="form-group">
                    <label>Ca làm</label>
                    <select id="CaLam" class="form-control">
                        <option value="ca1">Ca 1: 7:00 - 15:00</option>
                        <option value="ca2">Ca 2: 15:00 - 23:00</option>
                        <option value="ca3">Ca 3: Cả 2</option>
                    </select>
                </div>
                <button onclick="addStaff()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "dsSan":
            modalTitle.textContent = "Thông tin sân";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idYard" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenYard" class="form-control" placeholder="Nhập tên" />
                </div>
                <div class="form-group">
                    <label>Giờ hoạt động</label>
                    <input id="timeLine" class="form-control" placeholder="Nhập giờ hoạt động" />
                </div>
                <button onclick="addYard()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "qlTypeBokking":
            modalTitle.textContent = "Phân loại đặt sân";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>ID</label>
                    <input id="idTypeBooking" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Tên</label>
                    <input id="tenTypeBooking" class="form-control" placeholder="Nhập tên" />
                </div>
                <button onclick="addTypeBooking()" class="btn btn-success">Thêm</button>
            `;
            break;
        case "qlSlot":
            modalTitle.textContent = "Slot";
            modalBody.innerHTML += `
                <div class="form-group">
                    <label>Slot ID</label>
                    <input id="idSlot" class="form-control" value="1" readonly/>
                </div>
                <div class="form-group">
                    <label>Slot</label>
                    <input type="number" id="tenSlot" class="form-control" placeholder="Nhập tên slot" />
                </div>
                <div class="form-group">
                    <label>Giờ bắt đầu</label>
                    <input type="number" id="startTime" class="form-control" placeholder="Nhập giờ bắt đầu" />
                </div>
                <div class="form-group">
                    <label>Giờ kết thúc</label>
                    <input type="number" id="endTime" class="form-control" placeholder="Nhập giờ kết thúc" />
                </div>
                <button onclick="addSlot()" class="btn btn-success">Thêm</button>
            `;
            break;
        default:
            break;
    }
}

document.querySelectorAll(".nav-link").forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
        var tabId = event.target.getAttribute("href").replace("#", "");
        updateModalContent(tabId);
    });
});

var activeTab = document.querySelector(".nav-link.active").getAttribute("href").replace("#", "");
updateModalContent(activeTab);
