var san1 = [
    { id: "Y001", slot: "7:00-8:00", facility: "Quận 9" },
    { id: "Y002", slot: "8:00-9:00", facility: "Quận 2" },
];

function renderSan1(listSan1) {
    var San1Row = "";

    for (var i = 0; i < listSan1.length; i++) {
        var san1 = listSan1r[i];
        var san1Tr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${san1.id}</td>
                <td>${san1.cusId}</td>
                <td>${san1.yard}</td>
                <td>${san1.session}</td>
                <td>${san1.status}</td>
                <td>
                    <button onclick="viewDetails(${admin.id})" class="btn btn-green" style="background-color: #61b14c; color: white;">Chi tiết</button>
                    <button onclick="editProduct('${san1.id}')" class="btn btn-primary">Sửa</button>
                    <button onclick="delProduct('${san1.id}')" class="btn btn-danger mr-2">Xoá</button>
                </td>
                <td><i class="fa-solid fa-circle-info"></i></td>
        </tr>
        `;
        San1Row += san1Tr;
    }
    document.getElementById("tbDSSan1").innerHTML = San1Row;
}

renderOrder(san1);

function delProduct(id) {
    console.log("Delete product with ID:", id);
    // Implement deletion logic here
}

function editProduct(id) {
    console.log("Edit product with ID:", id);
    // Implement edit logic here
}