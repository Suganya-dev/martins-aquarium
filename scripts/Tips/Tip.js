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
    
    
    
    