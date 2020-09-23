const themes = {
    'live': {
      colors: {
        frame: "#CD3333"
      }
    }
  };

browser.tabs.onActivated.addListener(event => update(event.tabId));
browser.tabs.onUpdated.addListener(tabId => update(tabId));  


// async function getCurrentThemeInfo() {
//   
//   console.log('im here');
// }

var current = null;

async function update(tabId) {    
    if (current == null) {
        current = await browser.theme.getCurrent();    
    }
    
    let tab = await browser.tabs.get(tabId);        
    let windowId = tab.windowId;
    var url = tab.url;

    if (tab.active &&  (/.simplybusiness.live/.test(url) || '/sb-airflow-webserver.simplybusiness.co.uk/'.test(url))) {
        browser.theme.update(windowId, themes.live);        
    } else {
        browser.theme.update(windowId, current);        
        // browser.theme.reset(windowId);  
    }    
}
  