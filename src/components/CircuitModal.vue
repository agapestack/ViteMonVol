<template>
  <div class="modal-wrapper">
    <button id="closebtn" @click="$emit('closeModalEmit')">
      <i class="far fa-window-close"></i>
    </button>

    <div class="wrapper-title">
      <h1>{{ circuit.nom }}</h1>
    </div>

    <div class="wrapper-content">
      <p><strong>{{ circuit.date_dbt }} - {{ circuit.date_fin }}</strong></p>
      <table>
        <thead>
          <tr>
            <th>Villes</th>
            <th>Hotel</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in circuit.hotels.length" :key="index">
            <td>{{ circuit.villes[index - 1] }}</td>
            <td>{{ circuit.hotels[index - 1] }}</td>
          </tr>
        </tbody>
      </table>

      <p>Prix: {{ circuit.prix }}€</p>
      <p>Nombre de place: {{ circuit.nb_place }}</p>

      <button>Réserver maintenant!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircuitModal",
  props: ["circuit"],
  created: function () {
    console.log(this.circuit);
  },
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  width: 600px;
  height: 500px;
  top: calc(50vh - 250px);
  right: calc(50vw - 300px);
  margin: 0 auto;
  /* position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center; */
  box-shadow: 8px 8px 2px 1px rgba(255, 166, 0, 0.815);
  border: 2px solid orange;

  background: white;
  border-radius: 10px;
  color: orange;
  z-index: 9998;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: black;
}

button {
  border-radius: 3px;
  transition: transform .2s;
  background-color: rgba(0, 0, 255, 0.63)
}

button:hover {
  transform: scale(1.1)
}

#closebtn {
  background: red;
  position: relative;

  /* pas propre mais fait le job */
  left: 260px;
  top: -15px;

  width: 40px;
  border-radius: 3px;
}

table,
td {
  border: 1px solid #333;
  margin: 1rem 0;
  padding: .5rem;
}

th {
  margin: 1rem 0;
  padding: .5rem;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}

.wrapper-content table {
}
</style>