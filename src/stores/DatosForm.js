import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDatosStore = defineStore("datos", () => {
  const usuario = ref("");
  const nombreSala = ref("");
  const openSala = ref(false);
  const openDispositivo = ref(false);
  const openCambioSala = ref(false);
  const idDispositivo = ref("");

  const getUsuario = computed(() => usuario.value);
  const getNombreSala = computed(() => nombreSala.value);
  const getOpenSala = computed(() => openSala.value);
  const getOpenDispositivo = computed(() => openDispositivo.value);
  const getOpenCambioSala = computed(() => openCambioSala.value);
  const getIdDispositivo = computed(() => idDispositivo.value);

  const guardarDatos = (usu, isOpen) => {
    usuario.value = usu;
    openSala.value = isOpen;
  };
  const guardarNombre = (nom) => {
    nombreSala.value = nom;
  };
  const guardarId = (id) => {
    idDispositivo.value = id;
  };
  const cambiarOpenSala = (isOpen) => {
    openSala.value = isOpen;
  };
  const cambiarOpenDispositivo = (isOpen) => {
    openDispositivo.value = isOpen;
  };
  const cambiarOpenCambioSala = (isOpen) => {
    openCambioSala.value = isOpen;
  };

  return {
    guardarDatos,
    cambiarOpenSala,
    cambiarOpenDispositivo,
    guardarNombre,
    cambiarOpenCambioSala,
    guardarId,
    getUsuario,
    getOpenSala,
    getOpenDispositivo,
    getNombreSala,
    getOpenCambioSala,
    getIdDispositivo,
  };
});
