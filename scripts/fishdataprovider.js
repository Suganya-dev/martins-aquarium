const fishCollection = [
    
    {
        Name:"Clown Fish",
        Species:"Actinopterygii",
        length:"7-8cm",
        Diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        Location:"Southeast Asia, Japan, and the Indo-Malaysian region",
       },
       {
        Name:"Jack",
        Species:"Carangidae",
        length:"100 cm",
        Diet: "prawns, shrimps, crabs, molluscs and stomatopods.",
        Location:"beaches, seagrass beds, shallow reef complexes and lagoons.",
       },
       {
        Name:"Captain",
        Species:"Centropomidae",
        length:"70-80cm",
        Diet: "molluscs and stomatopods.",
        Location:"western Atlantic,Africa and the Indo-Malaysian region",
       },
       {
        Name:"Molly Fish",
        Species:"Pomacanthus angelfish",
        length:"50-80 cm",
        Diet: "feed on small zooplankton from the water column, such as copepods and tunicate larvae,algae",
        Location:"Japan, and the Indo-Malaysian region",
       },
    ]
    export const useFish =() => {
        return fishCollection.slice()

    }