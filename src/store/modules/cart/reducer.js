import produce from 'immer';

// Todo reducer precisa iniciar o state, nesse caso iniciamos com o array vazio, pois o carrinho comeca zerado
export default function cart(state = [], action) {
  // Todos reducer ouvem todas as actions, por isso precisa o switch case para selecionar qual sera disparada pelo Type
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        const { product } = action;
        draftState.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draftState[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
