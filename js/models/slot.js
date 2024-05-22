var slots = [
    { id: "S1", slotName: "Slot 1", timeStart: "08:00", timeEnd: "09:00", courtID: "A1" },
    { id: "S2", slotName: "Slot 2", timeStart: "09:00", timeEnd: "10:00", courtID: "A2" },
    { id: "S3", slotName: "Slot 3", timeStart: "10:00", timeEnd: "11:00", courtID: "B1" },
    { id: "S3", slotName: "Slot 4", timeStart: "11:00", timeEnd: "12:00", courtID: "B1" },
];

function renderSlots(slotList) {
    var isStaffMng = window.location.pathname.includes("StaffManager.html");

    var tableHtml = `
       
    `;

    for (var i = 0; i < slotList.length; i++) {
        var slot = slotList[i];
        var trSlot = `
            <tr>
                <td>${i + 1}</td>
                <td>${slot.id}</td>
                <td>${slot.slotName}</td>
                <td>${slot.timeStart}</td>
                <td>${slot.timeEnd}</td>
                ${
                    !isStaffMng
                        ? `
                <td>
                    <button onclick="delProduct('${slot.id}')" class="btn btn-danger mr-2">Xoá</button>
                    <button onclick="editProduct('${slot.id}')" class="btn btn-primary">Sửa</button>
                </td>
                `
                        : ""
                }
            </tr>
        `;
        tableHtml += trSlot;
    }

    tableHtml += `
            </tbody>
        </table>
    `;

    document.getElementById("tblDSSlot").innerHTML = tableHtml;
}

renderSlots(slots);
