import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { HEALTHCARE_DATA } from '../data/pageData';

const HealthcarePage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={HEALTHCARE_DATA}
      badgeClassName="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
      demoHref="/demo/healthcare"
    />
  );
};

export default HealthcarePage;
