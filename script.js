/* ### FUNÇÕES ### */
//randoms
function randomize(lista){
    const maximo = lista.length - 1
    const randomizado = Math.random()
    return Math.round(randomizado * maximo)
}

function dadosFunc(min, max){
    const randomizado = Math.random()
    return Math.round(randomizado * (max - min) + min)
}
//---------------------------------------------------------------------
//funciona juntos
function quantidadeRaça(raça, quantidade){
    listaTemp = []
    for(let i=1; i <= quantidade; i++){
        listaTemp.push(raça)
    }
    return listaTemp
}
function raçasClasses(classe){
    let listaTempA, listaTempB = []
    const listaTempC = ['HUMANO', 'ANÃO', 'ELFO', 'HALFLING']
    switch (classe){
        case 'GUERREIRO':
            listaTempA = quantidadeRaça('HUMANO', 6)
            listaTempB = quantidadeRaça('ANÃO', 2)
            return listaTempA.concat(listaTempB, listaTempC)
            break
        case 'LADRÃO':
            listaTempA = quantidadeRaça('HUMANO', 6)
            listaTempB = quantidadeRaça('HALFLING',2)
            return listaTempA.concat(listaTempB, listaTempC)
            break
        case 'CLÉRIGO':
            listaTempA = quantidadeRaça('HUMANO', 6)
            listaTempB = quantidadeRaça('ANÃO',2)
            return listaTempA.concat(listaTempB, listaTempC)
            break
        case 'FEITICEIRO':
            listaTempA = quantidadeRaça('HUMANO', 6)
            listaTempB = quantidadeRaça('ELFO',2)
            return listaTempA.concat(listaTempB, listaTempC)
            break
    }
}
//-------------------------------------------------------------------------------------
function quantidadeAlinhamento(alinhamento, quantidade){
    let listaTemp = []
    for (let i=0; i < quantidade; i++){
        listaTemp.push(alinhamento)
    }
    return listaTemp
}
function alinhamentoClasses(classe){
    let listaTemp = ['MAU', 'BOM', 'CAÓTICO']
    let mau, bom, neutro, caotico, ordeiro = []
    switch (classe){
        case 'GUERREIRO':
            mau = quantidadeAlinhamento('MAU', 1)
            bom = quantidadeAlinhamento('BOM', 1)
            neutro = quantidadeAlinhamento('NEUTRO', 4)
            caotico = quantidadeAlinhamento('CAÓTICO', 1)
            ordeiro = quantidadeAlinhamento('ORDEIRO', 2)
            return listaTemp.concat(mau, bom, neutro, caotico, ordeiro)
            break
        case 'LADRÃO':
            neutro = quantidadeAlinhamento('NEUTRO', 4)
            mau = quantidadeAlinhamento('MAU', 1)
            bom = quantidadeAlinhamento('BOM', 1)       
            caotico = quantidadeAlinhamento('CAÓTICO', 3)
            return listaTemp.concat(mau, bom, neutro, caotico)
            break
        case 'CLÉRIGO':
            neutro = quantidadeAlinhamento('NEUTRO', 2)
            mau = quantidadeAlinhamento('MAU', 2)
            bom = quantidadeAlinhamento('BOM', 2)            
            caotico = quantidadeAlinhamento('CAÓTICO', 1)
            ordeiro = quantidadeAlinhamento('ORDEIRO', 2)
            return listaTemp.concat(mau, bom, neutro, caotico, ordeiro)
            break
        case 'FEITICEIRO':
            caotico = quantidadeAlinhamento('CAÓTICO', 4)
            mau = quantidadeAlinhamento('MAU', 2) 
            bom = quantidadeAlinhamento('BOM', 3)
            return listaTemp.concat(caotico, mau, bom)
            break
    }
}
//--------------------------------------------------------------------------------------

