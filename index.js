function genRanNum(method, n) {
  if (typeof n !== "number") {
    return "ERROR💥: Only numbers";
  }

  if (method === "nomethod") {
    return Math.random() * n;
  } else if (method === "floor") {
    return Math.floor(Math.random() * n);
  } else if (method === "ceil") {
    return Math.ceil(Math.random() * num);
  } else if (method === "trunc") {
    return Math.trunc(Math.random() * n);
  } else if (method === "round") {
    return Math.round(Math.random() * n);
  }
}

module.exports = genRanNum;
