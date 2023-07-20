const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const id = 20

const getEmpleado = (id) =>{

    const promesa = new Promise ((resolve, reject) =>{

        const empleado = empleados.find( (e) =>{
            return e.id == id
        })

        if (empleado) {
            resolve( empleado )
        } else {
            reject(`El empleado con ${id} no existe`)
        }
    })

    return promesa;
}

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) =>{

        const salario = salarios.find( (s) => {
            return s.id == id
        })

        if (salario) {
            resolve(salario)
        } else {
            reject(`No se encontro un salario con ${id}`)
        }

    })

    return promesa

}

getEmpleado(id)
    .then((empleado ) => { console.log(empleado)})
    .catch((err) => { console.log(err)})


getSalario(id)
    .then((salario) => { console.log(salario)})
    .catch((err) => {console.log(err)})