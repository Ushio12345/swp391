var staffs = [
    { id: "NV1", name: "Hương", phone: "123456789", shift: "1" },
    { id: "NV2", name: "Lan", phone: "987654321", shift: "2" },
];

function renderStaff(staffList) {
    var staffRows = "";

    for (var i = 0; i < staffList.length; i++) {
        var staff = staffList[i];
        var trStaff = `
            <tr>
            <td>${i + 1}</td>
                <td>${staff.id}</td>
                <td>${staff.name}</td>
                <td>${staff.phone}</td>
                <td>${staff.shift}</td>
            </tr>
        `;
        staffRows += trStaff;
    }
    document.getElementById("tbDSStaff").innerHTML = staffRows;
}

renderStaff(staffs);
