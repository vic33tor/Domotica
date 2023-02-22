import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDatosStore = defineStore("datos", () => {
  const usuario = ref("");
  const nombreSala = ref("");
  const openSala = ref(false);
  const openDispositivo = ref(false);

  const getUsuario = computed(() => usuario.value);
  const getNombreSala = computed(() => nombreSala.value);
  const getOpenSala = computed(() => openSala.value);
  const getOpenDispositivo = computed(() => openDispositivo.value);

  const guardarDatos = (usu, isOpen) => {
    usuario.value = usu;
    openSala.value = isOpen;
  };
  const guardarNombre = (nom) => {
    nombreSala.value = nom;
  };
  const cambiarOpenSala = (isOpen) => {
    openSala.value = isOpen;
  };
  const cambiarOpenDispositivo = (isOpen) => {
    openDispositivo.value = isOpen;
  };

  return {
    guardarDatos,
    cambiarOpenSala,
    cambiarOpenDispositivo,
    guardarNombre,
    getUsuario,
    getOpenSala,
    getOpenDispositivo,
    getNombreSala,
  };
});
