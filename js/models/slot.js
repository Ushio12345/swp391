var slots = [
    { id: "S1", slotID: "A1", timeStart: "08:00", timeEnd: "09:00" },
    { id: "S2", slotID: "B1", timeStart: "09:00", timeEnd: "10:00" },
    { id: "S3", slotID: "C1", timeStart: "10:00", timeEnd: "11:00" },
];

function renderSlots(slotList) {
    var slotS = "";

    for (var i = 0; i < slotList.length; i++) {
        var slot = slotList[i];
        var trSlot = `
            <tr>
                <td>${i + 1}</td>
                <td>${slot.id}</td>
                <td>${slot.slotID}</td>
                <td>${slot.timeStart}</td>
                <td>${slot.timeEnd}</td>
            </tr>
        `;

        slotS += trSlot;
    }
    document.getElementById("tblDSSlot").innerHTML = slotS;
}

renderSlots(slots);
