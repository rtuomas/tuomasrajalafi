'use strict';

document.getElementById('calculateAvg').onclick = calculateAvg;
document.getElementById('addMore').onclick = addMore;
const rows = document.getElementById('rows');
addMore();

document.querySelector('input').onchange = onChange;

function onChange(){
    console.log("test");
}

function calculateAvg() {
    let wghtPrice = 0;
    let price = 0;
    let shares = 0;
    for(let i=0; i<rows.children.length; i++){
        price += +rows.children[i].children[1].value;
        shares += +rows.children[i].children[2].value;
        wghtPrice += (+rows.children[i].children[1].value *
            +rows.children[i].children[2].value);
    }

    console.log(price, shares)
    document.getElementById('avgPrice').innerHTML = `
    <p>Average price for 1 share is ${(price/shares).toFixed(2)}</p>
    <p>Average price for ${shares} shares is ${(wghtPrice/shares).toFixed(2)}</p>`;
}

function addMore() {
    const count = rows.children.length;
    const div = document.createElement('div');
    div.className = 'stocks';
    const label = document.createElement('label');
    label.htmlFor = `price${count+1}`;
    label.textContent = 'Fill:';
    const inputPrice = document.createElement('input');
    inputPrice.type = 'number';
    inputPrice.id = `price${count+1}`;
    inputPrice.name = `price${count+1}`;
    inputPrice.placeholder = 'Price';
    const inputShares = document.createElement('input');
    inputShares.type = 'number';
    inputShares.id = `shares${count+1}`;
    inputShares.name = `shares${count+1}`;
    inputShares.placeholder = 'Shares';
    div.appendChild(label);
    div.appendChild(inputPrice);
    div.appendChild(inputShares);
    rows.appendChild(div);
}