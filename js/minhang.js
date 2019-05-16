function lb() {
    var i=0;
    setInterval(function changeImg() {
        i++;
        document.getElementById("lunbo").src="./img/l"+i+".png";
        if (i==2){
            i=0;
        }
    },3000);
}



