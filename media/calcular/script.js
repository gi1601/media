
        function enviarForm(event) {
            event.preventDefault()
            //formdata tras todos os dados do form //
            var dados = new FormData(this) 
            var nota1 = dados.get("nota1")
            var nota2 = dados.get("nota2")
            var nota3 = dados.get("nota3")
            var nota4 = dados.get("nota4")
            var nota5 = dados.get("nota5")
            // parse float transforma string em numero//
            var soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)
            var media = soma / 5

            if(media >= 7) {
                texto.innerHTML = "Aprovado, a média aritmética é: " + media.toFixed(2)
            } else if(media >=  5 && media <= 6.9) {
                texto.innerHTML = "Exame, a média aritmética é: " + media.toFixed(2)
            } else if(media < 5 ) {
                texto.innerHTML = "Reprovado, a média aritmética é: " + media.toFixed(2)

        } 
    }


    function mediaPonderada(event) {
        event.preventDefault()

        
        var dado = new FormData(this) 
        var notaum = dado.get("notaum")
        var notadois = dado.get("notadois")
        var notatres = dado.get("notatres")
        var notaquatro = dado.get("notaquatro")
        var notacinco = dado.get("notacinco")  
        var peso1 = dado.get("peso1")
        var peso2 = dado.get("peso2")
        var peso3 = dado.get("peso3")
        var peso4 = dado.get("peso4")
        var peso5 = dado.get("peso5") 
        
        var x1 = parseFloat(notaum)*parseFloat(peso1)
        var x2 = parseFloat(notadois)*parseFloat(peso2)
        var x3 = parseFloat(notatres)*parseFloat(peso3)
        var x4 = parseFloat(notaquatro)*parseFloat(peso4)
        var x5 = parseFloat(notacinco)*parseFloat(peso5)
        
    
    
        var mp = x1 + x2 + x3 + x4 + x5
        var result2 = mp /(parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5))
    
        if (result2 >= 7) {
            texto2.innerHTML = "Aprovado, com a média de:" + result2.toFixed(2)
        }
        else if (result2 >= 5 && result2 <= 6.9) {
            texto2.innerHTML = "De exame, com a média de: " + result2.toFixed(2)
        }
        else if (result2 < 5) {
            texto2.innerHTML = "Reprovado, com a média de: " + result2.toFixed(2)
        }
    }
    var ponderar = document.getElementById("formdois")
    var media  = document.getElementById("formulario")
    ponderar.addEventListener("submit", mediaPonderada)
    
    art.addEventListener('click', () => {
        ponderar.style.display = 'none'
        media.style.display = 'grid'
    })
    
    pon.addEventListener('click', () => {
        ponderar.style.display = 'flex'
        media.style.display = 'none'
    })    
        formulario.addEventListener("submit", enviarForm)
       