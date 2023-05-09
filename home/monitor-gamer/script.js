function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}
function hideModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}

function mascara_cep() {
    var cep = document.getElementById('cep')
    if(cep.value.length == 5) {
        cep.value += "-"
    }
}

function showPagamento() {
    var pgto = document.getElementById("modal-pagamento");
    pgto.classList.add("show-pagamento");
}
function hidePagamento() {
    var pgto = document.getElementById("modal");
    pgto.classList.remove("show-pagamento");
}