// () despues de (url) ya que hay que devolver una funcion tipo promise.
export const apiGet = (url) => () => fetch(url).then(v => v.json()); 