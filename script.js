function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    //verificar se o ano de nascimento foi preenchido corretamente
    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //comportamento caso o usuário selecione a opção "sexo masculino"
        if (fsex[0].checked)
        {
            genero = 'Homem'
            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'bebeh.png')
            }
            else if (idade < 25)
            {
                img.setAttribute('src', 'adolh.png')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', 'adultoh.png')
            }
            else
            {
                img.setAttribute('src', 'idosoh.png')
            }
        }

        //comportamento caso o usuario selecione a opção "sexo feminino" 
        else if (fsex[1].checked)
        {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'bebem.png')
            }
            else if (idade < 25)
            {
                img.setAttribute('src', 'adolm.png')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', 'adultom.png')
            }
            else
            {
                img.setAttribute('src', 'idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}<br>`
        res.appendChild(img)
        
    }
}