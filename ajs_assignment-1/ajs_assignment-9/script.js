let sum=0;
function addItem(){
    let itemName=document.getElementById("item-name-input").value;
    let itemPrice=document.getElementById("item-price-input").value;
    let tbody=document.getElementById('tbody');
    let tr=document.createElement('tr');
    let nameData=document.createElement('td')
    nameData.setAttribute("data-ns-test","item-name");
    let priceData=document.createElement('td')
    priceData.setAttribute('data-ns-test','prices')
    nameData.textContent=itemName;
    priceData.textContent=itemPrice;
    tr.append(nameData);
    tr.append(priceData);
    tbody.append(tr);
    // for emptying the input fields
    document.getElementById("item-name-input").value='';
    document.getElementById("item-price-input").value='';
    let prices = document.querySelectorAll('[prices]');
    sum += parseInt(itemPrice);
    console.log(sum);
    let total=document.getElementById('grandTotal');
    total.innerHTML=sum;
}