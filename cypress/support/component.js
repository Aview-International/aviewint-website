import { mount } from 'cypress/react'
import { Provider } from 'react-redux'
import store from '../../store';

Cypress.Commands.add('mount', (component, options = {}) => {
    const wrapped = <Provider store={store}>{component}</Provider>
    return mount(wrapped, mountOptions)
})