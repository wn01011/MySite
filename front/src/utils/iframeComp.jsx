const iframeComp = ({ src }) => {
  return {
    __html: `<iframe id="iframe" src="${src}" width="100%" height="100%"  "></iframe>`,
  };
};

export default iframeComp;
