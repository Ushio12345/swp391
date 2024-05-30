const customers = [
    { id: 1, name: "Nguyễn Văn A", phone: "0123456789", email: "a@example.com" },
    { id: 2, name: "Trần Thị B", phone: "0987654321", email: "b@example.com" },
    { id: 3, name: "Lê Văn C", phone: "0112233445", email: "c@example.com" },
    { id: 4, name: "Phạm Văn D", phone: "0223344556", email: "d@example.com" },
];

function renderCustomer(listCus) {
    var cusRows = "";
    for (var i = 0; i < listCus.length; i++) {
        var cus = listCus[i];
        var cusTr = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${cus.id}</td>
                    <td>${cus.name}</td>
                    <td>${cus.phone}</td>
                    <td>${cus.email}</td>
                    <td>
                        <button onclick="editProduct(${cus.id})" class="btn btn-primary">Sửa</button>
                        <button onclick="delProduct(${cus.id})" class="btn btn-danger mr-2">Xoá</button>
                    </td>
                </tr>
                `;
        cusRows += cusTr;
    }
    document.getElementById("tbkDSKH").innerHTML = cusRows;
}

renderCustomer(customers);
