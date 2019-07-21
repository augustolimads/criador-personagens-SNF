/* ############################ ### MAIN ### ######################################## */
function gerar(){
    //reset pra não acumular
    equipamentos.innerHTML = ''
    //caracteristicas
    const classeRand = listaClasse[randomize(listaClasse)]
    const listaRaças = raçasClasses(classeRand)
    const raçasRand = listaRaças[randomize(listaRaças)]
    const listaAlinhamento = alinhamentoClasses(classeRand)
    const alinhamentoRand = listaAlinhamento[randomize(listaAlinhamento)]
    const motivaçãoRand = motivacao(alinhamentoRand)
    const virtudesRand = virtudesFunc(alinhamentoRand)
    const viciosRand = viciosFunc(alinhamentoRand)
    const aparenciaRand = aparenciaFunc(classeRand)
    const sexoRand = listaSexo[randomize(listaSexo)]
    const nomeRand = nomeFunc(sexoRand, raçasRand)
    //atributos
    let sorteRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let forçaRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let destrezaRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let constituiçãoRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let inteligênciaRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let sabedoriaRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let carismaRand = dadosFunc(1, 6) + dadosFunc(1, 6) + dadosFunc(1, 6)
    let pvRand = pvFunc(classeRand, constituiçãoRand)
    //equipamentos
    const cargaMaxRand = cargaMaxFunc(classeRand, forçaRand)
    //moedas
    if (classeRand == 'LADRÃO'){
        pratasRand = dadosFunc(1, 6) + dadosFunc(1, 6) + (2 * sorteRand)
    } else{
        pratasRand = dadosFunc(1, 6) + dadosFunc(1, 6) + sorteRand
    }
    equipFunc(classeRand)
    

    //exibindo no HTML
    nome.innerText = nomeRand    
    classe.innerText = classeRand
    raça.innerText = raçasRand
    alinhamento.innerText = alinhamentoRand
    motivação.innerText = motivaçãoRand
    virtude.innerText = virtudesRand.toString()
    vícios.innerText = viciosRand.toString()
    aparência.innerText = aparenciaRand.toString()
    sexo.innerText = sexoRand
    força.innerText = forçaRand
    destreza.innerText = destrezaRand
    constituição.innerText = constituiçãoRand
    inteligência.innerText = inteligênciaRand
    sabedoria.innerText = sabedoriaRand
    carisma.innerText = carismaRand
    sorte.innerText = sorteRand
    pv.innerText = pvRand
    cargaMax.innerText = cargaMaxRand
    pratas.innerText = pratasRand

    visibilidade.style.visibility = "visible"
    
}
/* #### GERADOR DIVERSO ################################################################ */
function gerarGeral(){
    //variaveis
    const oraculoRand = oraculoFunc()

    //exibindo
    oraculo.innerText = oraculoRand
}