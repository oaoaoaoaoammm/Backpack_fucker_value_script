// oaoaoaooaoaoao tot samiy click, da, mne len perepisivat na sleduyushie 2 metoda
function clickElementByClassName(className) {
    var element = document.querySelector(className);
    if (element) {
        element.click();
    } else {
        console.log(className + "' not found.");
    }
}

// купить или продать
function clickButtonByTextContent(textContent) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (button.textContent.trim() === textContent) {
            button.click();
        }
    });
}

// ну это короче маркет и количество
function clickElementByTextContent(textContent) {
    var elements = document.querySelectorAll('div');
    elements.forEach(function(element) {
        if (element.textContent.trim() === textContent) {
            element.click();
        }
    });
}

// это что, рандом?
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// обещает кому-то что-то
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// aoooaoaoaoaoaooa launcheeeer
async function launcher(){
    for (var i = 1; i <= 100000; i++) {
        // open position
        clickElementByClassName(".flex.flex-col.mb-\\[\\-2px\\].flex-1.cursor-pointer.justify-center.border-b-2.p-4.border-b-baseBorderMed.hover\\:border-b-baseBorderFocus");

        await sleep(getRandomNumber(1000, 7000)); 

        // select market long
        clickElementByTextContent("Market");

        await sleep(getRandomNumber(1000, 7000)); 

        clickElementByTextContent("75%");

        await sleep(getRandomNumber(1000, 7000)); 

        clickButtonByTextContent("Buy");


        await sleep(getRandomNumber(300000, 900000)); 
    

        // sell upper button
        clickElementByClassName(".flex.flex-col.mb-\\[-2px\\].flex-1.cursor-pointer.justify-center.border-b-2.p-4.border-b-baseBorderMed.hover\\:border-b-baseBorderFocus");

        await sleep(getRandomNumber(1000, 7000)); 
    
        clickElementByTextContent("Market");

        await sleep(getRandomNumber(1000, 7000)); 
  
        // full close !!!!
        clickElementByTextContent("Max");
  
        await sleep(getRandomNumber(1000, 7000)); 
  
        clickButtonByTextContent("Sell");
        
        await sleep(getRandomNumber(60000, 360000));  
    }
}


// taday wi are starteng aur cod
launcher();