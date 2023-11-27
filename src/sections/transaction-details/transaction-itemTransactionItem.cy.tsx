import React from 'react'
import TransactionItem from './transaction-item'

describe('<TransactionItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TransactionItem />)
  })
})