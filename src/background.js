'use strict'

browser.runtime.onMessage.addListener(selectedLinks => {
  console.log(selectedLinks)
  browser.runtime.sendNativeMessage(
    'leech_proxy',
    selectedLinks
  )
})

browser.contextMenus.onClicked.addListener(({frameId, linkUrl = null}, {id: tabId}) => {
  browser.tabs.sendMessage(
    tabId,
    linkUrl,
    { frameId }
  )
})

browser.contextMenus.create({
  type: 'normal',
  contexts: ['link', 'selection'],
  title: 'Download with Leech'
})