function motivacao(alinhamento){
    switch (alinhamento){
        case 'MAU':
            return 'Causar mal físico ou emocional a outrem em prol de si mesmo.'
            break
        case 'BOM':
            return 'Ajudar os necessitados às suas custas'
            break
        case 'NEUTRO':
            return 'Recusar-se a tomar partido diante de uma oportunidade'
            break
        case 'ORDEIRO':
            return 'Manter a ordem a despeito das forças que poderiam subvertê-la'
            break
        case 'CAÓTICO':
            return 'Semear a discódia ou destruir um símbolo da ordem'
            break
    }
}
//--------------------------------------------------------------------------------------

function virtudesFunc(alinhamento){
    let virtudesTemp = []
    switch(alinhamento){
        case 'MAU':
            return 'Nenhuma virtude aparente'
            break
        case 'BOM':
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            return virtudesTemp
            break
        case 'CAÓTICO':
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            return virtudesTemp
            break  
        case 'ORDEIRO':
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            return virtudesTemp
            break
        case 'NEUTRO':
            virtudesTemp.push(listaVirtudes[randomize(listaVirtudes)])
            return virtudesTemp
            break
    }
}

function viciosFunc(alinhamento){
    let viciosTemp = []
    switch(alinhamento){
        case 'MAU':
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            return viciosTemp
            break
        case 'BOM':
            return ''
            break
        case 'CAÓTICO':
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            return viciosTemp
            break
        case 'ORDEIRO':
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            return viciosTemp
            break
        case 'NEUTRO':
            viciosTemp.push(listaVícios[randomize(listaVícios)])
            return viciosTemp
            break

    }
}
//--------------------------------------------------------------------------------------
function aparenciaFunc(classe){
    let aparenciaTemp = []
    switch(classe){
        case 'GUERREIRO':
            aparenciaTemp.push(listaAparGuerreiro[randomize(listaAparGuerreiro)])
            aparenciaTemp.push(listaAparGuerreiro[randomize(listaAparGuerreiro)])
            aparenciaTemp.push(listaAparGuerreiro[randomize(listaAparGuerreiro)])
            return aparenciaTemp
            break
        case 'LADRÃO':
            aparenciaTemp.push(listaAparLadrão[randomize(listaAparLadrão)])
            aparenciaTemp.push(listaAparLadrão[randomize(listaAparLadrão)])
            aparenciaTemp.push(listaAparLadrão[randomize(listaAparLadrão)])
            return aparenciaTemp
            break
        case 'CLÉRIGO':
            aparenciaTemp.push(listaAparClérigo[randomize(listaAparClérigo)])
            aparenciaTemp.push(listaAparClérigo[randomize(listaAparClérigo)])
            aparenciaTemp.push(listaAparClérigo[randomize(listaAparClérigo)])
            return aparenciaTemp
            break
        case 'FEITICEIRO':
            aparenciaTemp.push(listaAparFeiticeiro[randomize(listaAparFeiticeiro)])
            aparenciaTemp.push(listaAparFeiticeiro[randomize(listaAparFeiticeiro)])
            aparenciaTemp.push(listaAparFeiticeiro[randomize(listaAparFeiticeiro)])
            return aparenciaTemp
            break
    }
}
//--------------------------------------------------------------------------------------
function nomeFunc(sexo, raça){
    if(sexo == 'mulher'){
        switch(raça){
            case 'HUMANO':
                return listaHumana[randomize(listaHumana)]
                break
            case 'ANÃO':
                return listaAnã[randomize(listaAnã)]
                break
            case 'HALFLING':
                return listaHalflinga[randomize(listaHalflinga)]
                break
            case 'ELFO':
                return listaElfa[randomize(listaElfa)]  
                break
        }
    } else{ //homem
        switch(raça){
            case 'HUMANO':
                return listaHumano[randomize(listaHumano)]
                break
            case 'ANÃO':
                return listaAnão[randomize(listaAnão)]
                break
            case 'HALFLING':
                return listaHalflingo[randomize(listaHalflingo)]
                break
            case 'ELFO':
                return listaElfo[randomize(listaElfo)]  
                break
        }
    }
}
//--------------------------------------------------------------------------------------
function modFunc(numero){
    if (numero == 3){
        return -3
    } else if (numero > 3 && numero <= 5){
        return -2
    } else if (numero > 5 && numero <= 8){
        return -1
    } else if (numero > 8 && numero <= 12){
        return 0
    } else if (numero > 12 && numero <= 15){
        return 1
    } else if (numero > 15 && numero <= 17){
        return 2
    } else if (numero == 18){
        return 3
    }
}
function pvFunc(classe, constituição){
    switch (classe){
        case 'GUERREIRO':
            return dadosFunc(1,10) + constituição
            break
        case 'LADRÃO':
            return dadosFunc(1,6) + constituição
            break
        case 'CLÉRIGO':
            return dadosFunc(1,8) + constituição
            break
        case 'FEITICEIRO':
            return dadosFunc(1,4) + constituição
            break
    }
}
function cargaMaxFunc(classe, força){
    switch (classe){
        case 'GUERREIRO':
            return 10 + modFunc(força)
            break
        case 'LADRÃO':
            return 6 + modFunc(força)
            break
        case 'CLÉRIGO':
            return 8 + modFunc(força)
            break
        case 'FEITICEIRO':
            return 4 + modFunc(força)
            break
    }
}
//---------------------------------------------------------------------
//Equipamentos
function listarEquipFunc(equipTemp){ //listar os equipamentos gerados para o html
    for(i in equipTemp){
        let linha = document.createElement("li")
        linha.innerText = equipTemp[i]
        equipamentos.appendChild(linha)
    }
}

