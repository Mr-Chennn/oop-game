class Player {
    constructor() {
        this.positopnX = 0;
        this.positopnY = 0;
        this.playerElm = document.getElementById("player");
    }
    moveLeft() {

        this.positopnX--;

        this.playerElm.style.left = this.positopnX + "vw";
        console.log(this.positopnX);



    }
    moveRight() {
        this.positopnX++;
        console.log(this.positopnX);
        this.playerElm.style.left = this.positopnX + "vw";
    }
    doSomething() {
        console.log("doing")
    }


}
const myplayer = new Player();
myplayer.moveRight();
myplayer.moveLeft();
document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        myplayer.moveRight();
    } else if (e.key === "ArrowLeft") {
        myplayer.moveLeft();
    }
})