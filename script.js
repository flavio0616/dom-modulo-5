
document.body.innerHTML += '<h1 id="titulo">Bem-vindo à Loja!</h1>';


const produtoDiv = document.createElement('div');
produtoDiv.classList.add('produto');


const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Camiseta Estampada';


const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Camiseta de algodão com estampa criativa, disponível em diversas cores.';


const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 49,99';


const imagemProduto = document.createElement('img');

imagemProduto.src = 'imagens/camiseta.jpg'; 
imagemProduto.alt = 'Camiseta Estampada';  


produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);
produtoDiv.appendChild(imagemProduto);


document.body.appendChild(produtoDiv);
