// () despues de (url) ya que hay que devolver una funcion tipo promise.
export const apiGet = (url) => () => fetch(url).then(v => v.json());

export const apiPut = (url, id, obj) => () =>  
    fetch(`${url}/${id}`, {
        method: 'PUT', 
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
