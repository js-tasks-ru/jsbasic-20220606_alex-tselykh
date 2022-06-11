function camelize(str) {
  if (str !== null) {
    return str.split('-').map(
      (part, position) => 
        position == 0 ? part : part[0].toUpperCase() + part.slice(1)
    ).join('');
  }
}
