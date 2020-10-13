const tipscollection=[
    {
     Topic : "Watertips",
     text1 : "Clean the water once in 2 weeks",
     text2 :"Check the Water salinity",
     text3 : "Check the Water temperature",
     text4 : "No salty water"
    },
    {
        Topic :"fishtank Tips",
        text1 : "To avoid sickie fishies, never use soaps or chemicals to clean anything",
        text2 : "Give everything that goes into the tank a good rinse in normal tap water, beforehand.",
        text3 :"Ask our resident fish petspert if you have any questions swimming around in your head.", 
        text4 : "Add to your finny family slowly – don’t add more than a couple of fish each week "
        }
    
]
export const useTips =() => {
    return tipscollection.slice()
}


const quotesCollection =[
    {
     quote1: "Many men go fishing all of their lives without knowing that it is not fish they are after",
     author1:  "Henry David Thoreau",
     country1: "Paris"
    },
    {
    quote1: "If people concentrated on the really important things in life, there’d be a shortage of fishing poles",
    author1: "Doug Larson.",
    country1: "Puertorico"
    }
]

export const useQuotes = () => {
    return quotesCollection.slice()
}