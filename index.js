let balim = true;

function createHeart() {

    const str = "Seni Çok Seviyorum"
    if (balim) {
        console.log("Balımm 🩵")
        balim = false;
    }
    else {
        console.log(str)
        balim = true;
    }
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);