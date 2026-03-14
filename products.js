let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(){
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p,index)=>{
        list.innerHTML += `
        <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <p class="price">${p.price} Kč</p>
            <button onclick="alert('Objednávka zatím demo')">Koupit</button>
        </div>
        `;
    });
}

renderProducts();
