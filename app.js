function HCF(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let answer = max % min;
  
    while (answer !== 0) {
      let newMin = min;
      min = answer;
      max = newMin;
      answer = max % min;
    }
  
    return min;
  }

module.exports = HCF