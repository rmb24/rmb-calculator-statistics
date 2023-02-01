<template>
  <q-page class="q-pa-md">
    <!--Ir a la pagina de datos agrupados router-link-->
    <q-btn
      color="primary"
      label="Ir a datos agrupados"
      icon="las la-table"
      to="/datos-agrupados"
      class="q-mb-md q-mt-md"
    >
      <!-- Mostrar la nueva funcion de datos agrupados -->
      <q-badge floating color="secondary" label="Nuevo" />
    </q-btn>

    <!-- Navegacion con id para poder navegar a la seccion -->
    <q-btn-group
      unelevated
      outline
      rounded
      class="q-mb-md"
      align="center"
      spread
    >
      <q-btn
        color="primary"
        label="Media"
        @click="navigateToElement('media')"
        icon="las la-calculator"
      />
      <q-btn
        color="primary"
        label="Moda"
        @click="navigateToElement('moda')"
        icon="las la-calculator"
      />
      <q-btn
        color="primary"
        label="Mediana"
        @click="navigateToElement('mediana')"
        icon="las la-calculator"
      />
      <q-btn
        color="primary"
        label="Desviación estándar"
        @click="navigateToElement('desviacion')"
        icon="las la-calculator"
      />
      <q-btn
        color="primary"
        label="Varianza"
        @click="navigateToElement('varianza')"
        icon="las la-calculator"
      />
    </q-btn-group>

    <!-- Tarjeta para ingresar los datos a calcular de la media -->
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
            v-model="datos"
            label="Datos"
            hint="Ingrese los datos separados por coma"
            filled
            type="text"
            :rules="[validarDatos]"
            clear-icon="las la-times"
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
      <q-separator inset />
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
                  La media aritmética es la suma de todos los datos dividido
                  entre la cantidad de datos.
                </p>
                <p class="text-body1">
                  <strong>media = (x1 + x2 + x3 + ... + xn) / n</strong>
                </p>
                <p class="text-body1">
                  Donde <strong>x1, x2, x3, ... , xn</strong> son los datos y
                  <strong>n</strong> es la cantidad de datos.
                </p>

                <p class="text-h6">Ejemplo:</p>
                <p class="text-body1">
                  <strong>media = (1 + 2 + 3 + 4 + 5) / 5</strong>
                </p>
                <p class="text-body1">
                  <strong>media = 15 / 5</strong>
                </p>
                <p class="text-body1">
                  <strong>media = 3</strong>
                </p>
              </q-card-section>
              <q-separator inset />
              <q-card-section
                class="q-mt-md bg-primary text-white"
                v-if="datos.length > 0"
              >
                <p class="text-h6">En este caso:</p>
                <p class="text-body1">
                  <strong
                    >media = ({{ datos.split(',').join(' + ') }}) /
                    {{ datos.split(',').length }}</strong
                  >
                </p>
                <p class="text-body1">
                  <strong
                    >media = {{ sumaDatos }} /
                    {{ datos.split(',').length }}</strong
                  >
                </p>
                <p class="text-body1">
                  <strong>media = {{ media }}</strong>
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
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
      id="moda"
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
            clear-icon="las la-times"
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
      <q-separator inset />
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input v-model="moda" label="Moda" filled readonly />
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
                  La moda es el dato que más se repite en un conjunto de datos.
                </p>
                <p class="text-body1">
                  <strong>moda = x</strong>
                </p>
                <p class="text-body1">
                  Donde <strong>x</strong> es el dato que más se repite.
                </p>

                <p class="text-h6">Ejemplo 1:</p>
                <p class="text-body1">
                  <strong>moda = 2, 3</strong>
                </p>
                <p class="text-body1">
                  En este caso hay dos modas, 2 y 3, ya que se repiten dos
                  veces.
                </p>

                <p class="text-h6">Ejemplo 2:</p>
                <p class="text-body1">
                  <strong>moda = 1, 2, 3, 4, 5</strong>
                </p>
                <p class="text-body1">
                  En este caso no hay moda, ya que todos los datos se repiten
                  una vez.
                </p>

                <p class="text-h6">Ejemplo 3:</p>
                <p class="text-body1">
                  <strong>moda = 1, 2, 2, 3, 4, 5, 5</strong>
                </p>
                <p class="text-body1">
                  En este caso hay dos modas, 2 y 5, ya que se repiten dos
                  veces.
                </p>
                <p class="text-body1">
                  <strong>Nota:</strong> Si hay dos o más modas, se puede tomar
                  la que más se repita. En caso de que se repitan la misma
                  cantidad de veces, se puede tomar cualquiera de ellas.
                </p>
              </q-card-section>
              <q-separator inset />
              <q-card-section
                class="q-mt-md bg-primary text-white"
                v-if="datosModa.length > 0"
              >
                <p class="text-h6">En este caso:</p>
                <p class="text-body1">
                  <strong>moda = {{ moda }}</strong>
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
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
      id="mediana"
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
      <q-separator inset />
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input v-model="mediana" label="Mediana" filled readonly />
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
                  La mediana es el dato que se encuentra en la mitad de un
                  conjunto de datos.
                </p>
                <p class="text-body1">
                  <strong>mediana = x</strong>
                </p>
                <p class="text-body1">
                  Donde <strong>x</strong> es el dato que se encuentra en la
                  mitad.
                </p>

                <p class="text-h6">Para calcular la mediana:</p>
                <p class="text-body1">1. Ordenar los datos de menor a mayor.</p>
                <p class="text-body1">
                  2. Si el número de datos es impar, la mediana es el dato que
                  se encuentra en la mitad.
                </p>
                <p class="text-body1">
                  3. Si el número de datos es par, la mediana es el promedio de
                  los dos datos que se encuentran en la mitad.
                </p>

                <p class="text-h6">Ejemplo 1:</p>
                <p class="text-body1">
                  <strong>mediana = 2, 3, 4, 5, 6</strong>
                </p>
                <p class="text-body1">
                  En este caso el número de datos es impar, por lo tanto la
                  mediana es el dato que se encuentra en la mitad, que es
                  <strong>4</strong>.
                </p>

                <p class="text-h6">Ejemplo 2:</p>
                <p class="text-body1">
                  <strong>mediana = 2, 3, 4, 5, 6, 7</strong>
                </p>
                <p class="text-body1">
                  En este caso el número de datos es par, por lo tanto la
                  mediana es el promedio de los dos datos que se encuentran en
                  la mitad, que es 4 y 5, por lo tanto la mediana es
                  <strong>4.5</strong>.
                </p>
              </q-card-section>
              <q-separator inset />
              <q-card-section
                class="q-mt-md bg-primary text-white"
                v-if="datosMediana.length > 0"
              >
                <p class="text-h6">En este caso:</p>
                <p class="text-body1">
                  <strong>mediana = {{ datosMediana.split(',') }}</strong>
                </p>
                <p class="text-body1">
                  <strong>mediana = {{ mediana }}</strong>
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
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
      id="desviacion"
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
      <q-separator inset />
      <q-card-section>
        <p class="text-h6">Resultado</p>
        <q-form>
          <q-input
            v-model="desviacion"
            label="Desviación estándar"
            filled
            readonly
          />
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
                  La desviación estándar es una medida de dispersión que nos
                  indica qué tan dispersos están los datos de un conjunto.
                </p>
                <p class="text-body1">
                  <strong>desviación estándar = Σ (x - x̄)² / n</strong>
                </p>
                <p class="text-body1">
                  Donde <strong>x</strong> es cada dato del conjunto,
                  <strong>x̄</strong> es la media y <strong>n</strong> es el
                  número de datos.
                </p>

                <p class="text-h6">Para calcular la desviación estándar:</p>
                <p class="text-body1">1. Calcular la media de los datos.</p>
                <p class="text-body1">
                  2. Calcular la diferencia entre cada dato y la media.
                </p>
                <p class="text-body1">3. Elevar al cuadrado cada diferencia.</p>
                <p class="text-body1">
                  4. Sumar todos los resultados de los cuadrados.
                </p>
                <p class="text-body1">
                  5. Dividir el resultado de la suma entre el número de datos.
                </p>
                <p class="text-body1">
                  6. Calcular la raíz cuadrada del resultado de la división.
                </p>

                <p class="text-h6">Ejemplo:</p>
                <p class="text-body1">
                  <strong>desviación estándar = 3, 4, 5, 6, 7</strong>
                </p>
                <p class="text-body1">
                  1. Calcular la media de los datos, que es
                  <strong>5</strong>.
                </p>
                <p class="text-body1">
                  2. Calcular la diferencia entre cada dato y la media.
                </p>
                <p class="text-body1">
                  <strong>3 - 5 = -2</strong>
                </p>
                <p class="text-body1">
                  <strong>4 - 5 = -1</strong>
                </p>
                <p class="text-body1">
                  <strong>5 - 5 = 0</strong>
                </p>
                <p class="text-body1">
                  <strong>6 - 5 = 1</strong>
                </p>
                <p class="text-body1">
                  <strong>7 - 5 = 2</strong>
                </p>
                <p class="text-body1">3. Elevar al cuadrado cada diferencia.</p>
                <p class="text-body1">
                  <strong>-2² = 4</strong>
                </p>
                <p class="text-body1">
                  <strong>-1² = 1</strong>
                </p>
                <p class="text-body1">
                  <strong>0² = 0</strong>
                </p>
                <p class="text-body1">
                  <strong>1² = 1</strong>
                </p>
                <p class="text-body1">
                  <strong>2² = 4</strong>
                </p>
                <p class="text-body1">
                  4. Sumar todos los resultados de los cuadrados.
                </p>
                <p class="text-body1">
                  <strong>4 + 1 + 0 + 1 + 4 = 10</strong>
                </p>
                <p class="text-body1">
                  5. Dividir el resultado de la suma entre el número de datos.
                </p>
                <p class="text-body1">
                  <strong>10 / (5-1) = 2.5</strong>
                </p>
                <p class="text-body1">
                  6. Calcular la raíz cuadrada del resultado de la división.
                </p>
                <p class="text-body1">
                  <strong>√2.5 = 1.5811388300841898</strong>
                </p>
                <p class="text-body1">
                  La desviación estándar es <strong>1.5811388300841898</strong>.
                </p>
                <p class="text-body1">
                  <strong>Nota:</strong> Para calcular la desviación estándar de
                  una muestra, es necesario tener en cuenta el número de datos
                  de la misma. Si no se conoce este número, se recomienda
                  utilizar la Corrección de Bessel, que consiste en restar 1 al
                  número de datos.
                  <br />
                  <br />
                  Por ejemplo, si se tienen 5 datos, se debe dividir entre 4
                  para obtener la desviación estándar:
                  <strong>desviación estándar = Σ (x - x̄)² / (n - 1)</strong>
                  <br />
                  <br />
                  Si se conoce el número de datos, se debe dividir entre el
                  mismo: <strong>desviación estándar = Σ (x - x̄)² / n</strong>
                  <br />
                  <br />
                  Aplicando este procedimiento con el conjunto de datos [3, 4,
                  5, 6, 7], se obtiene un resultado de
                  <strong>1.4142135623730951</strong>.
                </p>
              </q-card-section>
            </template>
          </q-expansion-item>
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
      id="varianza"
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
      <q-separator inset />
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
                La varianza es una medida de dispersión que indica qué tan lejos
                están los datos de la media.
              </p>
              <p class="text-body1">1. Calcular la media de los datos.</p>
              <p class="text-body1">
                2. Calcular la diferencia entre cada dato y la media.
              </p>
              <p class="text-body1">3. Elevar al cuadrado cada diferencia.</p>
              <p class="text-body1">
                4. Sumar todos los resultados de los cuadrados.
              </p>
              <p class="text-body1">
                5. Dividir el resultado de la suma entre el número de datos.
              </p>
              <p class="text-h6">Ejemplo:</p>
              <p class="text-body1">
                Calcular la varianza de los datos
                <strong>3, 4, 5, 6, 7</strong>.
              </p>
              <p class="text-body1">1. Calcular la media de los datos.</p>
              <p class="text-body1">
                <strong>3 + 4 + 5 + 6 + 7 = 25</strong>
              </p>
              <p class="text-body1">
                <strong>25 / 5 = 5</strong>
              </p>
              <p class="text-body1">La media es <strong>5</strong>.</p>
              <p class="text-body1">
                2. Calcular la diferencia entre cada dato y la media.
              </p>
              <p class="text-body1">
                <strong>3 - 5 = -2</strong>
              </p>
              <p class="text-body1">
                <strong>4 - 5 = -1</strong>
              </p>
              <p class="text-body1">
                <strong>5 - 5 = 0</strong>
              </p>
              <p class="text-body1">
                <strong>6 - 5 = 1</strong>
              </p>
              <p class="text-body1">
                <strong>7 - 5 = 2</strong>
              </p>
              <p class="text-body1">3. Elevar al cuadrado cada diferencia.</p>
              <p class="text-body1">
                <strong>-2² = 4</strong>
              </p>
              <p class="text-body1">
                <strong>-1² = 1</strong>
              </p>
              <p class="text-body1">
                <strong>0² = 0</strong>
              </p>
              <p class="text-body1">
                <strong>1² = 1</strong>
              </p>
              <p class="text-body1">
                <strong>2² = 4</strong>
              </p>
              <p class="text-body1">
                4. Sumar todos los resultados de los cuadrados.
              </p>
              <p class="text-body1">
                <strong>4 + 1 + 0 + 1 + 4 = 10</strong>
              </p>
              <p class="text-body1">
                5. Dividir el resultado de la suma entre el número de datos.
              </p>
              <p class="text-body1">
                <strong>10 / 5 = 2</strong>
              </p>
              <p class="text-body1">La varianza es <strong>2</strong>.</p>
            </q-card-section>
          </template>
        </q-expansion-item>
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
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const navigateToElement = (element: string) => {
      const el = document.getElementById(element);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    // Variables
    const datos = ref('');
    const media = ref(0);
    const sumaDatos = ref(0);

    // Funciones - Media
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

    const calcularMedia = () => {
      if (datos.value) {
        const datosArray = datos.value.split(',');
        const datosNumber = datosArray.map((dato) => Number(dato)); // Convierte los datos a números
        const sumaDatosComputed = computed(() => {
          // Calcula la suma de los datos ingresados y la devuelve como computed para que se actualice automáticamente
          return datosNumber.reduce((a, b) => a + b, 0);
        });
        sumaDatos.value = sumaDatosComputed.value;
        media.value = sumaDatosComputed.value / datosNumber.length; // Calcula la media de los datos ingresados
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
      try {
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
          if (datosNumber.length > 1) {
            const desviacionEstandar =
              Math.sqrt(
                sumaDatosRestaMediaCuadrado / (datosNumber.length - 1)
              ) || 0;
            desviacion.value = desviacionEstandar;
          } else {
            desviacion.value = 0;
          }
        }
      } catch (error) {
        console.log(error);
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
      navigateToElement,
      // Variables
      datos,
      media,
      sumaDatos,
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

<style></style>
