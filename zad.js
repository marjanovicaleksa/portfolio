var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function renderKomentara(k) {
  $card = $(`<div class='card col ${k["username"]}'></div>`)
  $cardBody = $("<div class='card-body d-flex flex-column align-items-center gap-3'></div>")
  $card.append($cardBody)
  $cardBody.text(k['username'])
  $komentar = $(`<span class='badge bg-success w-auto'>${k['komentar']}</span>`)
  $cardBody.prepend($komentar)
  return $card
}
