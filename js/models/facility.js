var facility = {
    facilityID: "CS1",
    facilityName: "Sân cầu lông Thảo Nguyên",
    facilityAddress: "TP. Hồ Chí Minh",
    review: "Đẹp",
    facilityOperating: "7:00 - 23:00",
    facilityEmail: "thaonguyenBabmindton@gmail.com",
    start: 5,
};

function renderFacility(listFacility) {
    var facilityRow = "";

    for (var i = 0; i < listFacility.length; i++) {
        // Start from 0
        var facility = listFacility[i];
        var facilityTr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${facility.facilityID}</td>
                <td>${facility.facilityName}</td>
                <td>${facility.facilityAddress}</td>
                <td>${facility.facilityEmail}</td>
                <td>${facility.facilityOperating}</td>
                <td>${facility.review}</td>
                <td>${facility.start}</td>
                <td>
                    <button onclick="delProduct('${facility.facilityID}')" class="btn btn-danger mr-2">Xoá</button>
                    <button onclick="editProduct('${facility.facilityID}')" class="btn btn-primary">Sửa</button>
                </td>
        </tr>
        `;
        facilityRow += facilityTr;
    }
    document.getElementById("tblDSCoSo").innerHTML = facilityRow;
}

renderFacility([facility]);

function delProduct(id) {
    console.log("Delete product with ID:", id);
    // Implement deletion logic here
}

function editProduct(id) {
    console.log("Edit product with ID:", id);
    // Implement edit logic here
}
