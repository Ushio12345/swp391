var facility = {
    facilityID: "CS1",
    facilityName: "Sân cầu lông Thảo Nguyên",
    facilityAddress: "TP. Hồ Chí Minh",
    facilityOwnerID: "OW1",
    facilityOperating: "7:00 - 23:00",
    facilityEmail: "thaonguyenBabmindton@gmail.com",
    facilityPrice: "50.000 - 75.000",
    start: 5,
};

function renderFacility(listFacility) {
    var facilityRow = "";

    for (var i = 0; i < listFacility.length; i++) {
        var facility = listFacility[i];
        var facilityTr = `
        <tr>
                <td>${i + 1}</td> <!-- Adding index as STT -->
                <td>${facility.facilityID}</td>
                   <td>${facility.facilityOwnerID}</td>
                <td>${facility.facilityName}</td>
               
                <td>${facility.facilityEmail}</td>
              
              
              
         
              
                <td>
                    <button onclick="delProduct('${facility.facilityID}')" class="btn btn-danger mr-2">Xoá</button>
                    <button onclick="editProduct('${facility.facilityID}')" class="btn btn-primary">Sửa</button>
                </td>
                <td><button onclick="showDetail('${facility.facilityID}')" class="icon-detail"><i class="fa-solid fa-circle-info"></i></button></td>
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
