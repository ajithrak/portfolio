import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { FINTECH_DATA } from '../data/pageData';

const FintechPage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={FINTECH_DATA}
      badgeClassName="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
      demoHref="/demo/fintech"
    />
  );
};

export default FintechPage;
