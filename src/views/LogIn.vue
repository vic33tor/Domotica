<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold">Log In</h1>
    <p class="m-4 text-base">Nombre</p>
    <input
      v-model="Nombre"
      class="bg-[#F0EBCE] w-64 h-8 border-2 border-[#AA8B56]"
      type="text"
    />
    <p class="m-4 text-base">Contraseña</p>
    <input
      v-model="Password"
      class="bg-[#F0EBCE] w-64 h-8 border-2 border-[#AA8B56]"
      type="password"
    /><br />
    <button
      @click="IniciaSesion"
      class="mt-6 px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
    >
      Entrar
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onIniciar } from "@/API/firebase";
import { useRouter } from "vue-router";
const router = useRouter();
const Nombre = ref("");
const Password = ref("");
const IniciaSesion = () => {
  onIniciar("Usuario", (docs) => {
    console.log(Nombre.value);
    docs.forEach((doc) => {
      console.log(doc.data());
      Password.value == doc.data().Password && Nombre.value == doc.data().Nombre
        ? router.push({
            name: "Principal",
            params: { nombre: Nombre.value },
          })
        : alert("Contraseña incorrecta");
    });
  });
};
</script>

<style scoped></style>
