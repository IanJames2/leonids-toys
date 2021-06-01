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
    
 neodymium_Magnet_Toy= {
    
        id: 2,
        name: "Neodymium-Magnet Toy",
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

for (const toy of toys) {
    console.log(toy.name)
}