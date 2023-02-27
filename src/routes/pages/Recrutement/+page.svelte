<script>
  let toggle = true
let color = 'white'
function toggleColor() {
 color = 'black'
}

 $: color = toggle ? 'white' : 'black'

</script>

<div class=" absolute right-[0.5vw] top-[0.5vw] z-50">

{#if toggle === true}

<button class="w-[1.5vw] h-[1.5vw] border-[0.1vw] p-[1.25vw] border-[#232323]  rounded-full" on:click={() => toggle = !toggle} on:click={toggleColor}>
  <i  class="text-[1.75vw] text-[#232323] relative sm:bottom-[3.5vw] md:bottom-[2.5vw] lg:bottom-[1.25vw] right-[0.8vw] " >☾</i>
</button>
{:else}
<button class="w-[1.5vw] h-[1.5vw] border-[0.1vw] p-[1.25vw] border-[#FFFFFF] rounded-full" on:click={() => toggle = !toggle} on:click={toggleColor}>
  <i class='text-[1.75vw]  text-[white] relative sm:bottom-[3.5vw] md:bottom-[2.5vw] lg:bottom-[1.25vw] right-[0.8vw]'>☼</i>
</button>
{/if}  

</div>

<div class='bg-[#DCDCDC] w-[100vw] h-[100vh]'>
<div class="flex justify-center"> 
<nav class="flex justify-around text-[1.6vw] text-center items-center border-solid border-[0.1vw] w-[52.13vw] h-[6.1vw] rounded-[2.4479166666666665vw]" style="border-color : {color}; color : {color}">
 <a href="/pages/About_us/"><li>A propos de <br>nous</li></a>
 <a href="./Etude&Metier"><li>Etude /<br>Metier</li></a>
{#if color === 'white'}
 <a href="./../"><img src="./../img/logo.png" alt="logo Necker" class="w-[4.7vw] h-[4.7vw]"></a>
{:else}
 <a href="./../"><img src="./../img/logo-black.png" alt="logo Necker" class="w-[4.7vw] h-[4.7vw]"></a>
{/if}
 <a href="./Urgence_que_faire"><li>Urgence <br> que faire</li></a>
 <a href="./Recrutement"><li>Nous <br> recrutons</li></a>
</nav>
</div>
<div style="color:{color}" class="flex flex-col gap-[2vw] sm:text-[3vw] xl:text-[1vw] items-center text-center mt-[5vw]">
  <h1>Recrutements</h1>

<p>Pour se faire recrutez, se munir :</p>

<p>● Permis B et C ou D </p>
<p>● De votre CV</p>
<p>● De votre lettre de motivation</p>
<p>● De la motivation et persévérence</p>
</div>

</div>  
<footer class="h-[11.2500000492vw] text-[1vw] flex justify-center bg-[#232323] text-white">
      
  <div class="text-white relative flex flex-col justify-center text-center gap-[4vw]">
    <a href="https://discord.gg/cNTmSwmvfk" rel="noreferrer" target="_blank" class="">Nous recrutons</a>
    <a  href="https://github.com/3th4nol"  rel="noreferrer" target="_blank">by @3th4nol</a>
  </div>
</footer>