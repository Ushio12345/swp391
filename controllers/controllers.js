function renderAccount(listAccount) {
    // hàm .reverse() dùng để đảo ngược mảng vd  :[1,2,3] => [3,2,1]
    let accountReverse = listAccount.reverse();

    var content = "";
    for (var i = 0; i < productsReverse.length; i++) {
        var product = productsReverse[i];

        var contentTr = `
    <tr>

    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>

    <td>
    <img src="${product.img}" alt="" width="70px" />
    </td>
    
    <td>
    <button onclick="delProduct('${product.id}')" class="btn btn-danger mr-2">Xoá</button>
    <button onclick="editProduct('${product.id}')" class="btn btn-primary">Sửa</button>
    </td>
    
    </tr>
    
    `;
        content += contentTr;
    }
    document.getElementById("tblDanhSachSP").innerHTML = content;

    //   #tblDanhSachSP
}

function getInfoForm() {
    var phone = document.querySelector("#phone").value;
    var password = document.getElementById("password").value;

    var accountCreate = {
        userEmail: tenSp,
        userPhone: price,
        password: password,
        idAccount: idAccount,
    };
    return accountCreate;
}

function resetForm() {
    document.querySelector("#TenSP").value = "";
    document.getElementById("GiaSP").value = "";
    document.getElementById("HinhSP").value = "";
}
