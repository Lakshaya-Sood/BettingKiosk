import React from 'react';

const QrCode = ({ base64Str }) => (
  <img src={`data:image/png;base64,${base64Str}`} alt="x" style={{margin: '60px'}} />
)

export default QrCode;
