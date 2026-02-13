const inp01 = document.getElementById('valor01');
const inp02 = document.getElementById('valor02');

function calcularTotal(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        alert('Um dos valores não foram inseridos, tente novamente');
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = ` 
            <ul>
            <li><span>Voce quer saber o preço total gasto</span> </li>
            <li>quantidade de produtos escolhidos: <span> ${v01} </span> e preço dos produtos escolhidos foi <span> ${v02.toFixed(2)} </span> </li>       
            <li>O valor gasto é: ${v01} * ${v02} = <span> ${v01 * v02.toFixed(2)}</span></li>
        </ul>`
}
};
function desconto(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        alert('Um dos valores não foram inseridos, tente novamente');
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
                <h2>Contas</h2>
               <ul>
                   <li>Função: <span>DESCONTO</span> </li>
                   <li>Preço total sem desconto: <span> ${v01} </span> </li>
                   <li>Quantidade de desconto a receber: <span>${v02}</span> </li>       
                   <li>O resultado da operação é = <span>${v01-(v01 * v02) / 100}</span> </li>
               </ul> 
               `
    }
};

function juros(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        alert('Um dos valores não foram inseridos, tente novamente');
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
                <h2>Contas</h2>
               <ul>
                   <li>Função: <span>JUROS</span> </li>
                   <li>Preço total: <span> ${v01} </span> </li>
                   <li>Quantidade de juros a receber: <span>${v02}</span> </li>       
                   <li>O resultado da operação é = <span>${v01+(v01 * v02) / 100}</span> </li>
               </ul> 
               `
    }
};
function comissao(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        alert('Um dos valores não foram inseridos, tente novamente');
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
                <h2>Contas</h2>
               <ul>
                   <li>Função: <span>COMISSÃO</span> </li>
                   <li>Preço vendido: <span> ${v01} </span> </li>
                   <li>quantia da comissão: <span>${v02}</span> </li>       
                   <li>O resultado da operação é = <span>${(v01 * v02) / 100}</span> </li>
               </ul> 
               `
    }

};
function lucro(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        alert('Um dos valores não foram inseridos, tente novamente');
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
                <h2>Contas</h2>
               <ul>
                   <li>Função: <span>LUCRO</span> </li>
                   <li>Preço vendido para o usuario: <span> ${v01} </span> </li>
                   <li>Preço comprado pelo vendedor: <span>${v02}</span> </li>       
                   <li>O resultado da operação é = <span>${(v01-v02)}</span> </li>
               </ul> 
               `
    }

};

function limpar(){
    resultado.style.display = 'none';

   inp01.value = '';
   inp02.value = '';

   inp01.focus();
};