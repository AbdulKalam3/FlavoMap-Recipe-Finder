import React, { useEffect } from 'react';

function AdComponent() {
  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.push) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '250px' }}
        data-ad-client="ca-pub-7360554667394701"
        data-ad-slot="6198673929"
        data-ad-format="auto"
      ></ins>
    </div>
  );
}

export default AdComponent;
