import { React, useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;  
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }, [url])
 };

const TypeForm = () => {
    useScript("https://embed.typeform.com/next/embed.js");
    return (
        <div
            data-tf-widget="BtJjLpcV" 
            data-tf-iframe-props="title=Registration Form" 
            data-tf-medium="snippet" 
            style={{width: "100%", height: "450px"}}>
        </div>
    );
};
export default TypeForm;