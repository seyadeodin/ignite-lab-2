function toCamelCase(str){
  if(!str) return ''
  
  let newString = str
  let symbol = str.includes('-') ? '-' : '_'

  let arrayOfString = newString.split(symbol)
  console.log(arrayOfString)
  let newArray = []
  
  for(let array in arrayOfString){
    if (array > 0){
      console.log(arrayOfString[array].charAt(0).toUpperCase())
      arrayOfString[array] = arrayOfString[array].charAt(0).toUpperCase() + arrayOfString[array].slice(1)
      console.log(arrayOfString[array])
    }
  } 
  newString = arrayOfString.join('')
  console.log(newString)
}

toCamelCase("the_stealth_warrior")