function equipFunc(classe){
    let equipTemp = [] 
    switch(classe){
        case 'GUERREIRO':
            equipTemp.push('mochila', 'saco de dormir', 'moringa', 'faca', 'arma favorita', `${dadosFunc(1,6)} rações`, `${listaBugiganga[randomize(listaBugiganga)]}`, `${listaVestimentaGue[randomize(listaVestimentaGue)]}`, `${listaArmaduraGue[randomize(listaArmaduraGue)]}`, `${listaOutrosGue[randomize(listaOutrosGue)]}`)
            listarEquipFunc(equipTemp)
            break
        case 'LADRÃO':
            equipTemp.push('mochila', 'moringa', 'faca', `${dadosFunc(1,6)} rações`, `${listaBugiganga[randomize(listaBugiganga)]}`, `${listaVestimentaLad[randomize(listaVestimentaLad)]}`, `${listaArmaLad[randomize(listaArmaLad)]}`, `${listaOutrosLad[randomize(listaOutrosLad)]}`)
            listarEquipFunc(equipTemp)
            break
        case 'CLÉRIGO':
            equipTemp.push('sacola com pedras de funda','símbolo sagrado','moringa', `${dadosFunc(1,6)} rações`, `${listaBugiganga[randomize(listaBugiganga)]}`, `${listaVestimentaCler[randomize(listaVestimentaCler)]}`, `${listaArmaCler[randomize(listaArmaCler)]}`, `${listaOutrosCler[randomize(listaOutrosCler)]}`)
            listarEquipFunc(equipTemp)
            break
        case 'FEITICEIRO':
            equipTemp.push('sacola com pedras de funda', 'grimório', 'moringa', `${dadosFunc(1,6)} rações`, `${listaBugiganga[randomize(listaBugiganga)]}`, `${listaVestimentaFei[randomize(listaVestimentaFei)]}`, `${listaCabeçaFei[randomize(listaCabeçaFei)]}`, `${listaArmaFei[randomize(listaArmaFei)]}`, `${listaOutrosFei[randomize(listaOutrosFei)]}`)
            listarEquipFunc(equipTemp)
            break
    }
}
/* #### GERADOR DIVERSO #################################################################### */
//ORACULO
function oraculoFunc(){
    const dados = dadosFunc(1,6) + dadosFunc(1,6)
    if(dados >= 10){
       return 'sim, e...'
    } else if(dados >= 7 && dados < 10){
        return 'sim, mas...'
    } else if(dados >= 3 && dados < 7){
        return 'não, mas...'
    } else if(dados == 2){
        return 'não, e...'
    }
}
