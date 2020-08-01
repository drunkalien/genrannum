function genRanNum(n) {
  if (typeof n !== "number") {
    return "ERROR💥: Only numbers";
  }
  return Math.round(Math.random() * n);
}

module.exports = genRanNum;
