<template>
  <div id="circuits">
    <h1 style="text-align: center">Découvrir nos circuits!</h1>
    <div class="circuits">
      <div class="circuits-search">
        <div class="form-search">
          <h3>Filtres</h3>

          <p>Par Villes</p>
          <select v-model="ville_choisis" id="select-ville">
            <option selected value="">Tous</option>
            <option v-for="ville in liste_ville" :key="ville">
              {{ ville }}
            </option>
          </select>

          <p>Par Pays</p>
          <select v-model="pays_choisis" id="select-pays">
            <option selected value="">Tous</option>
            <option v-for="pays in liste_pays" :key="pays">
              {{ pays }}
            </option>
          </select>

          <button id="resetbtn" @click="resetFilter()">
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>

      <div class="circuits-details">
        <ul id="circuits-list">
          <li v-for="circuit in computed_circuits" :key="circuit.id">
            <div class="circuit">
              <div class="circuit-img">
                <img :src="circuit.img" :alt="circuit.alt" />
              </div>

              <div class="circuit-text">
                <h3>{{ circuit.nom }}</h3>

                <p>{{ circuit.presentation }}</p>

                <button type="button" @click="triggerModal(circuit)">
                  En savoir plus
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <CircuitModal
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="250"
        v-if="showModal"
        v-on:closeModalEmit="closeModalEmit"
        :circuit="modalData"
      />
    </div>
  </div>
</template>

<script>
import CircuitModal from "../components/CircuitModal.vue";
export default {
  name: "Circuits",
  components: {
    CircuitModal,
  },
  created: function () {
    this.liste_ville = this.getAllCity();
    this.liste_pays = this.getAllCountry();
  },
  methods: {
    triggerModal(data) {
      this.modalData = data;
      this.showModal = !this.showModal;
      // console.log(this.showModal);
      // console.log(this.modalData)
    },

    closeModalEmit() {
      this.modalData = null;
      this.showModal = !this.showModal;
    },

    getAllCity() {
      let res = [];
      for (let i = 0; i < this.$data.circuits.length; i++) {
        res = res.concat(this.$data.circuits[i].villes);
      }
      return res;
    },

    getAllCountry() {
      let res = [];
      for (let i = 0; i < this.circuits.length; i++) {
        res.push(this.$data.circuits[i].pays);
      }
      return res;
    },

    filterbyCoutry() {
      this.ville_choisis = "";
      document.getElementById("select-ville").selectedIndex = 0;
      let res = [];
      for (let i = 0; i < this.circuits.length; i++) {
        if (this.circuits[i].pays == this.pays_choisis) {
          res.push(this.circuits[i]);
        }
      }
      return res;
    },

    filterbyCity() {
      this.pays_choisis = "";
      document.getElementById("select-pays").selectedIndex = 0;
      let res = [];
      for (let i = 0; i < this.circuits.length; i++) {
        if (this.circuits[i].villes.includes(this.ville_choisis)) {
          res.push(this.circuits[i]);
        }
      }
      return res;
    },

    filter() {
      console.log("in filter");
      if (this.ville_choisis) {
        return this.filterbyCity();
      }

      if (this.pays_choisis) {
        return this.filterbyCoutry();
      }

      return this.circuits;
    },

    resetFilter() {
      document.getElementById("select-ville").selectedIndex = 0;
      document.getElementById("select-pays").selectedIndex = 0;
      this.pays_choisis = null;
      this.ville_choisis = null;
    },
  },
  data() {
    return {
      showModal: false,
      modalData: null,
      liste_ville: null,
      liste_pays: null,
      ville_choisis: null,
      pays_choisis: null,
      circuits: [
        {
          id: 1,
          nom: "Voyage sur l'achipel nippon",
          date_dbt: "15/04/2022",
          date_fin: "30/04/2022",
          villes: ["Tokyo", "Hakone", "Kyoto", "Osaka"],
          hotels: [
            "Red Planet Tokyo Asakusa",
            "Hakone Yutowa",
            "Shinmachi Bettei",
            "Nest Hotel Osaka Umeda",
          ],
          presentation:
            " Venez visiter les villes les plus emblématiques du Japon, pays entre tradition et modernité, durant ce voyage, vous pourrez visitez des temples comme le fameux centre commercial Pokemon,puis descendrer vers des petits villages de campagnes, pour visitez le mont fuji, et bien plus encore!",
          nb_place: 30,
          prix: 2500,
          img: require("../assets/japan.jpg"),
          alt: "Image du Japon",
          pays: "Japon",
        },
        {
          id: 2,
          nom: "Visite historique en Grèce",
          date_dbt: "01/09/2022",
          date_fin: "15/09/2022",
          villes: ["Athènes", "Le péloponnèse", "Thessalonique"],
          hotels: [
            "Candia hotel",
            "Nikki Beach Resort & Spa",
            "Electra Palace Thessaloniki",
          ],
          presentation:
            "Venez participer a notre circuit sur l'histoire de la grèce, la mythologie Grec, son évolution au fil des années, ses traditions, ses spécialités culinaire, le tout saupoudré de baignade dans la mer méditerranée.",
          nb_place: 20,
          prix: 1000,
          img: require("../assets/greece.jpg"),
          alt: "Image de la Grèce",
          pays: "Grèce",
        },
        {
          id: 3,
          nom: "Voyage au pays des caribous",
          date_dbt: "01/07/2022",
          date_fin: "10/07/2022",
          villes: ["Vancouver", "Kamloops", "Vancouver"],
          hotels: ["Moda Hotel", "The Plaza Hotel", "Agape Hotel"],
          presentation:
            "Prenez place ! Destination le Canada, Vous pourrez visité les refuges pour animaux, la production d'érable dans une usine spécialisé, dégustation de produits locaux. Et encore plein d'autres activitées vous attendes !",
          nb_place: 25,
          prix: 3000,
          img: require("../assets/canada.jpg"),
          alt: "Image du Canada",
          pays: "Canada",
        },
      ],
    };
  },
  computed: {
    computed_circuits: function () {
      return this.filter();
    },
  },
};
</script>

<style scoped>
.circuits {
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 64px 9fr;
}

ul {
  list-style-type: none;
}

img {
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

#resetbtn {
  background: rgba(0, 0, 255, 0.63);
  width: 50px;
  border-radius: 5px;
  margin: 0.5rem auto;
}

button:hover {
  box-shadow: 4px 4px rgba(77, 77, 77, 0.5);
}

button:active {
  transform: translate3d(7px, 7px, 0px);
  box-shadow: 7px 7px rgba(77, 77, 77, 0.5);
}

.circuit {
  margin: 1rem auto;
  max-width: 1136px;
  padding: 2rem;
  border: 1px solid orange;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.circuit-text {
  margin: 1.5rem;
}

.form-search {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 200px;
}
</style>
