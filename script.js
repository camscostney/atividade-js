const elementoH1 = document.getElementById("titulo");
elementoH1.innerText = "Titulo da página";

const elementoA = document.querySelector("a");
elementoA.innerText = "Link Proz";

const elementoUl = document.getElementById("lista-nao-ordenada");
elementoUl.innerHTML = `
<li> Item 01 </li>
<li> Item 02 </li>
<li> Item 03 </li>
`

const elementoOl = document.getElementById("lista-ordenada");
elementoOl.innerHTML = `
<li> <a target="_blank" href="https://www.mcdonalds.com.br/">Mc Donald's</a> </li>
<li> <a target="_blank" href="https://www.burgerking.com.br/">Burger King</a> </li>
<li> <a target="_blank" href="https://bobs.com.br/">Bob's</a> </li>
`