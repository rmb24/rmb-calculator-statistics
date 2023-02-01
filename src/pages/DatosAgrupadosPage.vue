<template>
  <q-page class="q-pa-md">
    <q-btn
      class="q-mb-md"
      color="primary"
      label="Volver"
      icon="las la-arrow-left"
      to="/"
    />
    <!-- Tarjeta para calcular la media con los datos agrupados -->
    <q-card
      class="q-col-6 q-mb-md q-mt-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
      id="media"
    >
      <q-card-section>
        <p class="text-h6">Calcular media</p>
        <q-form @submit="calcularMedia" class="q-gutter-md">
          <q-input
            v-model="datosAgrupadosMedia"
            label="Datos agrupados"
            filled
            type="text"
            hint="Los rangos deben estar separados por guiones y los datos por comas"
            lazy-rules
            :rules="[validarDatos]"
          />
          <q-input
            v-model="frecuenciasMedia"
            label="Frecuencias"
            filled
            type="text"
            hint="Separadas por comas"
            lazy-rules
            :rules="[validarFrecuencias]"
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
          />
          <q-separator inset />
          <q-card-section v-if="resultadoMedia">
            <p class="text-h6">Resultado</p>
            <p class="text-h5">
              <strong>{{ resultadoMedia }}</strong>
            </p>
          </q-card-section>

          <!-- Expansión para mostrar el procedimiento -->
          <q-expansion-item
            popup
            class="q-mt-md"
            icon="las la-info-circle"
            label="Ver procedimiento"
            expand-separator
            dense
            header-class="bg-primary text-white"
            expand-icon-class="text-white"
          >
            <template v-slot:default>
              <q-card-section>
                <p class="text-h6">Procedimiento</p>
                <p class="text-body1">
                  Para calcular la media de los datos agrupados, se debe
                  calcular el valor de la clase para cada uno de los datos
                  agrupados y luego calcular la media con los datos obtenidos.
                </p>
                <p class="text-h6">Ejemplo</p>
                <p class="text-body1">
                  Se tiene la siguiente tabla de frecuencias:
                </p>
                <q-table
                  :class="['table', 'table-bordered']"
                  :data="[
                    {
                      datoAgrupado: '0 - 10',
                      frecuencia: 2,
                    },
                    {
                      datoAgrupado: '10 - 20',
                      frecuencia: 4,
                    },
                    {
                      datoAgrupado: '20 - 30',
                      frecuencia: 6,
                    },
                    {
                      datoAgrupado: '30 - 40',
                      frecuencia: 8,
                    },
                    {
                      datoAgrupado: '40 - 50',
                      frecuencia: 10,
                    },
                  ]"
                  :columns="columnsMediana"
                  :rows="filasMediana"
                  :rows-per-page-options="[5]"
                  class="q-mt-md"
                />
                <p class="text-body1 q-mt-md">
                  En este caso, se debe calcular el valor de la clase para cada
                  uno de los datos agrupados:
                </p>
                <p class="text-body1">
                  <strong>Valor de la clase 1:</strong> (0 + 10) / 2 = 5
                </p>
                <p class="text-body1">
                  <strong>Valor de la clase 2:</strong> (10 + 20) / 2 = 15
                </p>
                <p class="text-body1">
                  <strong>Valor de la clase 3:</strong> (20 + 30) / 2 = 25
                </p>
                <p class="text-body1">
                  <strong>Valor de la clase 4:</strong> (30 + 40) / 2 = 35
                </p>
                <p class="text-body1">
                  <strong>Valor de la clase 5:</strong> (40 + 50) / 2 = 45
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para calcular la moda con los datos agrupados -->
    <q-card
      class="q-col-6 q-mb-md q-mt-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
      id="media"
    >
      <q-card-section>
        <p class="text-h6">Calcular Moda</p>
        <q-form @submit="calcularModa" class="q-gutter-md">
          <q-input
            v-model="datosAgrupadosModa"
            label="Datos agrupados"
            filled
            type="text"
            hint="Los rangos deben estar separados por guiones y los datos por comas"
            lazy-rules
            :rules="[validarDatos]"
          />
          <q-input
            v-model="frecuenciasModa"
            label="Frecuencias"
            filled
            type="text"
            hint="Separadas por comas"
            lazy-rules
            :rules="[validarFrecuencias]"
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
          />
          <q-separator inset />
          <q-card-section v-if="resultadoModa">
            <p class="text-h6">Resultado</p>
            <p class="text-h5">
              <strong>{{ resultadoModa }}</strong>
            </p>
          </q-card-section>

          <!-- Expansión para mostrar el procedimiento -->
          <q-expansion-item
            popup
            class="q-mt-md"
            icon="las la-info-circle"
            label="Ver procedimiento"
            expand-separator
            dense
            header-class="bg-primary text-white"
            expand-icon-class="text-white"
          >
            <template v-slot:default>
              <q-card-section>
                <p class="text-h6">Procedimiento</p>
                <p class="text-body1">
                  La moda de un conjunto de datos agrupados es el valor que más
                  frecuentemente ocurre en un grupo de datos. Se trata de una
                  medida de tendencia central que se utiliza para describir la
                  distribución de datos y determinar cuál es el valor más común
                  en un grupo de observaciones. La moda es útil cuando se desea
                  conocer el valor más común en un conjunto de datos, y es
                  especialmente útil para describir distribuciones de datos que
                  no son simétricas o que tienen una forma distinta.
                </p>
                <p class="text-body1">
                  Para calcular la moda con datos agrupados, se debe realizar lo
                  siguiente:
                </p>
                <p class="text-body1">
                  <strong> <span class="text-primary">M</span> = xi </strong>
                </p>
                <p class="text-body1">Donde:</p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">M</span>
                  </strong>
                  : Es la moda
                </p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">xi</span>
                  </strong>
                  : Es el dato agrupado
                </p>
                <p class="text-h6">Ejemplo</p>
                <p class="text-body1">
                  Se tiene la siguiente tabla de frecuencias:
                </p>
                <q-table
                  :class="['table', 'table-bordered']"
                  :data="[
                    {
                      datoAgrupado: '0 - 10',
                      frecuencia: 2,
                    },
                    {
                      datoAgrupado: '10 - 20',
                      frecuencia: 4,
                    },
                    {
                      datoAgrupado: '20 - 30',
                      frecuencia: 6,
                    },
                    {
                      datoAgrupado: '30 - 40',
                      frecuencia: 8,
                    },
                    {
                      datoAgrupado: '40 - 50',
                      frecuencia: 10,
                    },
                  ]"
                  :columns="columnsMediana"
                  :rows="filasMediana"
                  :rows-per-page-options="[5]"
                  class="q-mt-md"
                />
                <p class="text-body1 q-mt-md q-mb-md">
                  Se debe calcular la moda de los datos agrupados, para ello se
                  debe calcular el dato agrupado que tiene la frecuencia más
                  alta, en este caso es el dato agrupado
                  <strong>40 - 50</strong> , por lo tanto la moda es
                  <strong>45</strong>.
                </p>
              </q-card-section>
              <q-separator inset />
              <q-card-section
                class="q-mt-md bg-primary text-white"
                v-if="datosAgrupadosModa && frecuenciasModa"
              >
                <p class="text-h6">Datos</p>
                <p>
                  <strong>Datos agrupados:</strong>
                  {{ datosAgrupadosModa }}
                </p>
                <p>
                  <strong>Frecuencias:</strong>
                  {{ frecuenciasModa }}
                </p>

                <p class="text-h6">Moda</p>
                <p>
                  <strong>Moda:</strong>
                  {{ resultadoModa }}
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
        </q-form>
      </q-card-section>
    </q-card>
    <!-- Tarjeta para calcular la mediana con los datos agrupados -->
    <q-card
      class="q-col-6 q-mb-md q-mt-md q-mx-auto"
      align="center"
      color="secondary"
      elevated
      padding="20px"
      id="mediana"
    >
      <q-card-section>
        <p class="text-h6">Calcular Mediana</p>
        <q-form @submit="calcularMediana" class="q-gutter-md">
          <q-input
            v-model="datosAgrupadosMediana"
            label="Datos agrupados"
            filled
            type="text"
            hint="Los rangos deben estar separados por guiones y los datos por comas"
            lazy-rules
            :rules="[validarDatos]"
          />
          <q-input
            v-model="frecuenciasMediana"
            label="Frecuencias"
            filled
            type="text"
            hint="Separadas por comas"
            lazy-rules
            :rules="[validarFrecuencias]"
          />
          <q-btn
            type="submit"
            color="primary"
            label="Calcular"
            class="q-mt-md"
          />
          <q-separator inset />
          <q-card-section v-if="resultadoMediana">
            <p class="text-h6">Resultado</p>
            <p class="text-h5">
              <strong>{{ resultadoMediana }}</strong>
            </p>
          </q-card-section>

          <!-- Expansión para mostrar el procedimiento -->
          <q-expansion-item
            popup
            class="q-mt-md"
            icon="las la-info-circle"
            label="Ver procedimiento"
            expand-separator
            dense
            header-class="bg-primary text-white"
            expand-icon-class="text-white"
          >
            <template v-slot:default>
              <q-card-section>
                <p class="text-h6">Procedimiento</p>
                <p class="text-body1">
                  La mediana de un conjunto de datos agrupados es el valor que
                  se encuentra en la mitad de la distribución de datos. Se trata
                  de una medida de tendencia central que se utiliza para
                  describir la distribución de datos y determinar cuál es el
                  valor central en un grupo de observaciones. La mediana es útil
                  cuando se desea conocer el valor central en un conjunto de
                  datos, y es especialmente útil para describir distribuciones
                  de datos que no son simétricas o que tienen una forma
                  distinta. Para calcular la mediana con datos agrupados, se
                  debe realizar lo siguiente:
                </p>
                <p class="text-body1">
                  <strong> <span class="text-primary">M</span> = xi </strong>
                </p>
                <p class="text-body1">Donde:</p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">M</span>
                  </strong>
                  : Es la mediana
                </p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">xi</span>
                  </strong>
                  : Es el dato agrupado
                </p>

                <p class="text-h6">Ejemplo</p>
                <p class="text-body1">
                  Se tiene la siguiente tabla de frecuencias:
                </p>
                <q-table
                  :class="['table', 'table-bordered']"
                  :data="[
                    {
                      datoAgrupado: '0 - 10',
                      frecuencia: 2,
                    },
                    {
                      datoAgrupado: '10 - 20',
                      frecuencia: 4,
                    },
                    {
                      datoAgrupado: '20 - 30',
                      frecuencia: 6,
                    },
                    {
                      datoAgrupado: '30 - 40',
                      frecuencia: 8,
                    },
                    {
                      datoAgrupado: '40 - 50',
                      frecuencia: 10,
                    },
                  ]"
                  :columns="columnsMediana"
                  :rows="filasMediana"
                  :rows-per-page-options="[5]"
                  class="q-mt-md"
                />
                <p class="text-body1 q-mt-md">
                  Para calcular la mediana, se debe sumar las frecuencias de
                  cada dato agrupado y dividir el resultado entre 2:
                </p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">M</span> = 2 + 4 + 6 + 8 + 10
                  </strong>
                </p>
                <p class="text-body1">
                  <strong> <span class="text-primary">M</span> = 30 </strong>
                </p>
                <p class="text-body1">
                  <strong>
                    <span class="text-primary">M</span> = 30 / 2
                  </strong>
                </p>
                <p class="text-body1">
                  <strong> <span class="text-primary">M</span> = 15 </strong>
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Footer simple -->
    <q-separator inset />
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
  name: 'DatosAgrupadosPage',
  setup() {
    // Columnas para la tabla de mediana
    const columnsMediana = [
      {
        name: 'datoAgrupado',
        label: 'Dato agrupado',
        field: 'datoAgrupado',
        align: 'center',
        sortable: true,
      },
      {
        name: 'frecuencia',
        label: 'Frecuencia',
        field: 'frecuencia',
        align: 'center',
        sortable: true,
      },
    ];
    // Filas para la tabla de mediana
    const filasMediana = [
      {
        datoAgrupado: '0 - 10',
        frecuencia: 2,
      },
      {
        datoAgrupado: '10 - 20',
        frecuencia: 4,
      },
      {
        datoAgrupado: '20 - 30',
        frecuencia: 6,
      },
      {
        datoAgrupado: '30 - 40',
        frecuencia: 8,
      },
      {
        datoAgrupado: '40 - 50',
        frecuencia: 10,
      },
    ];
    // Función para validar los rango de datos, deben estar separados por guiones y comas de la siguiente forma: 0-10, 10-20, 20-30, 30-40, 40-50, deben ser números y no pueden estar vacíos
    const validarDatos = (value: string) => {
      if (value === '') {
        return 'Este campo es obligatorio';
      }
      if (value.includes(',')) {
        const datos = value.split(',');
        for (let i = 0; i < datos.length; i++) {
          if (datos[i] === '') {
            return 'Debe haber un número después de la coma';
          }
          if (datos[i].includes('-')) {
            const datos2 = datos[i].split('-');
            for (let j = 0; j < datos2.length; j++) {
              if (datos2[j] === '') {
                return 'Debe haber un número después del guión';
              }
              if (isNaN(Number(datos2[j]))) {
                return 'Solo debe haber números, guiones y comas';
              }
            }
          } else {
            return 'Debe haber un guión entre los números';
          }
        }
      } else {
        if (value.includes('-')) {
          const datos = value.split('-');
          for (let i = 0; i < datos.length; i++) {
            if (datos[i] === '') {
              return 'Debe haber un número después del guión';
            }
            if (isNaN(Number(datos[i]))) {
              return 'Solo debe haber números, guiones y comas';
            }
          }
        } else {
          return 'Debe haber un guión entre los números';
        }
      }
      return true;
    };

    // Validar las frecuencias
    const validarFrecuencias = (value: string) => {
      if (value === '') {
        return 'Este campo es obligatorio';
      }
      if (value.includes(',')) {
        const datos = value.split(',');
        for (let i = 0; i < datos.length; i++) {
          if (datos[i] === '') {
            return 'Debe haber un número después de la coma';
          }
          if (isNaN(Number(datos[i]))) {
            return 'Solo debe haber números y comas';
          }
        }
      } else {
        if (isNaN(Number(value))) {
          return 'Solo debe haber números y comas';
        }
      }
      return true;
    };

    // Variables para calcular la media de datos agrupados
    const datosAgrupadosMedia = ref('');
    const frecuenciasMedia = ref('');
    const resultadoMedia = ref('');

    // Función para calcular la media de datos agrupados usando la fórmula ponderada de la media
    const calcularMedia = () => {
      const datos = datosAgrupadosMedia.value.split(',');
      const frecuencias = frecuenciasMedia.value.split(',');
      let sumaDatos = 0;
      let sumaFrecuencias = 0;
      for (let i = 0; i < datos.length; i++) {
        const rango = datos[i].split('-');
        const promedio = (Number(rango[0]) + Number(rango[1])) / 2; // Se calcula el promedio de cada rango
        sumaDatos += promedio * Number(frecuencias[i]);
        sumaFrecuencias += Number(frecuencias[i]);
      }
      resultadoMedia.value = (sumaDatos / sumaFrecuencias).toString();
    };

    // Variables para calcular la moda
    const datosAgrupadosModa = ref('');
    const frecuenciasModa = ref('');
    const resultadoModa = ref('');

    // Función para calcular la moda, si hay más de una moda, se separan por comas
    const calcularModa = () => {
      const datos = datosAgrupadosModa.value.split(',');
      const frecuencias = frecuenciasModa.value.split(',');
      let frecuenciaMayor = 0;
      let moda = '';
      for (let i = 0; i < frecuencias.length; i++) {
        if (Number(frecuencias[i]) > frecuenciaMayor) {
          frecuenciaMayor = Number(frecuencias[i]);
        }
      }
      for (let i = 0; i < frecuencias.length; i++) {
        if (Number(frecuencias[i]) === frecuenciaMayor) {
          if (moda === '') {
            moda = datos[i];
          } else {
            moda += `, ${datos[i]}`;
          }
        }
      }
      resultadoModa.value = moda;
    };

    // Variables para calcular la mediana
    const datosAgrupadosMediana = ref('');
    const frecuenciasMediana = ref('');
    const resultadoMediana = ref('');

    // Función para calcular la mediana
    const calcularMediana = () => {
      const datos = datosAgrupadosMediana.value.split(',');
      const frecuencias = frecuenciasMediana.value.split(',');
      let sumaFrecuencias = 0;
      let frecuenciaMayor = 0;
      let frecuenciaMenor = 0;
      let frecuenciaMediana = 0;
      let mediana = 0;
      for (let i = 0; i < frecuencias.length; i++) {
        sumaFrecuencias += Number(frecuencias[i]);
        if (Number(frecuencias[i]) > frecuenciaMayor) {
          frecuenciaMayor = Number(frecuencias[i]);
        }
        if (frecuenciaMenor === 0) {
          frecuenciaMenor = Number(frecuencias[i]);
        } else {
          if (Number(frecuencias[i]) < frecuenciaMenor) {
            frecuenciaMenor = Number(frecuencias[i]);
          }
        }
      }
      frecuenciaMediana = (sumaFrecuencias + 1) / 2;
      if (frecuenciaMayor === frecuenciaMenor) {
        mediana = Number(datos[0]);
      } else {
        for (let i = 0; i < frecuencias.length; i++) {
          if (Number(frecuencias[i]) >= frecuenciaMediana) {
            mediana = Number(datos[i]);
            break;
          }
        }
      }
      resultadoMediana.value = mediana.toString();
    };

    return {
      filasMediana,
      columnsMediana,
      datosAgrupadosMedia,
      frecuenciasMedia,
      resultadoMedia,
      validarDatos,
      validarFrecuencias,
      calcularMedia,
      datosAgrupadosModa,
      frecuenciasModa,
      resultadoModa,
      calcularModa,
      datosAgrupadosMediana,
      frecuenciasMediana,
      resultadoMediana,
      calcularMediana,
    };
  },
});
</script>
<style></style>
