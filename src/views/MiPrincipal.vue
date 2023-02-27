<template>
  <div class="text-center">
    <button
      @click="datos.guardarDatos(route.params.nombre, true)"
      class="mt-6 px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
    >
      Crea una sala
    </button>
    <div>
      <ul>
        <li v-for="(sala, idx) in salas" :key="idx">
          <div class="sala bg-amber-100 border-2 border-black w-1/2 p-4">
            <div class="flex justify-between">
              <button
                class="bg-white border-2 border-black p-2"
                @click="borrarSala(sala.id, sala.Nombre)"
              >
                Borrar
              </button>
              <p class="ml-16">{{ sala.Nombre }}</p>
              <button
                class="bg-white border-2 border-black p-2"
                @click="iniciarModal(sala.Nombre)"
              >
                Crear dispositivo
              </button>
            </div>
            <ul>
              <li
                v-for="(el, idx) in dispositivos.filter(
                  (x) => x.Sala == sala.Nombre
                )"
                :key="idx"
                class="dispositivo w-3/12 border-2 border-black"
              >
                <div>
                  {{ el.Nombre }}<br />
                  {{ el.Tipo }}<br />
                </div>
                <div v-if="el.Tipo == 'ejecutor'">
                  <div v-if="!el.Estado">
                    <button
                      class="w-10 h-6 bg-red-500"
                      @click="editarDispositivo(el.id, true)"
                    >
                      Off
                    </button>
                  </div>
                  <div v-else>
                    <button
                      class="w-10 h-6 bg-green-500"
                      @click="editarDispositivo(el.id, false)"
                    >
                      On
                    </button>
                  </div>
                </div>
                <div v-else>
                  {{ el.Temperatura }}
                </div>
                <button
                  class="w-24 h-8 bg-white border-2 border-black mt-4 mb-1"
                  @click="borrarDispositivo(el.id)"
                >
                  Borrar
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-show="datos.getOpenSala">
    <ModalCreaSalas />
  </div>
  <div v-show="datos.getOpenDispositivo">
    <ModalDispositivo />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onGet, borrar, editar } from "@/API/firebase";
import { useDatosStore } from "@/stores/DatosForm";
import { useRoute } from "vue-router";
import ModalCreaSalas from "../components/ModalCreaSalas.vue";
import ModalDispositivo from "../components/ModalDispositivo.vue";
const route = useRoute();
const datos = useDatosStore();
const salas = ref([]);
const dispositivos = ref([]);
const iniciarModal = (nomSala) => {
  datos.guardarNombre(nomSala);
  datos.cambiarOpenDispositivo(true);
};
const borrarSala = (idSala, nomSala) => {
  borrar("Salas", idSala);
  dispositivos.value.map((x) =>
    x.Sala == nomSala ? borrar("Dispositivo", x.id) : ""
  );
};
const borrarDispositivo = (idDispositivo) => {
  borrar("Dispositivo", idDispositivo);
};
const editarDispositivo = (idDispositivo, estado) => {
  editar("Dispositivo", idDispositivo, {
    Estado: estado,
  });
};
onGet("Salas", (docs) => {
  salas.value = [];
  docs.forEach((doc) => {
    salas.value.push({ id: doc.id, ...doc.data() });
  });
});
onGet("Dispositivo", (docs) => {
  dispositivos.value = [];
  docs.forEach((doc) => {
    dispositivos.value.push({ id: doc.id, ...doc.data() });
  });
});
</script>

<style scoped>
.sala {
  margin: 0 auto;
  margin-bottom: 1em;
  margin-top: 1em;
}
.dispositivo {
  margin: 0 auto;
  margin-bottom: 1em;
}
</style>
