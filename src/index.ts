function fetchProduct(){
    let table = (document.getElementById("table") as HTMLElement)
    let inputValue = (document.getElementById("myInput") as HTMLInputElement).value
    
   
    let xhr = new XMLHttpRequest();
    const url = `https://dummyjson.com/products/${inputValue}`
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = xhr.responseText;
            const jsonResponse = JSON.parse(response);
            let listItem = `
                <tr>
                    <td>${jsonResponse.id}</td>
                    <td>${jsonResponse.title}</td>
                    <td>${jsonResponse.price}</td>
                    <td><button class="button">Delete</button></td>
                </tr>
                `
            table.innerHTML = table.innerHTML + listItem
            let deleteButtons = (document.getElementsByClassName("button"))
            for(let i =0; i<deleteButtons.length ; i++){
                deleteButtons[i].addEventListener("click", function(){
                    const button = deleteButtons[i] as HTMLElement; 
                    const row = button.parentNode?.parentNode as HTMLElement | null
                   if (row) {
                       row.parentNode?.removeChild(row); 
                   }
                    
                })
            }
        
    }
}
    xhr.send()
}
