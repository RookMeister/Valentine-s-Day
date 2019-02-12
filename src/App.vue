<template>
  <div id="app">
  <canvas id='sakura'></canvas>
    <div id="word1"></div>
    <div class="card">
      <div class="card__side card__side--front card__side--front-1">
        <div class="card__description">
          <div id="chest">
            <div class="heart left side top"></div>
            <div class="heart center">&hearts;</div>
            <div class="heart right side"></div>
          </div>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__description">
          <div id="background">
            <div id="img"><div id="lips"></div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="word2"></div>
  </div>
</template>
<style lang="scss">
body {
  font-family: avenir;
}
#sakura {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -3;
  opacity:.8;
}
#lips{
  top: 50px;
  left: 50px;
  position: relative;
  height: 50px;
  width: 50px;
  background-size: cover;
  background-image: url('./assets/lips.png');

}
#word1{
  position: relative;
  height: 75px;
  width: auto;
  background-size: cover;
  background-image: url('./assets/word1.png');
}
#word2{
  position: relative;
  height: 75px;
  width: auto;
  background-size: cover;
  background-image: url('./assets/word2.png');
}
#img{
  background-image: url('./assets/img.jpg');
  height: 275px;
  width: 275px;
  background-size: cover;
  border-radius: 50%;
}

*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.card {
  display: flex;
  position: relative;
  perspective: 150em;

  &__side {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    transition: all .6s ease;
    box-shadow: 1em 1em 2em rgba(0,0,0,.2);
    
    &--front {
      background: rgba(0,0,0, 0);
    }
    
    &--back {
      background: rgba(0,0,0, 0);
      transform: rotateY(180deg);
    }
  }
  
  &:hover &__side--front {
    transform: rotateY(-180deg);
  }
  
  &:hover &__side--back {
    transform: rotate(0);
  }
  
  &__description {
    text-transform: uppercase;
    font-size: 5em;
    
    svg {
      width: 1.5em;
      height: 1.5em;
      fill: #FFF;
    }
  }

  @keyframes beat {
    0% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}
    50% {transform: scale(1.1) rotate(225deg); box-shadow:0 0 70px #d5093c;}
    100% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}
  }


}

#background {
    z-index:-1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(500px/100 * 60);
    margin: 0 auto;
    /*background: #ffa5a5;
    background: -moz-linear-gradient(top, #ffa5a5 0%, #ffd3d3 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffa5a5), color-stop(100%,#ffd3d3));
    background: -webkit-linear-gradient(top, #ffa5a5 0%,#ffd3d3 100%);
    background: linear-gradient(top, #ffa5a5 0%,#ffd3d3 100%);*/
}
#chest {
    position:relative;
    width:calc(500px/100 * 60);
    height:calc(500px/100 * 60);
    margin:0 auto;
}
.heart {
    position:absolute;
    z-index:2;
    background: -moz-linear-gradient(-90deg, #F50A45 0%, #d5093c 40%);
    background: -webkit-gradient(linear, right 50%, left 50%, color-stop(0%,#F50A45), color-stop(40%,#d5093c));
    background: -webkit-linear-gradient(-90deg, #F50A45 0%,#d5093c 40%);
    background: linear-gradient(-90deg, #F50A45 0%,#d5093c 40%);
    -webkit-animation: beat 0.7s ease 0s infinite normal;
    -moz-animation: beat 0.7s ease 0s infinite normal;
    animation: beat 0.7s ease 0s infinite normal;
}
.heart.center {
    background: -moz-linear-gradient(-45deg, #B80734 0%, #d5093c 40%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#B80734), color-stop(40%,#d5093c));
    background: -webkit-linear-gradient(-45deg, #B80734 0%,#d5093c 40%);
    background: linear-gradient(-45deg, #B80734 0%,#d5093c 40%);
}
.heart.top {
    z-index:3;
}
.side {
    top:calc(100px/100 * 60);
    width:calc(220px/100 * 60);
    height:calc(220px/100 * 60);
    border-radius: calc(220px/100 * 60);
}
.center {
    width:calc(210px/100 * 60);
    height:calc(210px/100 * 60);
    bottom:calc(100px/100 * 60);
    left:calc(145px/100 * 60);
    font-size:0;
    text-indent:-9999px;
}
.left {
    left:calc(62px/100 * 60);
}
.right {
    right:calc(62px/100 * 60);
}

</style>