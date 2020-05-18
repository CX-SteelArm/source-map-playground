const vlq = require('vlq');

const source = 'AAAA;AACA;AACA;AACA;AACA';

function extract (sourceString) {
  const lines = sourceString.split(';')
  return lines.map(line => line.split(',').map(vlq.decode))
}

console.log(extract(source))

// const source = 'AAAA,IAAIA,GAAG,GAAG,aAAV;AACA,IAAKC,GAAG,GAAGD,GAAX,C'
// const source = 'AAAA;AACA;AACA;AACA;AACA'

// console.log(source.split(/[,;]/).filter(item => item).map(vlq.decode))

// function extract (sourceString) {
//   const lines = sourceString.split(';')
//   return lines.map(line => line.split(',').map(vlq.decode))
// }

// function absolute(source) {
//   return source.map(line => {
//     let relative = [0, 0, 0, 0]
//     return line.map(item => {
//       return relative = add(relative, item)
//     })
//   })
// }

// function add (a, b) {
//   return a.map((aa, index) => aa + b[index])
// }

// console.log(absolute(extract(source)))
