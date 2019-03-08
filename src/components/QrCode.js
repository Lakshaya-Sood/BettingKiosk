import React from 'react';

const QrCode = ({ base64Str }) => (
  <img src={`data:image/png;base64,${base64Str}`} alt="x" />
)

export default QrCode;
