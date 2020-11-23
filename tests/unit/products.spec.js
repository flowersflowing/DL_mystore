import { createLocalVue, shallowMount } from '@vue/test-utils';
import Products from '@/components/Products.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store';

describe('Pruebas con el store', () => {
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store)
    });
});

const localVue = createLocalVue()

// Verifique la funcionalidad de buscar productos por nombre

describe('Buscar productos por nombre', () => {
    it('Buscar nombre', () => {
      const wrapper = shallowMount(Products)
      const productSearch = 'Bote';
      wrapper.setData({
          products: [
            {name: productSearch}
          ]
      })
      wrapper.find('input').setValue(productSearch)
      expect(wrapper.vm.search).toEqual(productSearch)
    });
    it('Compara nombres adecuadamente', () => {
        const wrapper = shallowMount(Products)
        const sampleProducts = [
            { name: 'Casa', id: '0', price: 100.0},
            { name: 'Bote', id: '1', price: 100.0},
            { name: 'Avión', id: '2', price: 100.0}
        ]
        wrapper.setData({
            products: sampleProducts
        })
        expect(wrapper.vm.computedProductList[2].name).toEqual(sampleProducts[2].name);
    });
    it('Filtra correctamente', () => {
        const wrapper = shallowMount(Products)
        const productSearch = 'Avión';
        wrapper.setData({
            products: [
              {name: productSearch}
            ]
        })
        expect(wrapper.vm.computedProductList).toEqual([{"name": "Avión"}]);
    });
  });

// Verificar que sea posible añadir productos a un carrito de compra y ver el carrito

describe('Agrega productos al carrito', () => {
    it('Agregando al carrito', () => {

        const product = {
            name: 'Casa',
            id: 0,
            price: 100.0,
        }
        const wrapper= shallowMount(Products, {
            localVue,
            Vuex,
            store,
        })
        wrapper.vm.addToCart(product)
        store.dispatch('addToCart', product);
        expect(store.getters.shoppingCart[0]).toBeTruthy;
    })
})

    // describe('Agrega productos al carrito', () => {
    //     it('Agregando al carro', () => {
    //         store.dispatch('addToCart', undefined)
    //         const wrapper = shallowMount(Products, {
    //             propsData: {
    //                 name: 'Bote',
    //                 qty: 1,
    //                 price: 100,
    //             },
    //             localVue,
    //             store,
    //         })
    //         expect(wrapper.text()).toContain(propsData);
    //     })


// Verificar que sea posible eliminar productos del carrito
