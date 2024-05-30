var order2 = [
    { id: "O001", cusId: "CU001", yard: "1", date: "27/05/2024", number: "2" ,status: "Đã check-in" },
    { id: "O002", cusId: "CU002", yard: "3", date: "28/05/2024", number: "4",status: "Chưa check-in" },
];

function renderOrder2(listOrder2) {
    var Order2Row = "";

    for (var i = 0; i < listOrder2.length; i++) {
        var order2 = listOrder2[i];
        var order2Tr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${order2.id}</td>
                <td>${order2.cusId}</td>
                <td>${order2.yard}</td>
                <td>${order2.date}</td>
                <td>${order2.number}</td>
                <td>${order2.status}</td>
                <td>
                    <button onclick="viewDetails(${admin.id})" class="btn btn-green" style="background-color: #61b14c; color: white;">Chi tiết</button>
                    <button onclick="editProduct('${order2.id}')" class="btn btn-primary">Sửa</button>
                    <button onclick="delProduct('${order2.id}')" class="btn btn-danger mr-2">Xoá</button>
                </td>
        </tr>
        `;
        Order2Row += order2Tr;
    }
    document.getElementById("tbDSOrder2").innerHTML = Order2Row;
}

renderOrder(order2);

function delProduct(id) {
    console.log("Delete product with ID:", id);
    // Implement deletion logic here
}

function editProduct(id) {
    console.log("Edit product with ID:", id);
    // Implement edit logic here
}