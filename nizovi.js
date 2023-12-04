function PrikaziKomentare(komentari){
    {
        console.log("Komentari:")
        komentari.map(e => {
            document.documentElement.innerHTML += "<br>"+ " "+e.username+":" +  "<br>" + " " + e.komentar + "<br>"
        })
    }
}

function SortirajImena(komentari) {

    for (i = 0; i < komentari.length - 1; i++)
        for (j = i+1; j < komentari.length; j++)
            if(komentari[i]['prezime'] < komentari[j]['username'])
            {
                tmp = komentari[i];
                komentari[i] = komentari[j];
                komentari[j] = tmp;
            }
}

