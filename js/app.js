const inp01 = document.getElementById('valor01');
const inp02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);


    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    

    resultado.innerHTML = ` 
        <h1>Total a pagar</h1><br>
        <p>Foram comprados ${v01} produtos, Cada produto teve um valor de: R$${v02.toFixed(2)}.</p><br>
        <p>O valor total a pagar será de: R$${(v01 * v02).toFixed(2)}.</p>
      `
}
};
function desconto(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
       resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    

    resultado.innerHTML = `
        <h1>Total a pagar com desconto</h1><br>
        <p>O preço total sem desconto foi de: R$${v01.toFixed(2)}. A Quantidade de desconto a receber é de: ${v02}%</p><br>  
        <p>O total a pagar será de R$${(v01-(v01 * v02) / 100).toFixed(2)}.</p>
            `
    }
};

function juros(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    

    resultado.innerHTML = `
        <h1>Total a pagar com juros</h1><br>
        <p>O preço total sem juros foi de: R$${v01.toFixed(2)}. A porcentagem de juros a receber será de ${v02}%</p><br>
        <p>O preço a pagar será de: R$${(v01+(v01 * v02) / 100).toFixed(2)}.</p>
             
               `
    }
};
function comissao(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
    

    resultado.innerHTML = `
        <h1>Comissão </h1><br>
        <p>O preço das vendas foi de: R$${v01.toFixed(2)}.A porcentagem da comissão será de: ${v02}%</p><br>      
        <p>A quantidade de comissão será de: R$${((v01 * v02) / 100).toFixed(2)}.</p>
             
               `
    }

};
function lucro(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.style.display = 'flex';
        resultado.innerHTML = `<p>Um dos valores não foram inseridos, Tente novamente!</p>`;
    }else{
    
   

    resultado.innerHTML = `     
        <h1>Lucro</h1> <br>
        <p>O preço que foi vendido ao cliente foi de: R$${v01.toFixed(2)}.O Preço comprado pelo vendedor foi de: R$${v02.toFixed(2)}</p><br>     
        <p>O lucro recebido foi: R$${(v01-v02).toFixed(2)}.</p>
               `
    }

};

function limpar(){
    resultado.style.display = 'none';

   inp01.value = '';
   inp02.value = '';

   inp01.focus();
};