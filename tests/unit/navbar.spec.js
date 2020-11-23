import { createLocalVue, shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Navbar';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store';
import VueRouter from 'vue-router';
import myRoutes from "./mocks/routes";

describe('Pruebas con el store', () => {
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store)
        router = new VueRouter(myRoutes)
    });
});

const localVue = createLocalVue();


// Verificar la funcionalidad de "Iniciar sesión con mail y contraseña" (Debe comprobar que la sesión del usuario está activa) (3 puntos)

describe('Funcionalidad iniciar sesión', () => {
    it('')
})
