const calculateNumber = (type, a, b) => {
  const ax = Math.round(a);
  const bx = Math.round(b);
  switch (type) {
    case 'SUM':
      return ax + bx;
    case 'SUBTRACT':
      return bx - ax;
    case 'DIVIDE':
      return bx ? ax / bx : 'Error';
    default:
      return 'Invalid Type: USE: SUM | SUBTRACT | DIVIDE';
  }
};

module.exports = calculateNumber;
