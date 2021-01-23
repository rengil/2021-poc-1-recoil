import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export const useCatFactsAsync = selectorFamily({
  key: 'CatFactsAsync',
  persistence_UNSTABLE: {
    type: 'count',
  },
  get: () => async () => {
    const response = await fetch(
      'https://cat-fact.herokuapp.com/facts'
    ).then((r) => r.json());
    if (response.error) {
      throw response.error;
    }
    return response;
  },
} as any);

export const useCatFacts = atom({
  key: 'catFacts',
  default: useCatFactsAsync,
});
