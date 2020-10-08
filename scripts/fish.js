export const Fish = (fish) => {
    return `
    <section class="left_container">
    <section class="fishlist">
                    <h2><b>fish list</b></h2>
                    <section class="fishlist_fishtank">
                        <section class="fish1">
                            <ul>
                                <p>Name:</p>
                                <p class="fish1__name"> Clown fish</p>
                                <p> image:</p>
                                <img src="https://s4.thingpic.com/images/95/3V3RY19FsatfjyLWRDYjxgZH.jpeg"
                                    alt="CLownfish width=" 100" height="100">
                                <p>Species:</p>
                                <pclass="fish1__species">Actinopterygii</p>
                                    <p>Length:</p>
                                    <pclass="fish1__length">7–8 cm (2.8–3.1 in)</p>
                                        <p>Location:</p>
                                        <pclass="fish1__location"> Southeast Asia, Japan, and the Indo-Malaysian region
                                            </p>
                                            <p>Diet:</p>
                                            <p class="fish1__diet"> feed on small zooplankton from the water column,
                                                such as copepods and tunicate larvae,algae</p>
                            </ul>
                        </section>
                        <section class="fish2">
                            <ul>
                                <p>Name:</p>
                                <p class="fish2__name">Jack</p>
                                <p> image:</p>
                                <img src="data:image/jpeg;base64,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"
                                    alt="jack fish" width="200" height="200">
                                <p>Species:</p>
                                <p class="fish2__species"> Carangidae </p>
                                <p>Length:</p>
                                <p class="fish2__length"> 100cm</p>
                                <p>Location:</p>
                                <p class="fish2__location"> jack inhabit shallow flats, sandy bays,[16] beaches,
                                    seagrass beds, shallow reef complexes and lagoons. </p>
                                <p> Diet:</p>
                                <p class=" fish2__diet"> prawns, shrimps, crabs, molluscs and stomatopods. </p>
                            </ul>
                        </section>
                        <section class="fish3">
                            <ul>
                                <p>Name:</p>
                                <p class="fish3__name">Captain</p>
                                <p> image:</p>
                                <img src="data:image/jpeg;base64,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"
                                    alt="captain fish" width="200" height="200">
                                <p>Species:</p>
                                <p class="fish3__species"> Centropomidae, </p>
                                <p>Length:</p>
                                <p class="fish3__length"> 100cm</p>
                                <p>Location:</p>
                                <p class="fish3__location"> western Atlantic,Africa </p>
                                <p> Diet:</p>
                                <p class=" fish3__diet"> molluscs and stomatopods. </p>
                            </ul>
                            <section class="fish4">
                            <ul>
                               
                                <p>Name:</p>
                                <p class="fish4__name"> Molly fish</p>
                                <p> image:</p>
                                <img src="https://previews.123rf.com/images/afonskaya/afonskaya1208/afonskaya120800040/14778060-tropical-fish-fish-emperor-or-fish-angel-latin-name-pomacanthus-imperator-blue-and-yellow-colours-.jpg"
                                    alt="CLownfish" width="200" height="200">
                                <p>Species:</p>
                                <pclass="fish1__species">Pomacanthus angelfish</p>
                                    <p>Length:</p>
                                    <pclass="fish1__length">7–8 cm (2.8–3.1 in)</p>
                                        <p>Location:</p>
                                        <pclass="fish1__location">  Japan, and the Indo-Malaysian region
                                            </p>
                                            <p>Diet:</p>
                                            <p class="fish1__diet"> feed on small zooplankton from the water column,
                                                such as copepods and tunicate larvae,algae</p>
                            </ul>
                        </section>
                        
                    </section>
                </section>
            </section>
</section> `
} 