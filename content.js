const headers = document.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,div,body,input')
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Howdy Doody 🤠";
}


const ww_images = [
    "bg.png", "pngegg.png"
  ];
  
  const siteImages = document.getElementsByTagName('img');
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender, sendResponse);
  
    if (request.task === 'ww') {
      for (let i = 0; i < siteImages.length; i++) {
        const randImg = Math.floor(Math.random() * ww_images.length);
        siteImages[i].src = ww_images[randImg];
      }
    }
  
    const response = { status: 'done' };
    sendResponse(response);
  });
  Footer
  