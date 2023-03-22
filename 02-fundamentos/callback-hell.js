const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'John'
    },
    {
        id: 3,
        nombre: 'Diana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id);

    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

getEmpleado(10, ( err, empleado ) => {
    if ( err ) {
        console.log('Error!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
})