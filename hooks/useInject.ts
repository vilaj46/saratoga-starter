import jsxToString from 'jsx-to-string'
import parse from 'html-react-parser'

export const useInject = (text: string, injections: Array<JSX.Element>) => {

  let temp = text

  injections.forEach((injection, idx) => {
    temp = temp.replace(`{${idx}}`, jsxToString(injection))
  })

  return parse(temp) // not working with Link
}

export const useInjectStrings = (text: string, injections: Array<string>) => {

  let temp = text

  injections.forEach((injection, idx) => {
    temp = temp.replace(`{${idx}}`, injection)
  })

  return temp
}