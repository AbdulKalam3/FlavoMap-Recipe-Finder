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
      <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7360554667394701" 
     data-ad-slot="1234567890"               
     data-ad-format="auto"></ins>
<script>
    (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </div>
  );
}

export default AdComponent;
