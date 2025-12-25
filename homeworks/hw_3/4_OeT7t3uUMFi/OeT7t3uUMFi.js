// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let flowers = [
    {img: "https://img.freepik.com/free-photo/closeup-shot-red-rose-with-dew-top-black_181624-28079.jpg?semt=ais_hybrid&w=740&q=80", name: "Rose"},
    {img: "https://img.freepik.com/free-photo/closeup-pink-tulip-flower-isolated-white-background-with-space-your-text_181624-33715.jpg?semt=ais_hybrid&w=740&q=80", name: "Tulip"},
    {img: "https://img.freepik.com/premium-photo/close-up-lily-flower-blooming-garden-spring-day_34070-951.jpg?semt=ais_hybrid&w=740&q=80", name: "Lily"},
    {img: "https://img.freepik.com/free-photo/floral-composition-with-elegant-style_23-2147897577.jpg?semt=ais_hybrid&w=740&q=80", name: "Orchid"},
    {img: "https://img.freepik.com/free-photo/beautiful-sunflowers-outdoors-still-life_23-2150152824.jpg?semt=ais_hybrid&w=740&q=80", name: "Sunflower"},
    {img: "https://img.freepik.com/free-photo/mayweed-flowers-blooming-garden_181624-12824.jpg?semt=ais_hybrid&w=740&q=80", name: "Daisy"},
    {img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-pink-petaled-peony-flower-blurred-background_181624-4911.jpg?semt=ais_hybrid&w=740&q=80", name: "Peony"},
    {img: "https://img.freepik.com/premium-photo/pink-flower_1214512-16.jpg?semt=ais_hybrid&w=740&q=80", name: "Chrysanthemum"},
    {img: "https://img.freepik.com/premium-photo/beautiful-red-carnation-flower-isolated-white-background_25595-796.jpg?semt=ais_hybrid&w=740&q=80", name: "Carnation"},
    {img: "https://www.la-saponaria.com/img/cms/800px-purple_iris_flower.jpg", name: "Iris"},
    {img: "https://img.freepik.com/free-photo/close-up-lavender-flowers-with-dew-drops_23-2151976168.jpg?semt=ais_hybrid&w=740&q=80", name: "Lavender"},
    {img: "https://windflowerflorist.com/cdn/shop/articles/Main_-_27-03-2025_18-15-22_1600x.jpg?v=1743070952", name: "Lotus"},
    {img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-hawaiian-hibiscus-tuscany-elba-italy_181624-18357.jpg?semt=ais_hybrid&w=740&q=80", name: "Hibiscus"},
    {img: "https://img.freepik.com/premium-photo/close-up-white-cape-jasmine-flowers-jasminum-polyanthum-white-sampaguita-jasmine_701885-353.jpg?w=360", name: "Jasmine"},
    {img: "https://img.freepik.com/premium-photo/close-up-purple-flowering-plants_1048944-8617972.jpg?semt=ais_hybrid&w=740&q=80", name: "Violet"},
    {img: "https://img.freepik.com/premium-photo/close-up-red-poppy_1048944-20314465.jpg?semt=ais_hybrid&w=740&q=80", name: "Poppy"},
    {img: "https://img.freepik.com/photos-premium/fleurs-magnolia-au-printemps_173948-794.jpg?semt=ais_hybrid&w=740&q=80", name: "Magnolia"},
    {img: "https://img.freepik.com/free-photo/yellow-daffodil-narcissus-blooming-garden_127675-2729.jpg?semt=ais_hybrid&w=740&q=80", name: "Daffodil"},
    {img: "https://media.istockphoto.com/id/599751224/photo/red-garden-geranium-flowers-in-pot.jpg?s=612x612&w=0&k=20&c=R3FldsJr6O45zErYgs5IJv0tq9zJ_ualAcwAiS9LbmY=", name: "Geranium"},
    {img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-hydrangea-serrata-flower-with-green-leaves_181624-16376.jpg?semt=ais_hybrid&w=740&q=80", name: "Hydrangea"}
];

let i = 0;

while (i < flowers.length) {
    document.write(
        `<div><div>${i + 1}</div><p>${flowers[i].name}</p><img src=${flowers[i].img} alt=${flowers[i].name}></div>`
    )
    i++;
}