var facility = {
    facilityID: "CS1",
    facilityName: "Sân cầu lông Thảo Nguyên",
    facilityAddress: "TP. Hồ Chí Minh",
    facilityWorkHour: "9h - 21h",
    facilityNumYard: "2",
    facilityReview: "5 star",
};

function renderFacility(listFacility) {
    var facilityRow = "";

    for (var i = 0; i < listFacility.length; i++) {
        var facility = listFacility[i];
        var facilityTr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${facility.facilityID}</td>
                <td>${facility.facilityName}</td>
                <td>${facility.facilityAddress}</td>
                <td>${facility.facilityWorkHour}</td>
                <td>${facility.facilityNumYard}</td>
                <td>${facility.facilityReview}</td>
                <td>
                    <button onclick="viewDetails(${
                        admin.id
                    })" class="btn btn-green" style="background-color: #61b14c; color: white;">Chi tiết</button>
                    <button onclick="editProduct('${facility.facilityID}')" class="btn btn-primary">Sửa</button>
                    <button onclick="delProduct('${facility.facilityID}')" class="btn btn-danger mr-2">Xoá</button>
                </td>
        </tr>
        `;
        facilityRow += facilityTr;
    }
    document.getElementById("tblDSCoSo2").innerHTML = facilityRow;
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
