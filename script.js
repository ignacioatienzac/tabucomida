// Espera a que todo el contenido de la página se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // Lista de todas las tarjetas del juego. Cada objeto contiene el nombre,
    // la URL de la imagen y las tres palabras prohibidas.
    const foodData = [
        { name: "Embutido", imageUrl: "https://media.cntraveler.com/photos/55d334b8c47ae13868ae6a91/16:9/w_1280,c_limit/chi-spacca-cured-meats-cr-courtesy.jpg", tabooWords: ["Chorizo", "Curado", "Carne"] },
        { name: "Pescado", imageUrl: "https://th.bing.com/th/id/R.294d10b6e715a744287e6444ca710b3e?rik=eQNwNpqNJOv1Tg&pid=ImgRaw&r=0", tabooWords: ["Mar", "Agua", "Aleta"] },
        { name: "Carne", imageUrl: "https://www.latuaspesa.com/photo/2020/06/17/17/category/raw/carne.jpg", tabooWords: ["Animal", "Filete", "Proteína"] },
        { name: "Fruta", imageUrl: "https://2.bp.blogspot.com/-NfSnfeDaiU4/TwrlEkbcw6I/AAAAAAAAAo4/WHlNdZ6kyUg/s1600/fruits-fruits-1920x1440.jpg", tabooWords: ["Dulce", "Árbol", "Postre"] },
        { name: "Marisco", imageUrl: "https://mariskito.com/blog/wp-content/uploads/2016/02/mariscada1.jpg", tabooWords: ["Concha", "Gamba", "Océano"] },
        { name: "Queso", imageUrl: "https://bunkerhillcheese.com/wp-content/uploads/bf-how-well-you-know-cheese.jpg", tabooWords: ["Leche", "Vaca", "Agujeros"] },
        { name: "Cereales", imageUrl: "https://th.bing.com/th/id/R.3c78ccfbfb900d9ac40f9f20029a7e01?rik=Fz81R2baiZiNlA&pid=ImgRaw&r=0", tabooWords: ["Desayuno", "Grano", "Leche"] },
        { name: "Verduras", imageUrl: "https://tse1.mm.bing.net/th/id/OIP.gYckggJjpXobkxZTCi42awHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Huerta", "Verde", "Saludable"] },
        { name: "Paraguayo", imageUrl: "https://th.bing.com/th/id/R.7f223df7c16964eb0604bf6afa2ce241?rik=oH7Mf%2fJL2H%2fhgA&pid=ImgRaw&r=0", tabooWords: ["Fruta", "Hueso", "Melocotón"] },
        { name: "Lechuga", imageUrl: "https://www.65ymas.com/uploads/s1/38/42/11/bigstock-fresh-baby-cos-frillice-iceb-302911864.jpeg", tabooWords: ["Ensalada", "Verde", "Hoja"] },
        { name: "Melón", imageUrl: "https://okdiario.com/img/recetas/2017/06/20/propiedades-de-melon.jpg", tabooWords: ["Fruta", "Verano", "Agua"] },
        { name: "Patata", imageUrl: "https://cdn0.bioenciclopedia.com/es/posts/0/9/3/patata_390_600.jpg", tabooWords: ["Tubérculo", "Freír", "Tortilla"] },
        { name: "Cereza", imageUrl: "https://th.bing.com/th/id/R.ff0eb6b87858225f5dd7310705f2e8ce?rik=RxNkGhF6nIr6iw&pid=ImgRaw&r=0", tabooWords: ["Fruta", "Hueso", "Rojo"] },
        { name: "Tomate", imageUrl: "https://th.bing.com/th/id/R.03c950bde87ff3e4f79f99097d173c4a?rik=kVFpLJnGvWCQ3Q&riu=http%3a%2f%2fwww.hortitecnews.com%2fwp-content%2fuploads%2f2016%2f05%2ffield_image_tomate_37.jpg&ehk=ReJGHSPo9UPeznF0Ou4dhtrUX32yv6GO5VAh52EVUNI%3d&risl=&pid=ImgRaw&r=0", tabooWords: ["Rojo", "Ensalada", "Salsa"] },
        { name: "Leche", imageUrl: "https://imagedelivery.net/X9PXW05EjhQlnmx27Gj20g/0798a27a-595a-469a-f218-4810ff855f00/ogimage", tabooWords: ["Vaca", "Blanco", "Calcio"] },
        { name: "Yogur", imageUrl: "https://www.avogel.co.uk/images2018/May/yogurt-1200-630.jpg", tabooWords: ["Lácteo", "Fermentado", "Postre"] },
        { name: "Magdalena", imageUrl: "https://api.swissmilk.ch/wp-content/uploads/2024/01/LM200904_72_Linzer-Muffins-2560x1714.jpg", tabooWords: ["Bizcocho", "Desayuno", "Dulce"] },
        { name: "Macarrones", imageUrl: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/09/14/macarrones.jpeg", tabooWords: ["Pasta", "Tubo", "Queso"] },
        { name: "Huevo", imageUrl: "https://tse1.mm.bing.net/th/id/OIP.CvI4ZmS1j3Mc1I7U9VUnzgHaD8?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Gallina", "Yema", "Clara"] },
        { name: "Arroz", imageUrl: "https://tse4.mm.bing.net/th/id/OIP.5EghUBssdMhN9fgyUE2A-wHaEl?w=1200&h=743&rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Paella", "Grano", "Blanco"] },
        { name: "Refresco", imageUrl: "https://d1h9svpkzsccua.cloudfront.net/wp-content/uploads/2020/07/14063012/Reasons-You-Should-Stop-Drinking-Soda-Now.jpg", tabooWords: ["Burbujas", "Azúcar", "Gaseosa"] },
        { name: "Miel", imageUrl: "https://www.puntarenasseoye.com/wp-content/uploads/2022/08/B350B3EA-9689-4349-89E3-A11B04DF8834.jpeg", tabooWords: ["Abeja", "Dulce", "Panal"] },
        { name: "Frutos secos", imageUrl: "https://tse3.mm.bing.net/th/id/OIP.L6SBiyuLNC9CRU-fn08TvAHaFC?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Cáscara", "Nuez", "Almendra"] },
        { name: "Guacamole", imageUrl: "https://images.services.kitchenstories.io/NznVX2qzNWGAYNn5wLfimsa1qPw=/1920x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3086-photo-final-1-4x3_new.jpg", tabooWords: ["Aguacate", "Mexicano", "Nachos"] },
        { name: "Nachos", imageUrl: "https://www.womansworld.com/wp-content/uploads/2023/03/Nachos-Topped-With-Ground-Meat.jpg", tabooWords: ["Tortilla", "México", "Queso"] },
        { name: "Aguacate", imageUrl: "https://th.bing.com/th/id/R.efa6b47a13ce011fbb3ecedb807cca10?rik=A6vtnSjFGQXG0w&pid=ImgRaw&r=0", tabooWords: ["Guacamole", "Hueso", "Verde"] },
        { name: "Cebolla", imageUrl: "https://tusuper.com.ar/image/cache/catalog/P2020/FyV/Cebolla-800x800.jpg", tabooWords: ["Llorar", "Capas", "Aros"] },
        { name: "Ajo", imageUrl: "https://th.bing.com/th/id/R.5538cd49b0db2cb901081814ecaeb837?rik=B%2fatukpF0Q0L3A&pid=ImgRaw&r=0", tabooWords: ["Diente", "Olor", "Vampiro"] },
        { name: "Limón", imageUrl: "https://th.bing.com/th/id/R.4edd5dfc2a780c7bf74c4a5ec7552d86?rik=Yc69hts24Cclqg&pid=ImgRaw&r=0", tabooWords: ["Ácido", "Amarillo", "Exprimir"] },
        { name: "Ensaladilla rusa", imageUrl: "https://th.bing.com/th/id/R.b8b9a85b036d05bbd354162e252491fa?rik=isvE%2bObZejOSdA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-o-gt7O9P3Ps%2fV5Xd4VbLgmI%2fAAAAAAAACRE%2fh2opM-9nAuccELBazdgP8F4pSGXYPmSxACK4B%2fs1600%2fEnsaladilla-rusa.jpg&ehk=Jdf0TunVAg5GOC4QxmWJ2AXhVWutuQzlxCgypJuipyo%3d&risl=&pid=ImgRaw&r=0", tabooWords: ["Patata", "Mayonesa", "Atún"] },
        { name: "Zanahoria", imageUrl: "https://media.restless.co.uk/uploads/2022/07/carrots.jpg", tabooWords: ["Naranja", "Conejo", "Vista"] },
        { name: "Gazpacho", imageUrl: "https://tse1.mm.bing.net/th/id/OIP.YjXIm7Of8z7-AZ62f7S9jQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Sopa", "Fría", "Tomate"] },
        { name: "Tortilla de patatas", imageUrl: "https://tse4.mm.bing.net/th/id/OIP.fKk7Nt82NV9kvY9qdI8_pAHaE0?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Huevo", "Cebolla", "Freír"] },
        { name: "Cocido", imageUrl: "https://th.bing.com/th/id/R.f368ff75f33853e6f536554183fdd6b2?rik=HOsO8OzACB810w&pid=ImgRaw&r=0", tabooWords: ["Garbanzos", "Sopa", "Puchero"] },
        { name: "Tiramisú", imageUrl: "https://tse3.mm.bing.net/th/id/OIP.oHqqIvxbyogV_qXplm9PLwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", tabooWords: ["Postre", "Café", "Queso"] },
        { name: "Hamburguesa", imageUrl: "https://th.bing.com/th/id/R.f854e22535a1385dc8ffaec13052964e?rik=qCJ%2fmGckKU2gKA&riu=http%3a%2f%2fwww.steakburger.es%2fwp-content%2fuploads%2f2020%2f03%2fhamburguesa-gourmet.jpg&ehk=Rk70BHk5J7VBM%2bZ%2buKRBlXQTxkIKmfUjh7NsLx1fZR0%3d&risl=&pid=ImgRaw&r=0", tabooWords: ["Pan", "Carne", "Queso"] },
        { name: "Mate", imageUrl: "https://www.mate-tee.de/images/Mate%20entha%CC%88lt%20alle%20lebensnotwendigen%20Vitamine%20.jpg", tabooWords: ["Argentina", "Yerba", "Infusión"] }
    ];

    // Selección de los elementos del HTML que vamos a manipular
    const foodNameEl = document.getElementById('food-name');
    const foodImageEl = document.getElementById('food-image');
    const tabooWordsEl = document.getElementById('taboo-words');
    const nextCardBtn = document.getElementById('next-card-btn');

    // Creamos una copia del array de datos para poder ir eliminando las tarjetas que ya han salido
    let gameDeck = [...foodData];

    // Función para mostrar una nueva tarjeta en la pantalla
    const displayNewCard = () => {
        // Si el mazo se queda vacío, lo rellenamos de nuevo para volver a empezar
        if (gameDeck.length === 0) {
            gameDeck = [...foodData];
            alert("¡Has completado todas las tarjetas! El juego se reiniciará.");
        }

        // Elegimos un índice al azar del mazo actual
        const randomIndex = Math.floor(Math.random() * gameDeck.length);
        // Sacamos la tarjeta de esa posición. 'splice' la elimina del mazo para que no se repita
        const card = gameDeck.splice(randomIndex, 1)[0];

        // Actualizamos el nombre y la imagen en el HTML
        foodNameEl.textContent = card.name;
        foodImageEl.src = card.imageUrl;

        // Limpiamos la lista de palabras prohibidas anterior
        tabooWordsEl.innerHTML = '';

        // Creamos y añadimos las nuevas palabras prohibidas a la lista
        card.tabooWords.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            tabooWordsEl.appendChild(li);
        });
    };

    // Añadimos un "escuchador" al botón. Cuando se haga clic, se llamará a la función displayNewCard
    nextCardBtn.addEventListener('click', displayNewCard);

    // Mostramos la primera tarjeta nada más cargar la página
    displayNewCard();
});