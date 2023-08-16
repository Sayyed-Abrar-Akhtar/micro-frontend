import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current);
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
}

export default MarketingApp;
