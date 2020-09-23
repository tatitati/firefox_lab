chrome.runtime.onInstalled.addListener(function(){
    console.log("just installed, hellow world")    
    chrome.storage.sync.set({color: "#000000"}, function(){
        console.log("color stored")
    })
})

chrome.bookmarks.onCreated.addListener(function(){
    console.log('Bookmarks created');    
})

