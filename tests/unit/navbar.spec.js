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

    });
});

const localVue = createLocalVue();
const router = new VueRouter(myRoutes)

// Verificar la funcionalidad de iniciar sesión con mail

describe('Funcionalidad iniciar sesión', () => {
    it('Comprueba que no ha iniciado sesión', () => {
        store.dispatch('updateUser', undefined)
        const wrapper = shallowMount(Navbar, {
            propsData: {
                title: 'Mi Tienda'
            },
            localVue,
            store,
            router,
        })
        expect(wrapper.text()).toContain('Login')
    }),
    it('Comprueba que está logueado', () => {
        store.dispatch('updateUser', {email: 'user@mystore.com'})
        const wrapper = shallowMount(Navbar, {
        propsData: {
            title: "Mi Tienda"
        },
        localVue,
        store,
        router,
        })
        expect(wrapper.text()).toContain('Usuario')
    })
})