let card = document.querySelectorAll('.card');
for (card of card) {
    card.addEventListener('mouseover', function (event) {
        if (event.target.id === "pusu") {
            event.target.setAttribute("src", "assets/images/twitter-1.png");
            return;
        } else if (event.target.id === "rei") {
            event.target.setAttribute("src", "assets/images/instagram.png");
            return;
        } else if (event.target.id === "miro") {
            event.target.setAttribute("src", "assets/images/twitter-1.png");
            return;
        }
    });

            

    card.addEventListener('mouseout', function (event) {
        if (event.target.id === "pusu") {
            event.target.setAttribute("src", "assets/images/Pusu-1.png");
            return;
        }
        if (event.target.id === "rei") {
            event.target.setAttribute("src", "assets/images/Rei-1.png");
            return;
        }
        if (event.target.id === "miro") {
            event.target.setAttribute("src", "assets/images/Miro-1.png");
            return;
        }
        
    });

}




