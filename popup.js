let colorButton = document.getElementById("colorButton");


chrome.storage.sync.get('color', (data) => {
    console.log("updating color button with color from storage....");
    colorButton.setAttribute('value', data.color)
    colorButton.style.backgroundColor = data.color;

})

colorButton.onclick = function(button){    
    let color = button.target.value    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0])
        console.log(tabs[0].url)
        
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `document.body.style.backgroundColor = '#000000'`}
        )
    })
}