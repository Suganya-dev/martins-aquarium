export const Tips = (TipsObj) => {
    return `
    <div class="tips">
    <h3 class="tips__water">${TipsObj.Topic}</h3>
    <ol>
        <p class="tips__water"> ${TipsObj.text}</p>
        <p class="tips__water"> ${TipsObj.text}</p>
        <p class="tips__water" >${TipsObj.text}</p>
        <p class="tips__water"> ${TipsObj.text}</p>
    </ol>
    <div class="tips__fish"> 
       <h3 class="tips__fish"> ${TipsObj.Topic}</h3>
            <ol>
            <p> class="tips__fish" ${TipsObj.text}</p>
            <p>class="tips__fish" ${TipsObj.text}</p>
            <p>class="tips__fish" ${TipsObj.text}</p>
            <p>class="tips__fish" ${TipsObj.text}</p>
            </ol>
        </div>
        `
}
    
    
    
    