import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useCatFacts } from './cat-facts.application';

export const CatFactsData = () => {
  const [catFacts, setCatFacts] = useRecoilState(useCatFacts) as any;

  return catFacts.map((c: any) => (
    <p className="p-4  m-2 flex rounded-xl bg-team1">{c.text}</p>
  ));
};

export const CatFacts = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CatFactsData />
    </React.Suspense>
  );
};
