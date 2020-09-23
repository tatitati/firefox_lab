const themes = {
    'live': {
      colors: {
        tab_text: "#FFFFFF",
        frame: "#b20000",
        tab_background_text: '#111',
      }
    },
    'normal': {
        colors: {
          tab_text: "#000000",
          frame: "#FFFFFF",
          tab_background_text: '#111',
        }
      }
  };

browser.tabs.onActivated.addListener(event => update(event.tabId));
browser.tabs.onUpdated.addListener(tabId => update(tabId));  


async function update(tabId) {    
    let tab = await browser.tabs.get(tabId);        
    if (!tab.active) {        
        browser.theme.reset();
    } else {        
        let windowId = tab.windowId;
        var url = tab.url;
        console.log(url);
        
        if ( /.simplybusiness.live/.test(url)) {
            browser.theme.update(windowId, themes.live);        
        } else {
            browser.theme.update(windowId, themes.normal);        
        }
    }
}
  