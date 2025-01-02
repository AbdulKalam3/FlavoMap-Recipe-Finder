import React, { useEffect } from 'react';

function AdComponent() {
  useEffect(() => {
    // Initialize adsbygoogle to load the ad
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="pub-7360554667394701"
           data-ad-slot="6198673929"
           data-ad-format="auto"></ins>
    </div>
  );
}

export default AdComponent;
