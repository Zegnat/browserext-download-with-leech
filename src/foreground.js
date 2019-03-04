browser.runtime.onMessage.addListener(clickedLink => {
  const selection = window.getSelection()
  let selectedLinks = Array.from(document.links).filter(link => selection.containsNode(link, true)).map(link => link.href)
  if (clickedLink !== null && selectedLinks.indexOf(clickedLink) === -1) {
    selectedLinks = [clickedLink]
  }
  browser.runtime.sendMessage(selectedLinks)
})
