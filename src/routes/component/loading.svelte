<div class="lds-ring"><div></div><div></div><div></div><div></div></div>

<style>
    .lds-ring {
  display: inline-block;
  position: relative;
  width: 4vw;
  height: 1.40625000615vw;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width:  3.3333333333333335vw;
  height:  3.3333333333333335vw;
  margin: 0.4166666666666667vw;
  border: 0.4166666666666667vw solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>