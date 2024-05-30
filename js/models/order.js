var order = [
    { id: "O001", cusId: "CU001", yard: "1", session: "4" },
    { id: "O002", cusId: "CU002", yard: "3", session: "3" },
];

function renderOrder(listOrder) {
    var OrderRow = "";

    for (var i = 0; i < listOrder.length; i++) {
        var order = listOrder[i];
        var orderTr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${order.id}</td>
                <td>${order.cusId}</td>
                <td>${order.yard}</td>
                <td>${order.session}</td>
                <td>
                    
                    <button onclick="editProduct('${order.id}')" class="btn btn-primary">Xác nhận</button>
                    <button onclick="delProduct('${order.id}')" class="btn btn-danger mr-2">Hủy</button>
                </td>
                <td><i class="fa-solid fa-circle-info"></i></td>
        </tr>
        `;
        OrderRow += orderTr;
    }
    document.getElementById("tbDSOrder").innerHTML = OrderRow;
}

renderOrder(order);

function delProduct(id) {
    console.log("Delete product with ID:", id);
    // Implement deletion logic here
}

function editProduct(id) {
    console.log("Edit product with ID:", id);
    // Implement edit logic here
}