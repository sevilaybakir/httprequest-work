"use strict";
function fetchProduct() {
    let product = document.getElementById("product");
    var inputElement = document.getElementById('myInput');
    var inputValue = inputElement.value;
    let xhr = new XMLHttpRequest();
    const url = `https://dummyjson.com/products/${inputValue}`;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = xhr.responseText;
            const jsonResponse = JSON.parse(response);
            let listItem = `
                <td>${jsonResponse.id}</td>
                <td>${jsonResponse.title}</td>
                <td>${jsonResponse.price}</td>`;
            product === null || product === void 0 ? void 0 : product.innerHTML = (product === null || product === void 0 ? void 0 : product.innerHTML) + listItem;
        }
    };
    xhr.send();
}
//# sourceMappingURL=index.js.map