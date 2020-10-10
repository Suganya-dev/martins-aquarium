const LocationCollection = [
    {
        name1: "Bahamas island",
        image1: "https://image.shutterstock.com/image-illustration/island-ocean-3d-illustration-260nw-526092568.jpg",
    },
    {
        name1: "Caribbean Island",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB-Wd093bB5oZjZEoYbYgJMzNJsbp20Ye6Ng&usqp=CAU",
    },
    {
        name1: "Andaman & Nicobar Islands",
        image1: "https://www.planetware.com/photos-large/SEY/best-islands-bora-bora.jpg",
    },
    {
        name1: "Puertorico",
        image1: "https://www.australia.com/content/australia/en/things-to-do/beaches-and-islands/australias-most-beautiful-islands/_jcr_content/mainParsys/imagewithcaption_8a6/LargeImageTile/largeImageSrc.adapt.740.medium.jpg",
    }
]
export const Uselocation =() => {
    return LocationCollection.slice()
}