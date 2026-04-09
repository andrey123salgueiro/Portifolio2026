function selectionSort(arr) { // Define a funcao que recebe um array arr como parametro.
    for(let i = 0; i < arr.length; i++) { // Este e o loop externo. Ele percorre todo o array.
      // A variavel i representa a posicao atual que estamos tentando preencher com o valor correto
      // (o menor valor restante).
    let min = i; //Aqui, assumimos temporariamente que o menor valor do que resta do array está na posição i.
      // Guardamos esse indice na variável min.
    for(let j = i+1; j < arr.length; j++) { // Este é o loop interno. Ele começa em i + 1 (a próxima posição)
    // e vai até o final do array para procurar se existe algum número ainda menor que o que esta em arr[min].
    if(arr[j] < arr[min]) min =j; //Se encontrarmos um valor na posicao j que seja menor que o valor na posição min, atualizamos min para ser o novo índice j.
      // Atenção: aqui apenas guardamos a posição do menor número, ainda não trocamos nada.
      
       } //Fim do loop interno. Agora temos certeza de que min e o indice do menor elemento da parte não ordenada.

    [arr[i], arr[min]] = [arr[min], arr[i]]; //Esta linha usa destructuring assignment para trocar
      // os valores de lugar. O valor que estava em arr[i] vai para a posição arr[min] e vice-versa.
      // E o momento em que o menor valor encontrado "vai para o início" da parte nao ordenada.
       } //Fim do loop externo. Repetimos o processo para a próxima posição i.
    return arr; // Apos organizar todos os elementos, a funcão retorna o array agora ordenado.
}