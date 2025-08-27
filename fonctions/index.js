function analyserTableau(tab) {
  let somme=0;
  let max = tab[0]
  let min = tab[0];
  let pairs=[]; let impairs = []

  for(let i=0;i<tab.length;i++){
    let n = tab[i]
    somme = somme + n

    if(n>max){
      max = n
    }
    if(n<min){
      min = n
    }

    if(n % 2 == 0){
      pairs.push(n)
    }else{
      impairs.push(n)
    }
  }

  let moy = somme / tab.length

  return {
    somme:somme,
    moyenne:moy,
    max:max,
    min:min,
    pairs:pairs,
    impairs:impairs
  }
}

let tableau = [5, 8, 12, 3, 7, 10];
    let resultat = analyserTableau(tableau);
    document.getElementById("resultat").innerHTML = `
        <b>Somme :</b> ${resultat.somme}<br>
        <b>Moyenne :</b> ${resultat.moyenne}<br>
        <b>Max :</b> ${resultat.max}<br>
        <b>Min :</b> ${resultat.min}<br>
        <b>Pairs :</b> ${resultat.pairs.join(", ")}<br>
        <b>Impairs :</b> ${resultat.impairs.join(", ")}
        `;
