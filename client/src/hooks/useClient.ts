import React from 'react';

const useClient = () => {
  const [clientWitdh, setClientWitdh] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);

  React.useEffect(() => {
    setClientWitdh(window.innerWidth);
    setClientHeight(window.innerHeight);

    const onResize = () => {
      setClientWitdh(window.innerWidth);
      setClientHeight(window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    clientWitdh,
    clientHeight,
  };
};

export default useClient;
