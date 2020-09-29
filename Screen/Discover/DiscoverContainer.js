import React, { useEffect, useState } from 'react';
import { movieApi } from '../../api';
import DiscoverPresenter from './DiscoverPresenter';

export default () => {
  const [results, setResult] = useState({
    results: [],
    error: null,
  });

  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setResult({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <DiscoverPresenter {...results} />;
};
