var admin = [
    { id: 1, name: "Lan", email: "lan123@gmail.com", phone: "123456789" },
    { id: 2, name: "Huệ", email: "huehuhu@gmail.com", phone: "987654321" },
];
function renderListAdmin(listAdmin) {
    var adList = "";

    for (var i = 0; i < listAdmin.length; i++) {
        var admin = listAdmin[i];
        var contentTr = `
            <tr>
                <td>${i + 1}</td>
                <td>${admin.id}</td>
                <td>${admin.name}</td>
                <td>${admin.email}</td>
                <td>${admin.phone}</td>
                
            </tr>
        `;
        adList += contentTr;
    }
    document.getElementById("tbDSAdmin").innerHTML = adList;
}
renderListAdmin(admin);
