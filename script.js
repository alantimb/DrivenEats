let prato;
let bebida;
let sobremesa;

function selecionarPrato(classeBotao) {
    const botaoSelecionado = document.querySelector('.pratos-principais .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    classeBotao.classList.add('selecionado');

    prato = classeBotao.innerHTML;

    habilitarFechaPedido();
}

function selecionarBebida(Botao) {
    const botaoSelecionado = document.querySelector('.bebidas .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    Botao.classList.add('selecionado');

    bebida = Botao.innerHTML;

    habilitarFechaPedido();
}

function selecionarSobremesa(botao) {
    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    sobremesa = botao.innerHTML;

    habilitarFechaPedido();
}

function habilitarFechaPedido() {
    // SE o botão estiver verde, então NÃO continuar a função, então return

    if (prato !== undefined) {
        if (bebida !== undefined) {
            if (sobremesa !== undefined) {
                const botaoFecharPedido = document.querySelector('.fechar-pedido.escondido');
                console.log(botaoFecharPedido);
                const botaoSelecionar3Itens = document.querySelector('.botao-pedido');
                console.log(botaoSelecionar3Itens);
                botaoFecharPedido.classList.remove('escondido');
                botaoSelecionar3Itens.classList.add('escondido');

            }
        }
    }
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