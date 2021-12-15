import React from 'react'
import { Form } from 'semantic-ui-react'
import { SMALL, MEDIUM, LARGE } from '../../constants/form-styling'

const SoldItem = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Input
          required
          label="Sold Where"
          placeholder="StockX"
          width={LARGE}
        />
        <Form.Input
          required
          label="Sell Date"
          placeholder="08/26/2022"
          width={MEDIUM}
        />
        <Form.Input
          required
          label="Sell Price"
          placeholder="$1000"
          width={SMALL}
        />
        <Form.Input label="Tax" placeholder="$3.50" width={SMALL} />
        <Form.Input label="Shipping" placeholder="$10" width={SMALL} />
        <Form.Input
          required
          label="Sell Total"
          placeholder="$950"
          width={SMALL}
        />
      </Form.Group>
    </Form>
  )
}
export default SoldItem
