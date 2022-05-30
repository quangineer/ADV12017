document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})


function solution (text) {
    textsplit = text.split('');

    for (i=0;i<textsplit.length;i++){
        textsplit[i]=parseInt(textsplit[i]);
    }
    textsplit.splice(-1);
    let count = 0 ;
    for (j=0;j<textsplit.length;j++){
        if (textsplit[j] == textsplit[j+1]){
            count += textsplit[j];
        }    
    }
    if (textsplit[0] == textsplit[textsplit.length-1]){
        count += textsplit[0];
    }
    console.log(count);
    }