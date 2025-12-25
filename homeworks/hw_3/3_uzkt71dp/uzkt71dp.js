// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let flowers = ["Rose", "Tulip", "Lily", "Orchid", "Sunflower", "Daisy", "Peony", "Chrysanthemum", "Carnation", "Iris", "Lavender", "Lotus", "Hibiscus", "Jasmine", "Violet", "Poppy", "Magnolia", "Daffodil", "Geranium", "Hydrangea"];

let i = 0;

while (i < flowers.length) {
    document.write(
        `<div>${flowers[i]}</div>`
    )
    i++;
}