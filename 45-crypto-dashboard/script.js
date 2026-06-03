// Demo: populate with mock coin data
const coins = [{name:'Bitcoin',price:57321},{name:'Ethereum',price:3900},{name:'Solana',price:98}];
const ul = document.getElementById('coins');
coins.forEach(c=>{const li=document.createElement('li');li.textContent=`${c.name}: $${c.price}`;ul.appendChild(li)});
document.getElementById('total').textContent = `$${coins.reduce((s,c)=>s+c.price,0).toFixed(2)}`;