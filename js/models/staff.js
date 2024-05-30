var staffs = [
    { id: "NV1", name: "Hương", phone: "123456789", email: "Huongql@gmail.com", managerID: "1001", accountID: "S1" },
    { id: "NV2", name: "Lan", phone: "987654321", email: "Lanql@gmail.com", managerID: "1001", accountID: "S2" },
    { id: "NV3", name: "Minh", phone: "1122334455", email: "Minhql@gmail.com", managerID: "1002", accountID: "S3" },
    { id: "NV4", name: "Tú", phone: "5566778899", email: "Tuql@gmail.com", managerID: "1002", accountID: "S4" },
    { id: "NV5", name: "An", phone: "9988776655", email: "Anql@gmail.com", managerID: "1003", accountID: "S5" },
    { id: "NV6", name: "Bình", phone: "4433221100", email: "Binhql@gmail.com", managerID: "1003", accountID: "S6" },
];

function renderStaff(staffList) {
    var isStaffMng = window.location.pathname.includes("StaffManager.html");

    var tableHtml = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    ${!isStaffMng ? `<th>Thao tác</th>` : ""}
                </tr>
            </thead>
            <tbody>
    `;

    for (var i = 0; i < staffList.length; i++) {
        var staff = staffList[i];
        var trStaff = `
            <tr>
                <td>${i + 1}</td>
                <td>${staff.id}</td>
                <td>${staff.name}</td>
                <td>${staff.phone}</td>
                <td>${staff.email}</td>
                ${
                    !isStaffMng
                        ? `
                <td>
                   
                    <button onclick="editProduct('${staff.id}')" class="btn btn-primary">Sửa</button>
                     <button onclick="delProduct('${staff.id}')" class="btn btn-danger mr-2">Xoá</button>
                </td>
                `
                        : ""
                }
            </tr>
        `;
        tableHtml += trStaff;
    }

    tableHtml += `
            </tbody>
        </table>
    `;

    document.getElementById("tblStaff").innerHTML = tableHtml;
}

renderStaff(staffs);
