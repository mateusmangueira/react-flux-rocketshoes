import produce from 'immer';

// Todo reducer precisa iniciar o state, nesse caso iniciamos com o array vazio, pois o carrinho comeca zerado
export default function cart(state = [], action) {
  // Todos reducer ouvem todas as actions, por isso precisa o switch case para selecionar qual sera disparada pelo Type
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          p => p.id === action.product.id
        );
        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
