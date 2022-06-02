import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  ordersInfo: {},
  shippedOrdersInfo: {},
  deliveredOrdersInfo: {},
  pendingOrdersInfo: {},
  processingOrdersInfo: {},
  cancelledOrdersInfo: {},
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'orders':
      console.log('orders stored ')
      return { ...state, ...rest }
    case 'shippedOrders':
      console.log('shipped orders stored ')
      return { ...state, ...rest }
    case 'deliveredOrders':
      console.log('delivered orders stored ')
      return { ...state, ...rest }
    case 'pendingOrdersInfo':
      console.log('pending orders stored ')
      return { ...state, ...rest }
    case 'cancelledOrders':
      console.log('cancelled orders stored ')
      return { ...state, ...rest }
    case 'processingOrders':
      console.log('processing orders stored ')
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
