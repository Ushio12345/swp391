var courtMng = [
    { courtMngID: "OW1", courtMngName: "Lương Văn An", courtMngEmail: "AnLV@gmail.com", phone: "0909090123", courtID: "A1" },
    { courtMngID: "OW2", courtMngName: "Nguyễn Thị Bình", courtMngEmail: "BinhNT@gmail.com", phone: "0912345678", courtID: "B1" },
    { courtMngID: "OW3", courtMngName: "Trần Văn Cường", courtMngEmail: "CuongTV@gmail.com", phone: "0923456789", courtID: "C1" },
    { courtMngID: "OW4", courtMngName: "Phạm Thị Dung", courtMngEmail: "DungPT@gmail.com", phone: "0934567890", courtID: "D1" },
    { courtMngID: "OW5", courtMngName: "Lê Văn Em", courtMngEmail: "EmLV@gmail.com", phone: "0945678901", courtID: "E1" },
    { courtMngID: "OW6", courtMngName: "Hoàng Thị Phương", courtMngEmail: "PhuongHT@gmail.com", phone: "0956789012", courtID: "F1" },
];

function renderCourtMng(listCourtMng) {
    var courtMngRows = "";
    for (var i = 0; i < listCourtMng.length; i++) {
        var courtMng = listCourtMng[i];
        var courtMngTr = `
        <tr>
        
                <td>${i + 1}</td>
                <td>${courtMng.courtMngID}</td>
                <td>${courtMng.courtMngName}</td>
                <td>${courtMng.courtMngEmail}</td>
                <td>${courtMng.phone}</td>
                
                <td>
                 
                    <button onclick="editProduct(${admin.id})" class="btn btn-primary">Sửa</button>
                       <button onclick="delProduct(${admin.id})" class="btn btn-danger mr-2">Xoá</button>
                </td>
        </tr>
        `;
        courtMngRows += courtMngTr;
    }
    document.getElementById("tblDsChuSan").innerHTML = courtMngRows;
}
renderCourtMng(courtMng);
