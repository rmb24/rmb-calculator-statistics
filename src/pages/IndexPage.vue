<template>
  <q-page class="q-pa-md">
    <!-- Tarjeta para ingresar los datos a calcular de la media -->
    <q-card
      class="q-col-6 q-mb-md q-mt-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
    >
      <q-card-section>
        <p class="text-h6">Calcular media</p>
        <q-form @submit="calcularMedia" class="q-gutter-md">
          <q-input
            v-model="datos"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="close"
            clearable
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
            rounded
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para mostrar el resultado de la media -->
    <q-card
      class="col-12 col-md-6 col-lg-4 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      outlined
    >
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input
            v-model="media"
            label="Media"
            filled
            type="number"
            readonly
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para ingresar los datos a calcular de la moda -->
    <q-card
      class="q-col-6 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
    >
      <q-card-section>
        <p class="text-h6">Calcular moda</p>
        <q-form @submit="calcularModa" class="q-gutter-md">
          <q-input
            v-model="datosModa"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="close"
            clearable
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
            rounded
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para mostrar el resultado de la moda -->
    <q-card
      class="col-12 col-md-6 col-lg-4 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      outlined
    >
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input v-model="moda" label="Moda" filled readonly />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para ingresar los datos a calcular de la mediana -->
    <q-card
      class="q-col-6 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
    >
      <q-card-section>
        <p class="text-h6">Calcular mediana</p>
        <q-form @submit="calcularMediana" class="q-gutter-md">
          <q-input
            v-model="datosMediana"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="close"
            clearable
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
            rounded
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para mostrar el resultado de la mediana -->
    <q-card
      class="col-12 col-md-6 col-lg-4 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      outlined
    >
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input v-model="mediana" label="Mediana" filled readonly />
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Tarjeta para ingresar los datos a calcular de la desviación estándar -->
    <q-card
      class="q-col-6 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
    >
      <q-card-section>
        <p class="text-h6">Calcular desviación estándar</p>
        <q-form @submit="calcularDesviacion" class="q-gutter-md">
          <q-input
            v-model="datosDesviacion"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="close"
            clearable
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
            rounded
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para mostrar el resultado de la desviación estándar -->
    <q-card
      class="col-12 col-md-6 col-lg-4 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      outlined
    >
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input
            v-model="desviacion"
            label="Desviación estándar"
            filled
            readonly
          />
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Tarjeta para ingresar los datos a calcular de la varianza -->
    <q-card
      class="q-col-6 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
    >
      <q-card-section>
        <p class="text-h6">Calcular varianza</p>
        <q-form @submit="calcularVarianza" class="q-gutter-md">
          <q-input
            v-model="datosVarianza"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="close"
            clearable
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
            rounded
          />
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para mostrar el resultado de la varianza -->
    <q-card
      class="col-12 col-md-6 col-lg-4 q-mb-md q-mx-auto"
      align="center"
      color="secondary"
      outlined
    >
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input
            v-model="varianzaResult"
            label="Varianza"
            filled
            readonly
            type="text"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Footer simple -->
    <div class="q-pa-md text-center">
      <p>
        Hecho con ❤️ por
        <a href="https://github.com/rmb24" target="_blank">rmb24</a>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    // Tabs
    const tabs = ref([
      { label: 'Media', icon: 'mdi-calculator' },
      { label: 'Mediana', icon: 'mdi-calculator' },
      { label: 'Moda', icon: 'mdi-calculator' },
      { label: 'Desviación estándar', icon: 'mdi-calculator' },
      { label: 'Varianza', icon: 'mdi-calculator' },
    ]);

    // Variables
    const datos = ref('');
    const media = ref(0);

    // Funciones - Media
    const validarDatos = (value: string) => {
      const datos = value.split(',');
      const datosValidos = datos.every((dato) => !isNaN(Number(dato)));
      return datosValidos || 'Ingrese datos válidos';
    };

    const calcularMedia = () => {
      if (datos.value) {
        const datosArray = datos.value.split(',');
        const datosNumber = datosArray.map((dato) => Number(dato));
        const sumaDatos = datosNumber.reduce((a, b) => a + b);
        media.value = sumaDatos / datosNumber.length;
      }
    };

    // Funciones - Moda
    const datosModa = ref('');
    const moda = ref(0);

    // Calcula la moda, si hay más de una, devuelve un array con las modas encontradas en el array de datos ingresados
    const calcularModa = () => {
      if (datosModa.value) {
        const datosArray = datosModa.value.split(',');
        const datosNumber = datosArray.map((dato) => Number(dato));
        const datosCount: any = {};
        datosNumber.map((dato) => {
          if (datosCount[dato]) {
            datosCount[dato] += 1;
          } else {
            datosCount[dato] = 1;
          }
        });
        const datosArrayCount = Object.entries(datosCount);
        const datosArrayCountOrdenado = datosArrayCount.sort(
          (a: any, b: any) => b[1] - a[1]
        );
        const modaArray = datosArrayCountOrdenado.filter(
          (dato: any) => dato[1] === datosArrayCountOrdenado[0][1]
        );
        const modaArrayNumber = modaArray.map((dato: any) => Number(dato[0]));
        moda.value = modaArrayNumber;
      }
    };

    // Funciones - Mediana
    const datosMediana = ref('');
    const mediana = ref(0);

    const calcularMediana = () => {
      if (datosMediana.value) {
        const datosArray = datosMediana.value.split(',');
        const datosNumber = datosArray.map((dato) => Number(dato));
        const datosOrdenados = datosNumber.sort((a, b) => a - b);
        const mitad = Math.floor(datosOrdenados.length / 2);
        if (datosOrdenados.length % 2) {
          mediana.value = datosOrdenados[mitad];
        } else {
          mediana.value =
            (datosOrdenados[mitad - 1] + datosOrdenados[mitad]) / 2;
        }
      }
    };

    // Funciones - Desviación estándar
    const datosDesviacion = ref('');
    const desviacion = ref(0);

    const calcularDesviacion = () => {
      if (datosDesviacion.value) {
        const datosArray = datosDesviacion.value.split(',');
        const datosNumber = datosArray.map((dato) => Number(dato));
        const sumaDatos = datosNumber.reduce((a, b) => a + b);
        const media = sumaDatos / datosNumber.length;
        const datosRestaMedia = datosNumber.map((dato) => dato - media);
        const datosRestaMediaCuadrado = datosRestaMedia.map(
          (dato) => dato * dato
        );
        const sumaDatosRestaMediaCuadrado = datosRestaMediaCuadrado.reduce(
          (a, b) => a + b
        );
        const desviacionEstandar = Math.sqrt(
          sumaDatosRestaMediaCuadrado / (datosNumber.length - 1)
        );
        desviacion.value = desviacionEstandar;
      }
    };

    // Funciones - Varianza
    const datosVarianza = ref('');
    const varianzaResult = ref(0);

    const calcularVarianza = () => {
      try {
        if (datosVarianza.value) {
          const datosArray = datosVarianza.value.split(',');
          const datosNumber = datosArray.map((dato) => Number(dato));
          const sumaDatos = datosNumber.reduce((a, b) => a + b);
          const media = sumaDatos / datosNumber.length;
          const datosRestaMedia = datosNumber.map((dato) => dato - media);
          const datosRestaMediaCuadrado = datosRestaMedia.map(
            (dato) => dato * dato
          );
          const sumaDatosRestaMediaCuadrado = datosRestaMediaCuadrado.reduce(
            (a, b) => a + b
          );
          const varianza = sumaDatosRestaMediaCuadrado / datosNumber.length;
          varianzaResult.value = varianza;
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      tabs,
      // Variables
      datos,
      media,
      // Funciones - Media
      validarDatos,
      calcularMedia,
      // Funciones - Moda
      datosModa,
      moda,
      calcularModa,
      // Funciones - Mediana
      datosMediana,
      mediana,
      calcularMediana,
      // Funciones - Desviación estándar
      datosDesviacion,
      desviacion,
      calcularDesviacion,
      // Funciones - Varianza
      datosVarianza,
      varianzaResult,
      calcularVarianza,
    };
  },
});
</script>

<style>
a {
  color: #1f8a70;
  text-decoration: none;
}
</style>
