class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build () {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")


        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","cardLeft")
        const cardRigth = document.createElement("div");
        cardRigth.setAttribute("class","cardRigth")

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);


        const author = document.createElement("span");
        author.textContent = "By " + this.getAttribute("author") || "Anonymous";

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("titles");
        linkTitle.href = this.getAttribute("link")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const img = document.createElement("img")
        img.src = this.getAttribute("photo") || "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg"
        img.alt = "foto da noticia"

        cardRigth.appendChild(img)

        return componentRoot;
    }

    styles () {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            } 

            .cardLeft {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .cardLeft > span {
                font-weight: 400;
            }

            .cardLeft > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .cardLeft > p {
                color: rgb(70,70,70);
            }

            .cardRigth img {
                width: 300px;
            }
        `
        return style;
    }

    
}

customElements.define("card-news", Cardnews)