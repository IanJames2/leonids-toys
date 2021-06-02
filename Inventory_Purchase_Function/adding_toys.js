const toys = [
    furby = {
        id: 1,
        name: "Furby",
        price: 20.00,
        Brand: "Hasbro",
        Design: "Sleek",
        Quality: "New",
        Lifespan: "TBD",
        Warranty: "6 months",
        Warranty_Description: "Extended Warranty",
        Durability: "Stronghold",
        Web_Link: "http://content.time.com/time/specials/packages/article/0,28804,2049243_2048661_2049232,00.html"
    },
    
    neodymium_Magnet_toy= {
    
        id: 2,
        name: "Neodymium-Magnet toy",
        price: 25.99,
        Brand: "buckminsterfullerene",
        Design: "Slender",
        Quality: "New",
        Lifespan: "TBD",
        Warranty: "N/A",
        Warranty_Description: "Warranty Not Included",
        Durability: "Fragile",
        Web_Link: "http://content.time.com/time/specials/packages/article/0,28804,2049243_2048661_2049233,00.html"
    },
    
    bratz = {
        id: 3,
        name: "Bratz",
        price: 0.99,
        Brand: "MGA Entertainment",
        Design: "Petite",
        Quality: "Ancient",
        Lifespan: "TBD",
        Warranty: "N/A",
        Warranty_Description: "Warranty Not Included",
        Durability: "Fragile",
        Web_Link: "http://content.time.com/time/specials/packages/article/0,28804,2049243_2048662_2049235,00.html"
    }
]

const mindflex = {
    name: "Mindflex",
    price: 50.00,
    Brand: "Mattel",
    Design: "Sophisticated",
    Quality: "Clean",
    Lifespan: "Infinity",
    Warranty: "Unlimited Warranty",
    Warranty_Description: "Warranty last forever.",
    Durability: "Stronghold",
    Web_Link: "http://content.time.com/time/specials/packages/article/0,28804,2049243_2048662_2049236,00.html"
    }

const zhuzhu = {
    name: "Zhu Zhu",
    price: 5.00,
    Brand: "Russ Hornsby",
    Design: "Childish",
    Quality: "Toddler",
    Lifespan: "5 days",
    Warranty: "N/A",
    Warranty_Description: "Warranty Not Included",
    Durability: "Fragile",
    Web_Link: "http://content.time.com/time/specials/packages/article/0,28804,2049243_2048662_2049237,00.html"
    }

const adding_toys = (toyObj) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObj.id = idForNewToy
    toys.push(toyObj)
}

adding_toys(mindflex);
adding_toys(zhuzhu);

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.Brand} ${toy.name} costs ${toy.price} dollars.`)
}

console.log(toys)