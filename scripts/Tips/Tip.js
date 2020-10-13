export const Tips = (TipsObj) => {
    return `
    <div class="tips">
    <h3 class="tips__water">${TipsObj.Topic}</h3>
    <ol>
        <p class="tips__water"> ${TipsObj.text1}</p>
        <p class="tips__water"> ${TipsObj.text2}</p>
        <p class="tips__water" >${TipsObj.text3}</p>
        <p class="tips__water"> ${TipsObj.text4}</p>
    </ol>
    `
}

export const Quotes =(quoteObj) => {
    return `
    <div class= "Quote1">
    <p class="Quote1__quote"> Quote: ${quoteObj.quote1}</p>
    <p class="Quote1__author"> Author: ${quoteObj.author1}</p>
    <p class="Quote1__country"> Country: ${quoteObj.country1}</p>

    </div>
    `
}

    
    
    
    