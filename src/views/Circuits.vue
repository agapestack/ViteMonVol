<template>
  <div class="circuits">
    <div class="circuits-search"></div>

    <div class="circuits-details">
      <ul id="circuits-list">
        <li v-for="circuit in circuits" :key="circuit.id">
          <b-button v-b-modal.modal-1>Launch demo modal</b-button>

          <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Circuits",
  data() {
    return {
      circuits: [
        {
          id: 0,
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
        },
        {
          id: 1,
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
        },
        {
          id: 2,
          nom: "Voyage au pays des caribous",
          date_dbt: "01/07/2022",
          date_fin: "10/07/2022",
          villes: ["Vancouver", "Kamloops", "Vancouver"],
          hotels: ["Moda Hotel", "The Plaza Hotel"],
          presentation:
            "Prenez place ! Destination le Canada, Vous pourrez visité les refuges pour animaux, la production d'érable dans une usine spécialisé, dégustation de produits locaux. Et encore plein d'autres activitées vous attendes !",
          nb_place: 25,
          prix: 3000,
        },
      ],
    };
  },
};
</script>

<style scoped>
.circuits {
  display: grid;
  grid-template-columns: 2fr 8fr;
}
</style>
