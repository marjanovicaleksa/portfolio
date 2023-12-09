var komentari = [
    {"username": "laza", "komentar": "Sve preporuke, sve je super!"},
    {"username": "zika", "komentar": "Odlican video."},
    {"username": "pera", "komentar": "Ovo ne radi."},
    {"username": "mika", "komentar": "Hvala puno, sada mi sve radi."},
]

function pretragaKomentara() {
    var termin = document.getElementById('searchbar').value.toLowerCase();
    var lista = document.getElementById('comment-list');
    lista.innerHTML = "";

    for (var i = 0; i < komentari.length; i++) {
        var komentar = komentari[i];
        var formatiraniKomentar = komentar.komentar.replace(new RegExp(termin, 'gi'), function(match) {
            return '<strong>' + match + '</strong>';
        });

        if (komentar.username.toLowerCase().includes(termin) || komentar.komentar.toLowerCase().includes(termin)) {
            var rec = document.createElement("li");
            rec.innerHTML = '<strong>' + komentar.username + '</strong>: ' + formatiraniKomentar;
            lista.appendChild(rec);
        }
    }
}