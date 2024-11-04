import { store } from '../store/index'; 



describe('Vuex Store', () => {
  it('should have initial count as 0', () => {
    expect(store.state.count).toBe(0);
  });

  it('should increment count', () => {
    store.commit('increment');
    expect(store.state.count).toBe(1);
  });

  it('should decrement count', () => {
    store.commit('decrement');
    expect(store.state.count).toBe(0); // debe ser 0 después del decremento
  });
});
