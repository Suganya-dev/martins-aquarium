const fishCollection = [
    
    {
        Name:"Clown Fish",
        Image:"https://s4.thingpic.com/images/95/3V3RY19FsatfjyLWRDYjxgZH.jpeg",
        Species:"Actinopterygii",
        length:"7-8cm",
        Diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        Location:"Southeast Asia, Japan, and the Indo-Malaysian region",
       },
       {
        Name:"Jack",
        Image:"https://i0.wp.com/oceanbites.org/wp-content/uploads/2016/02/clown-fish-300x225.jpg?resize=300%2C225",
        Species:"Carangidae",
        length:"100 cm",
        Diet: "prawns, shrimps, crabs, molluscs and stomatopods.",
        Location:"beaches, seagrass beds, shallow reef complexes and lagoons.",
       },
       {
        Name:"Captain",
        Image:"https://scx2.b-cdn.net/gfx/news/hires/2014/fishfromacid.jpg",
        Species:"Centropomidae",
        length:"70-80cm",
        Diet: "molluscs and stomatopods.",
        Location:"western Atlantic,Africa and the Indo-Malaysian region",
       },
       {
        Name:"Molly Fish",
        Image:"https://oceana.org/sites/default/files/shutterstock_430721545_1.jpg",
        Species:"Pomacanthus angelfish",
        length:"50-80 cm",
        Diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        Location:"Japan, and the Indo-Malaysian region",
       },
    ]
    export const useFish =() => {
        return fishCollection.slice()

    }