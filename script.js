var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.play();
    console.log("bom dia");
})
.catch( error => {
    console.log(error);
})
document.querySelector('button').addEventListener('click', () => {
    console.log("oi");
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video,0,0);
    var link = document.createElement('a');
    link. download = 'foto.png';
    link.href = canvas.toDataURL();
    link.textContent = 'clique para baixar a imagem';
    document.body.appendChild(link);
});