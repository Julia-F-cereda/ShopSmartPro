const inp01 = document.getElementById('valor01');
const inp02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);


    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.innerHTML = `Um dos valores não foram inseridos, tente novamente`
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = ` 
        <p>Total a pagar<p><br>
        <p>Foram comprados ${v01} produtos cada um custou R$${v02.toFixed(2)}</p><br>
        <p>O valor a pagar sera de R$${(v01 * v02).toFixed(2)}</p>
        </ul>`
}
};
function desconto(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
       resultado.innerHTML = `Um dos valores não foram inseridos, tente novamente`
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <p>Total a pagar com desconto</p><br>
        <p>O preço total sem desconto foi de <span> R$${v01.toFixed(2)} A Quantidade de desconto a receber é: ${v02}%</p><br>  
        <p>O total a pagar será de R$${(v01-(v01 * v02) / 100).toFixed(2)}</p>
               
               `
    }
};

function juros(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.innerHTML = `Um dos valores não foram inseridos, tente novamente`
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <p>Total a pagar com juros</p><br>
        <p>O preço total sem juros foi de R$${v01.toFixed(2)} A porcentagem de juros a receber será de ${v02}%</p><br>
        <p>O preço a pagar sera de R$${(v01+(v01 * v02) / 100).toFixed(2)}</p>
             
               `
    }
};
function comissao(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
        resultado.innerHTML = `Um dos valores não foram inseridos, tente novamente`
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `
        <p>Comissão </p><br>
        <p>O preço das vendas foi de: R$${v01.toFixed(2)} e a porcentagem da comissão será de: ${v02}%</p><br>      
        <p>A quantidade de comissão será de R$${((v01 * v02) / 100).toFixed(2)}</p><br>
             
               `
    }

};
function lucro(){
    const v01 = parseFloat(inp01.value);
    const v02 = parseFloat(inp02.value);

    //vou ver se os valores estao inseridos
    if (isNaN (v01) || isNaN (v02)) {
       resultado.innerHTML = `Um dos valores não foram inseridos, tente novamente`
    }else{
    
    resultado.style.display = 'flex';

    resultado.innerHTML = `     
        <p>Lucro</p> <br>
        <p>O preço que foi vendido ao cliente foi de: R$${v01.toFixed(2)} E  o Preço comprado pelo vendedor foi de: R$${v02.toFixed(2)}</p><br>     
        <p>O lucro recebido foi: R$${(v01-v02).toFixed(2)}</p><br>
               `
    }

};

function limpar(){
    resultado.style.display = 'none';

   inp01.value = '';
   inp02.value = '';

   inp01.focus();
};