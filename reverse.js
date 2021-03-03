function reverse () 
{
    let mot = document.getElementById("mot").value;
    let array = mot.split("");
    let reversedArray = [];

    for(i=array.length; i>=0; i--){
        reversedArray.push(array[i]);
    }

    document.getElementById("resultat").innerHTML = reversedArray.join("")

}