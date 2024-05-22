let yards = [
    { yardID: "1", yardName: "Sân A", courtID: "A1" },
    { yardID: "2", yardName: "Sân B", courtID: "B1" },
    { yardID: "3", yardName: "Sân C", courtID: "C1" },
    { yardID: "4", yardName: "Sân D", courtID: "D1" },
    { yardID: "5", yardName: "Sân E", courtID: "E1" },
    { yardID: "6", yardName: "Sân F", courtID: "F1" },
];

function renderYard(listYard) {
    var isStaffPage = window.location.pathname.includes("StaffManager.html");
    var tableHtml = `
       
    `;

    for (var i = 0; i < listYard.length; i++) {
        var yardItem = listYard[i];
        var yardTr = `
            <tr>
                <td>${i + 1}</td>
                <td>${yardItem.yardID}</td>
                <td>${yardItem.yardName}</td>
                ${
                    !isStaffPage
                        ? `
                <td>
                    <button onclick="delProduct('${yardItem.yardID}')" class="btn btn-danger mr-2">Xoá</button>
                    <button onclick="editProduct('${yardItem.yardID}')" class="btn btn-primary">Sửa</button>
                </td>
                `
                        : ""
                }
            </tr>
        `;
        tableHtml += yardTr;
    }

    tableHtml += `
            </tbody>
        </table>
    `;

    document.getElementById("tblDsSan").innerHTML = tableHtml;
}

renderYard(yards);
