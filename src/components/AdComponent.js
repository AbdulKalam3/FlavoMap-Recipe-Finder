import React, { useEffect } from 'react';

function AdComponent() {
  useEffect(() => {
    // Ensure the adsbygoogle script is loaded only once
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []); // Empty dependency array to ensure this effect runs only once

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
