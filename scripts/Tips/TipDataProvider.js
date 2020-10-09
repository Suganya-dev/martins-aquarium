const tipscollection=[
    {
      Topic = "Watertips",
     text = "Clean the water once in 2 weeks",
     text = "Check the Water salinity",
     text = "Check the Water temperature",
     text = "No salty water"
    },
    {
        Topic= "fishtank Tips",
    text="To avoid sickie fishies, never use soaps or chemicals to clean anything",
    text="Give everything that goes into the tank a good rinse in normal tap water, beforehand.",
    text="Ask our resident fish petspert if you have any questions swimming around in your head.", 
    text="Add to your finny family slowly – don’t add more than a couple of fish each week ",
    },
]
export const useTips =() => {
    return tipscollection.slice()
}