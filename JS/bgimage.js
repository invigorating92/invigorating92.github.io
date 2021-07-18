let rndImage =[]
const totalNum = 16;

for(let i=0; i<totalNum; i++){
    rndImage.push(`${i}.jpg`);
}
const chooseImage = rndImage[Math.floor(Math.random()*rndImage.length)];
const img = document.createElement("img");
img.src = `image/${chooseImage}`;
document.body.appendChild(img);


