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
  <div style="color:{color}" class="flex flex-col gap-[2vw] text-[0.8vw] sm:text-[2vw] xl:text-[0.8vw]  m-auto text-center mt-[2.5vw]">
    <div class="flex flex-col items-center  gap-[1vw]"> 
      <h1>MODULES DE COMPETENCES POUR OBTENTION DU D.E AMBULANCIER</h1> 
      <p>
        ● Conduite à haute vitesse en situation d'urgence. <br>
        ● Immobilisation et conditionnement de victime.<br>
        ● Connaissances des premiers soins d'urgence.<br>
        ● Réaliser un premier bilan sur un patient.<br>
        ● Connaissances de base de l'anatomie-physiopathologie humaine.
      </p>
    </div>
    <div class="flex flex-col gap-[1vw]">
      <h1>MODULES DE COMPETENCES POUR OBTENTION DU D.E INFIRMIER</h1>
      <p>
        ● Connaissances générales de l'anatomie-physiopathologie humaine. <br>
        ● Connaissances générales des médicaments et des traitements. <br>
        ● Soins infirmiers aux patients. <br>
        ● Assister le médecin dans des situations diverses.
      </p>
    </div>
    <div class="flex flex-col gap-[1vw]">
      <h1>MODULES DE COMPETENCES POUR OBTENTION DU D.E. DE DOCTEUR EN MEDECINE </h1>
      <p>● Connaissances approfondies de l'anatomie-physiopathologie humaine. <br>
         ● Connaissances approfondies des médicaments et des traitements. <br>
         ● Soins médicaux aux patients. <br>
         ● Définir le rôle de chaqun dans la prise en charge d'un patient et savoir faire preuve de leadership.
      </p>
    </div>
    <div class="flex flex-col gap-[1vw]">
      <h1>MODULE DE COMPETENCES POUR OBTENTION DU BREVET DE PILOTAGE</h1>
      <p>
        ● Savoir communiquer à la radio <br>
        ● Connaissance des capacité de son appareil <br>
        ●Assurer un vol en toute sécurité <br>
        ●Savoir naviguer <br>
        ● Savoir se remettre en question
      </p>
    </div>
  </div>
</div>  

<footer class="h-[11.2500000492vw] text-[1vw] flex justify-center bg-[#232323] text-white">
      
  <div class="text-white relative flex flex-col justify-center text-center gap-[4vw]">
    <a href="https://discord.gg/cNTmSwmvfk" rel="noreferrer" target="_blank" class="">Nous recrutons</a>
    <a  href="https://github.com/3th4nol"  rel="noreferrer" target="_blank">by @3th4nol</a>
  </div>
</footer>