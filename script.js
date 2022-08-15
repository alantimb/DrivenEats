let prato;
let bebida;
let sobremesa;

// função que habilita a seleção do prato
function selecionarPrato(classeBotao) {
    const botaoSelecionado = document.querySelector('.pratos-principais .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    classeBotao.classList.add('selecionado');

    prato = classeBotao.innerHTML;

    let plateSelected = document.querySelector('.pratos-principais .selecionado .prato-escolhido');
    let pratoEscolhido = plateSelected.innerHTML;

    let platePrice = document.querySelector('.pratos-principais .selecionado .valor');
    let pratoPreco = platePrice.innerHTML;

    habilitarFechaPedido();
    return pratoEscolhido, pratoPreco;
}

// função que habilita a seleção da bebida
function selecionarBebida(Botao) {
    const botaoSelecionado = document.querySelector('.bebidas .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    Botao.classList.add('selecionado');

    bebida = Botao.innerHTML;

    let drinkSelected = document.querySelector('.bebidas .selecionado .bebida-escolhida');
    let bebidaEscolhida = drinkSelected.innerHTML;

    let drinkPrice = document.querySelector('.bebidas .selecionado .valor');
    let bebidaPreco = drinkPrice.innerHTML;

    habilitarFechaPedido();
    return bebidaEscolhida, bebidaPreco;
}

// função que habilita a seleção da sobremesa
function selecionarSobremesa(botao) {
    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    sobremesa = botao.innerHTML;

    let dessertSelected = document.querySelector('.sobremesas .selecionado .sobremesa-escolhida');
    let sobremesaEscolhida = dessertSelected.innerHTML;

    let dessertPrice = document.querySelector('.sobremesas .selecionado .valor');
    let sobremesaPreco = dessertPrice.innerHTML;

    habilitarFechaPedido();
    return sobremesaEscolhida, sobremesaPreco;
}

// função que habilita o botão "fechar pedido" após os 3 itens selecionados
function habilitarFechaPedido() {
    // SE o botão "fechar pedido" estiver escondido, ENTÃO o código vai prosseguir
    const botaoFinal = document.querySelector(".fechar-pedido");
    if (botaoFinal.classList.contains("escondido") === true) {
        // SE o prato estiver selecionado
        if (prato !== undefined) {
            // SE a bebida estiver selecionada
            if (bebida !== undefined) {
                // SE a sobremesa estiver selecionada
                if (sobremesa !== undefined) {
                    // ENTÃO o botão "selecionar os 3 itens..." é escondido e o botão "fechar pedido" aparece
                    const botaoFecharPedido = document.querySelector('.fechar-pedido.escondido');

                    const botaoSelecionar3Itens = document.querySelector('.botao-pedido');

                    botaoFecharPedido.classList.remove('escondido');
                    botaoSelecionar3Itens.classList.add('escondido');

                }
            }
        }
    }
}


function somaPreco(pratoPreco, bebidaPreco, sobremesaPreco) {
    let pratoPrice = Number(pratoPreco.replace(",", "."));
    let bebidaPrice = Number(bebidaPreco.replace(",", "."));
    let sobremesaPrice = Number(sobremesaPreco.replace(",", "."));
    const price = pratoPrice + bebidaPrice + sobremesaPrice;

    return price;
}

// função que envia a mensagem para o zapzap
function enviarMensagem() {
    let mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${pratoEscolhido}\n- Bebida: ${bebidaEscolhida}\n- Sobremesa: ${sobremesaEscolhida}\nTotal: R$ ${somaPreco(pratoPreco, bebidaPreco, sobremesaPreco)}`;
    let url = "https://wa.me/5521969425043?text=" + encondeURIComponent(mensagem);
    window.open(url, _blanck);
}



// function fecharPedido() {
//     // SE o prato principal estiver definido
//     if (prato !== undefined) {
//         // SE a bebida estiver definida
//         if (bebida !== undefined) {
//             // SE a sobremesa estiver definida
//             if (sobremesa !== undefined) {
//                 // ENTÃO adicionar opacidade em todas as divs
//                 const painel = document.querySelector('.menu-topo .prato-principal .bebida .sobremesa .menu-final');
//                 painel.classList.add('opacidade');

//                 // ENTÃO remover a classe escondido do painel
//                 const painelConfirmePedido = document.querySelector('.confirmePedido');
//                 painelConfirmePedido.classList.remove('escondido');

//                 // falta a parte dos preços ??
//             }
//         }
//     }
// }