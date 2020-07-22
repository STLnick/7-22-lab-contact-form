const inputs = document.querySelectorAll('.form-input')

console.log(inputs)

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()

  // const test = Array.from(e.target.elements)
  //   .filter(el => el.id)
  //   .map(el => ({ [el.id]: el.value }))
  //   .reduce((acc, el) => ({ ...acc, ...el }), {})

  const test = Array.from(e.target.elements).reduce((acc, el) => {
    acc[el.id] = el.value
    return acc
  }, {})

  console.log(test)

  // inputs.forEach(input => {
  //   console.log(input.value)
  // })
})
