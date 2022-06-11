const resposta = document.querySelector('#resposta')
const type = document.querySelector('#type')
const buttonAsk = document.querySelector('#buttonAsk')
const respostas = [
    'I am sure!', 'I am not so sure about it.', 'It was decided that way.', "Don't count on that.", "Without a shadow of a doubt!", "Ask again later, please!", "Hella yes!", 'My answer is no.', 'You can count on that.', 'I feel called on to not say it to you now.', 'From my point of view, yes.', 'My sources say yes.', 'Probably.', 'It is not possible to foresee it now.', 'It has good chances.', 'The chances are not the best ones.', 'Yep!', 'Concentrate and ask again.', 'Signs are tilted to the yes side.'
  ]
  
  
function askQuestion(){
    if(type.value == ''){
        alert('Type your question, please!')
        return
    }
    buttonAsk.setAttribute('disabled', true)
    const question = '<div>' + type.value + '</div>'

    //gerar um número aleatório
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    resposta.innerHTML = question + respostas[numeroAleatorio]
    resposta.style.opacity = 1;
    
    //sumir resposta
    setTimeout(function(){
        resposta.style.opacity = 0;
        buttonAsk.removeAttribute('disabled')
    }, 3000)
    
 
}