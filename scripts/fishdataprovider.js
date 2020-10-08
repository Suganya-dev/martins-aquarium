const fishCollection = [
    
    {
        name:"Clown Fish",
        image:"https://s4.thingpic.com/images/95/3V3RY19FsatfjyLWRDYjxgZH.jpeg",
        Species:"Actinopterygii",
        length:"7-8cm",
        diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        location:"Southeast Asia, Japan, and the Indo-Malaysian region",
       },
       {
        name:"Jack",
        image:"https://i0.wp.com/oceanbites.org/wp-content/uploads/2016/02/clown-fish-300x225.jpg?resize=300%2C225",
        Species:"Carangidae",
        length:"100 cm",
        diet: "prawns, shrimps, crabs, molluscs and stomatopods.",
        location:"beaches, seagrass beds, shallow reef complexes and lagoons.",
       },
       {
        name:"Captain",
        image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/tropical-fish-close-up-lawrence-lawry.jpg",
        Species:"Centropomidae",
        length:"70-80cm",
        diet: "molluscs and stomatopods.",
        location:"western Atlantic,Africa and the Indo-Malaysian region",
       },
       {
        name:"Molly Fish",
        image:"https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        Species:"Pomacanthus angelfish",
        length:"50-80 cm",
        diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        location:"Japan, and the Indo-Malaysian region",
       },
       {
        name:"Tropical Fish",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSusGbAGsmy8Ib90dooxumiMcIhoVsnW17A2g&usqp=CAU",
        Species:"Carangidae",
        length:"100 cm",
        diet: "prawns, shrimps, crabs, molluscs and stomatopods.",
        location:"beaches, seagrass beds, shallow reef complexes and lagoons.",
       },
       {
        name:"American shad",
        image:"https://fishsubsidy.org/wp-content/uploads/2020/02/tropical-4395272_960_720.jpg",
        Species:"Pomacanthus angelfish",
        length:"50-80 cm",
        diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        location:"Japan, and the Indo-Malaysian region",
       },
    ]
    export const useFish =() => {
        return fishCollection.slice()

    }

    // export const addFish =(fishObject) => {
    //     fishCollection.push(fishObject)
    // }