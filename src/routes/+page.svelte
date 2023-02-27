<script lang="js">
    // @ts-nocheck
            import { onMount } from "svelte";
            import Loading from "./component/loading.svelte";
            import Compteur from "./component/compteur.svelte";
            
            let healtApiKey1 = '880078f349fe4f7db5ea78faceaf6a77';
            let healtApiKey2 = '184b0e95ed214e24ac114a2213d24cfc'
             let apiHealthURL = 'https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=' + healtApiKey2
            /**
               * @type {any[]}
               */
            let articles = []
            
          onMount(async function() {
                const response = await fetch(apiHealthURL);
                const json = await response.json();                
                articles = json["articles"]; 
            });
            // @ts-ignore

            onMount(() =>{
                fetchNews()
                const interval = setInterval(()=>{
                    fetchNews()
                }, 1000 * 60 * 60);

                return () => clearInterval(interval)
            })
              const runRight = () =>{
    
                articles = [...articles.slice(1, articles.length), articles[0]]
                
              }
              const runLeft = () =>{
                articles = [articles[articles.length -1], ...articles.slice(0, articles.length - 1)]
              }

              let personels =[{id: "un", img: "./img/personels/Julie.jpg", text:"Co-Directrice Agostini <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
              {id: "deux", img: "./img/personels/Tim.jpg", text: "Directeur Lacourt <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]
    
              let width0 = "w-[25vw]"
              let width1 = "w-[25vw]"
              let hidden0 = "hidden"
              let hidden1 = "hidden"
            
              function hover(){
                 width0 = "w-[25vw]"
                width1 = "w-[25vw]"
                hidden0 = "hidden"
                hidden1 = "hidden"
              }
    
              function hover0() {
                width0 = "w-[40vw]"
                width1 = "w-[10vw]"
                hidden0 = "hidden"
                hidden1 = "inline"
              }
              function hover1(){
                width0 = "w-[10vw]"
                width1 = "w-[40vw]"
                hidden0 = "inline"
                hidden1 = "hidden"
              }
     
      let FAQ = [
    {id:0, isActive: false, question: "Comment savoir si ma demande de consultation, d’examen d’imagerie, d’hospitalisation est urgente ?", reponse:"Se référer au médecin traitant ou au médecin hospitalier référent."},
    {id:1, isActive: false, question: "Est-ce que le parking est accessible ?", reponse:"Le parking est accessible et gratuit.Sa capacité d’accueil est toutefois limitée en période d’affluence."},
    {id:2, isActive: false, question: "Existe-t-il un livret d’accueil de mon hôpital ? ", reponse : "Le bureau des admissions et des frais de séjour est à votre écoute pour la gestion administrative de votre hospitalisation."},
    {id:3, isActive: false, question:"Comment accéder à mon dossier médical ?", reponse : "La personne hospitalisée (ou ses représentants légaux pour un mineur ou un majeur protégé) bénéficie d’un accès direct aux informations de santé la concernant. Sous certaines conditions, ses ayants droit en cas de décès peuvent également bénéficier d’un accès à certains éléments du dossier."},
    {id:4, isActive: false, question: "Est ce que je peux consulter un medecin ?", reponse: "Oui, après une prise de rendez vous aux secrétariats concernées.Si vous n'avez pas de rendez vous, vous pourrez en prendre un à l'acceuil Necker aux près des internes de l'hopital." }]

 
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

      <header class="flex header h-[56.2500002461vw] ">
        <div class="">
          <img src="img/visage.png" class=" img w-[57vw] h-[56.2500002461vw] relative block " alt="visage" >
        </div>
  
        <div class='background bg-[#DCDCDC] w-[100vw] h-[56.2500002461vw]'>
          <div class="sm:justify-center sm:flex">
            <nav class="flex justify-around absolute text-[1.6vw] text-center items-center top-[2.6vw] right-[2.6vw] border-solid border-[0.1vw] w-[52.13vw] h-[6.1vw] rounded-[47px]" style="border-color : {color}; color : {color}">
              <a href="/pages/About_us/"><li>A propos de <br>nous</li></a>
              <a href="./pages/Etude&Metier"><li>Etude /<br>Metier</li></a>
              {#if color === 'white'}
              <a href="./"><img src="img/logo.png" alt="logo Necker" class="w-[4.7vw] h-[4.7vw]"></a>
              {:else}
              <a href="./"><img src="img/logo-black.png" alt="logo Necker" class="w-[4.7vw] h-[4.7vw]"></a>
              {/if}
              <a href="./pages/Urgence_que_faire"><li>Urgence <br> que faire</li></a>
              <a href="./pages/Recrutement"><li>Nous <br> recrutons</li></a>
            </nav>
          </div>
          <div>
          <a href="https://discord.gg/cNTmSwmvfk" rel="noreferrer" target="_blank" class="  w-[0.94vw] text-center top-[15.64vw]">
            <div id="contact" style="border-color : {color}" class=" relative left-[46.92vw] top-[17vw] border-solid border-[0.1vw] w-[10.94vw] h-[10.84vw] rounded-full">
              <h3 style="color:{color}" class=" text-[2.5vw] mt-[3.1vw] ">Contact</h3>
            </div>
          </a>
            <div id="text" class="relative top-[16.68vw] left-[10vw] w-[36.86vw]">
              <div>
                <h1 style="color : {color}" class="text-[1.6vw]">Hopital Necker</h1>
                <p style="color : {color}" class="text-[2.08vw] text-center align-middle w-[36.86vw] font-regular">Bienvenue sur le site de<br>l’hôpital Necker-Enfants malades, hôpital du Groupe hospitalo-universitaire AP-HP.Centre-Université de Paris</p>
              </div>
              <div style="background-color : {color}" class="w-[2.6vw] h-[1.4625000064vw]  relative top-[0.56250000246vw]">
                <div class="w-[5.2vw] h-[5.2vw] bg-[#DCDCDC] rotate-45 relative bottom-[3.8vw]"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section >
          <article class="bg-[#232323]">
            <div class="bg-[#1344FE] ml-[1.92vw] z-0 relative top-[5.735vw] w-[57.14vw] h-[35.4150001549vw]">
              <div class="flex justify-end pr-[2.55vw] pt-[2.085vw]">
                <div class="w-[2.86vw] h-[2.86vw]" style="background-color : {color}">
                  <div class="w-[4.588vw] h-[2.86vw] bg-[#1344FE] rotate-45 relative top-[1.1vw] right-[1.8vw]"></div>
                </div>
              </div>
              <div class="flex left-[1.98vw] bottom-[3.15000001378vw] relative ">
                <p style="color:{color}"class="text-[2.08vw] text-left align-middle h-[22.7531250995vw] w-[42.89vw] font-bold ">
                  L’hopital Necker vous offre une alternance entre l’université et l’hopital necker. Des formations et des cours écrits/oraux vous sera proposez lors <br>de votre admissions au GHU <br>(Groupe hospitalo-universitaire)
                </p>
              </div>
              <div style="background-color : {color}" class="w-[2.86vw] h-[2.86vw] ml-[1.3vw]">
                <div class="w-[5.588vw] h-[2.86vw] bg-[#1344FE] rotate-45 relative right-[0.5vw] bottom-[0.84375000369vw] "></div>
              </div>
            </div>
            <img src="img/Image.png" alt="image_hopital" class="z-10 relative bottom-[20vw] left-[40vw] w-[59.27vw]">
          </article>            
          <article class="">
              <div class="bg-gradient-to-r from-[#232323] to-transparent w-[35.4150001549vw] h-[100vw] rotate-90 m-auto relative bottom-[36.56250016vw] bottom-[42.1875001846vw]" > </div>
    
              <div class="w-[100vw] absolute top-[118.875000468vw]">
                <div class="w-[63vw] gap-5 flex overflow-hidden relative m-auto">
                
                  {#each articles as article}
                    {#if article.urlToImage, article.description !== null || ''}
                    <div class="rounded-[2vw]  min-w-[62.5vw] h-[41.6643751823vw] bg-[#BDBDBD]">
                      <div class="flex">
                        <img src="{article.urlToImage}" style="border-color : {color}" class="rounded-[2vw] border-[0.2vw] w-[29.375vw] h-[29.375vw] mt-[3.385vw] ml-[2.1875vw]  object-cover" alt="{article.author}">
                        <div class="flex-col">
                          <h1 class="text-[1.875vw] w-[27.96875vw] m-[1.5vw] h-[9.00000003938vw] overflow-hidden text-ellipsis ">{article.title}</h1>
                          <p class=" text-[1.66vw] w-[27.96875vw] m-[1.5vw] text-ellipsis whitespace-pre-wrap overflow-hidden h-[16.8750000738vw]">{article.description}</p>
                          <a href="{article.url}" target="_blank" rel="noreferrer">
                            <div class="relative top-[2vw] left-[11.5vw] border w-[15vw] text-center border-[0.2vw] rounded-[2vw]" style="border-color : {color}">
                              <p class="text-[1.66vw]">Regarder Plus</p>
                            </div>
                          </a>
                      </div>
                      </div>
                    </div>
                    {:else}                    
                    <div class="rounded-[2vw]  min-w-[62.5vw] h-[41.6643751823vw] bg-[#BDBDBD]">
                      <div class="flex">
                        
                        <div class="rounded-[2vw] border-[0.2vw] w-[29.375vw] h-[29.375vw] mt-[3.385vw] ml-[2.1875vw] flex justify-center items-center"> <Loading /> </div>
                                                
                        <div class="flex-col">
                          <h1 class="text-[1.875vw] w-[27.96875vw] m-[1.5vw] h-[9.00000003938vw] overflow-hidden text-ellipsis ">{article.title}</h1>
                          <p class=" text-[1.66vw] w-[27.96875vw] m-[1.5vw] text-ellipsis whitespace-pre-wrap overflow-hidden h-[16.8750000738vw] text-center align-middle"><Loading /></p>
                          <a href="{article.url}" target="_blank" rel="noreferrer">
                            <div class="relative top-[2vw] left-[11.5vw] border w-[15vw] text-center border-[0.2vw] rounded-[2vw]" style="border-color : {color}">
                              <p class="text-[1.66vw]">Regarder Plus</p>
                            </div>
                          </a>
                      </div>
                      </div>
                    </div>
                    {/if}
                  {/each}
                  
                </div>
              
                <div class="w-[10vw] bottom-[30.9375001354vw] flex justify-center  m-auto w-[80vw]" >
                    <button on:click={runLeft}>
                        <img src="./img/chevron-gauche.png" class="w-[2vw]" alt="left_arrow">
                    </button>
                    <button on:click={runRight} class=" relative top-0  ">
                      <img src="./img/chevron-droit.png" class="w-[2vw]"  alt="left_arrow">
                    </button>
                </div>
              </div>
            </article> 
            <article class="bg-[#C2CFFE] rounded-[4vw]">
              <div class="pl-[4vw] pt-[4vw]">
                <div class="w-[4vw] h-[4vw]" style="background-color : {color}">
                  <div class="w-[6vw] h-[4vw] relative top-[0.84375000369vw] m-auto -rotate-45 bg-[#C2CFFE]" ></div>
                </div>
              </div>
              <div>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative left-[12vw]">Plus de <Compteur initialValue={0} maxValue={500000} animationDuration={2200} />  patients prise en charge</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative top-[6.75000002953vw] left-[18vw]"><Compteur initialValue={0} maxValue={351363} animationDuration={1500} />  consultations</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative left-[60vw] bottom-[1.12500000492vw]"><Compteur initialValue={0} maxValue={71455} animationDuration={2500} />  hospitalisations</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative top-[7.31250003199vw] left-[3vw]"> <Compteur initialValue={0} maxValue={700} animationDuration={1000} /> projets de recherche</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative left-[50vw] "><Compteur initialValue={0} maxValue={82425} animationDuration={3200} />  passages aux urgences</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative left-[45vw] top-[4.50000001969vw]"><Compteur initialValue={0} maxValue={1079} animationDuration={1300} />  publications scientifiques</p>
                <p class="text-[2.5vw] w-min whitespace-nowrap flex flex-row align-bottom relative top-[8.43750003691vw] left-[5vw]">Près de <Compteur initialValue={0} maxValue={5000} animationDuration={2000} />  professionnels</p>
              </div>
              <div class="flex justify-end relative top-[9.56250004184vw] right-[4vw]">
                <div class=" w-[4vw] h-[4vw]"  style="background-color : {color}">
                  <div class="w-[6vw] h-[4vw] relative bottom-[0.84375000369vw] right-[2vw] m-auto -rotate-45 bg-[#C2CFFE]" ></div>
                </div>
              </div>
          </article>
          <article>
            <div class="flex grow relative top-[5.11875002239vw] ml-[2.96875vw] hover:transition-all gap-[2.43vw] ">
              {#each personels as personel}
                <!-- svelte-ignore missing-declaration -->
                {#if personel.id === "un"}
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img src="{personel.img}" alt="{personel.id}" id="{personel.id}" on:mouseover={hover0} on:mouseout={hover} class="{width0} text-black hover:transition-all transition-all h-[46.8000002048vw] bg-slate-600 rounded-[4vw] object-cover">
                <p class="{hidden0} absolute right-[5vw] w-[31.5625vw] text-[1.66vw] text-black">{@html personel.text}</p>
                {:else}
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img src="{personel.img}" alt="{personel.id}" id="{personel.id}" on:mouseover={hover1} on:mouseout={hover} class="{width1} text-black hover:transition-all transition-all ease-in-out  h-[46.8000002048vw] bg-slate-600 rounded-[4vw] object-cover">
                <p class="{hidden1} absolute right-[5vw] w-[31.5625vw] text-[1.66vw] text-black">{@html personel.text}</p>
                {/if}
              {/each}
                {#if hidden0 === "hidden" && hidden1 === "hidden"}
                <p class="absolute right-[5vw] w-[31.5625vw] text-[1.66vw] text-black"> Nos Effectif : <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/if}
                <div class="border-black border-[0.1vw] text-[1.66vw] rounded-[2vw] absolute top-[39.5887501732vw] right-[8vw] p-[0.5vw]">
                  <p class="text-black">A propos</p>
                </div>
            </div>
            <div class="bg-gradient-to-r from-[#232323] to-transparent w-[28.125000123vw] h-[100vw] -rotate-90 m-auto relative bottom-[54.0000002363vw] bottom-[52.5vw] z-[-1]" > </div>
          </article>
          <article class="bg-[#232323] flex flex-col gap-[1.12500000492vw] ">
            {#each FAQ as faq}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              
              <div on:click={() => faq.isActive = !faq.isActive} class="w-[80vw] m-auto flex flex-col gap-[1.40625000615vw] bg-[#BDBDBD] rounded-[2vw]" style="height:{faq.isActive ? 14.0625000615 : 7.03125003076}vw">
                <h3  style="color : {color}" class=" text-center text-[2vw]">{faq.question}</h3>
                {#if faq.isActive === true}
                <p style="color : {color}" class=" text-center align-middle text-[1.2vw]">{faq.reponse}</p>
                {:else}
                <p style="color : {color}" class=" text-center text-[1.5vw] hidden">{faq.reponse}</p>
                {/if}
              </div>
              
            {/each}
          </article>
          <article>
            <div class="bg-gradient-to-r from-[#232323] to-transparent w-[28.125000123vw] h-[100vw] rotate-90 m-auto relative z-[-1] bottom-[39.6562501735vw] bottom-[37.6vw]" > </div>
            <div class="flex gap-[8vw] relative w-[80vw] h-min bottom-[89vw] left-[8.5vw]">
              <div class="text-[2vw] w-[38.8vw] flaex flex-col gap-[2.8125000123vw]">
                <p class="text-black">Pour acceder à l’hopital  : </p>
                <p class="text-black">Comme indiquer sur l’image prendre la rue raynouard jusqu’a la rue de l’abonie</p>
                <p class="text-black">Ou si à contre sens, prendre le périphérique en passant rue de Passy pour aller rue de l’albonie</p> 
              </div>
              <img src="./img/map.png" class="w-[40.8125vw] relative left-[5vw] bottom-[5vw]" alt="">
            </div>  
          </article>
        </section>
      </main>
    <footer class="h-[11.2500000492vw] flex justify-center bg-[#232323] text-white">
      
      <div class="text-white relative text-[1vw] flex flex-col justify-center text-center gap-[4vw]">
        <a href="https://discord.gg/cNTmSwmvfk" rel="noreferrer" target="_blank" class="">Nous recrutons</a>
        <a  href="https://github.com/3th4nol"  rel="noreferrer" target="_blank">by @3th4nol</a>
      </div>
    </footer>

    <style lang="scss" global>
            .flex-0{
              flex: 0 0 0%;
              
            }
            .hidden2{
              display: none;
            }
            @media (min-width:1920px) and (max-width:2880px) {
                .img{
                width: 522px * 2.197;
              }
              }
            @media (min-width:1280px) and (max-width: 1919px){
            
              }
              @media (min-width:960px) and (max-width: 1279px){
            
              }
              @media (min-width:768px) and (max-width: 959px){
            
            }
            @media (min-width:640px) and (max-width: 767px){
            
            }
            @media (min-width:320px) and (max-width:639px){
    
            }
            
            article{
              height: 56.2500002461vw;
            }
    </style>