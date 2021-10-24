<template>
  <div class="home">
    <div class="img-wrapper">
      <span class="hero-title" data-aos="fade-up" data-aos-duration="2000"
        >Switzerland</span
      >

      <span class="hero-subtitle" data-aos="fade-up" data-aos-duration="2000"
        >Découvrir la liberté</span
      >

      <a href="/circuits">
        <button
          class="hero-btn"
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-duration="1000"
        >
          Explorer Maintenant!
        </button></a
      >
    </div>

    <div class="svg-animation">
      <svg width="100%" height="100%" viewBox="0 0 3387 1270">
        <path
          id="planePath"
          class="planePath"
          d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
        />
        <g id="plane">
          <polygon
            class="fil1"
            points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
          />
          <polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 " />
          <polygon
            class="fil3"
            points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
          />
          <path
            class="fil4"
            d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
          />
          <polygon
            class="fil1"
            points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
          />
        </g>
        <!-- Define the motion path animation -->
        <animateMotion
          xlink:href="#plane"
          dur="5s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlink:href="#planePath" />
        </animateMotion>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
}

.img-wrapper {
  width: 100vw;
  height: 70vh;
  color: white;

  background-image: url("../assets/switzerland.jpg");
  background-size: 100vw 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.hero-title {
  font-size: 5rem;
  font-family: "Caveat", cursive;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-style: italic;
}

.hero-btn {
  margin: 1.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  background-color: orange;
  color: white;
}

.form-where {
  height: 100px;
  width: 100vw;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.form-where form {
  display: flex;
}

.form-catchphrase {
  margin: 1.5rem;
}

.popular-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 30vh;
  width: 100vw;
}

.popular {
  max-width: 1136px;
  text-align: center;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(3fr);
  grid-template-rows: repeat(2fr);
}

/* FOR SVG ANIMATION */
.svg-animation {
  /* background: blue; */
  height: calc(30vh - 64px);
}

.planePath {
  stroke: #d9dada;
  stroke-width: 0.1%;
  stroke-width: 0.5%;
  stroke-dasharray: 1% 2%;
  stroke-linecap: round;
  fill: none;
}

.fil1 {
  fill: #d9dada;
}

.fil2 {
  fill: #c5c6c6;
}

.fil4 {
  fill: #9d9e9e;
}

.fil3 {
  fill: #aeafb0;
}
</style>
