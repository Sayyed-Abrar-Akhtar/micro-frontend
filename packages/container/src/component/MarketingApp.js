import { mount } from 'marketing/MarketingApp';
import React, { useRef } from 'react';
import { useEffect } from 'react';

function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });
  return <div ref={ref}>MarketingApp</div>;
}

export default MarketingApp;
