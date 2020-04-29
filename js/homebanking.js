//Declaración de variables
var nombreUsuario = "Tadeo Aguirre";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar

function sumarDinero(dinero) {
    saldoCuenta += dinero;
}
function restarDinero(dinero) {
    saldoCuenta -= dinero;
}
function esValido(numero) {
    if (isNaN(numero)) {
        return false;
    }
    return true;
}
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt('Ingrese nuevo limite: '));
    if (!esValido(nuevoLimite)) {
        return null;
    }
    var limiteAnterior = limiteExtraccion;
    limiteExtraccion = nuevoLimite;
    alert(
        'Limite de extraccion anterior: ' + limiteAnterior + '\n'
        + 'Limite de extraccion actual: ' + limiteExtraccion
    );
    actualizarLimiteEnPantalla();

}

function extraerDinero() {
    var dineroExtraer = parseInt(prompt("Extraer Plata"));
    if (!esValido(dineroExtraer)) {
        return null;
    }
    var saldoCuentaAnterior = saldoCuenta;
    if (dineroExtraer > saldoCuenta) {
        alert('Saldo Insuficiente en su cuenta' + '\n'
            + 'Ingrese un monto mas bajo');
    }
    else if (dineroExtraer > limiteExtraccion) {
        alert("El monto que quiere retirar es mayor que el limite de extraccion");
    }
    else if (dineroExtraer % 100 !== 0) {
        alert("Solo se pueden se puede retirar billetes de 100");
    }
    else if (dineroExtraer <= 0) {
        alert("Ingrese un numero valido");
    }
    else {
        restarDinero(dineroExtraer);
        alert(
            'Saldo cuenta: ' + saldoCuentaAnterior + '\n'
            + 'Dinero a Extraer: ' + dineroExtraer + '\n'
            + 'Saldo Cuenta Actual: ' + saldoCuenta
        );
    }
    actualizarSaldoEnPantalla();
}

function depositarDinero() {
    var dineroDepositar = parseInt(prompt('Depositar Plata'));
    if (!esValido(dineroDepositar)) {
        return;
    }
    if (dineroDepositar <= 0) {
        alert("Ingrese un numero valido");
    }
    else {
        var saldoCuentaAnterior = saldoCuenta;
        sumarDinero(dineroDepositar);
        alert(
            'Saldo cuenta: ' + saldoCuentaAnterior + '\n' +
            'Dinero a depositar: ' + dineroDepositar + '\n' +
            'Saldo Cuenta Actual: ' + saldoCuenta
        );
    }
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    var pagarServicio = parseInt(prompt('Ingrese el numero que corresponda al servicio que quieres pagar:'
        + '\n1 Agua \n2 Telefono \n3 Luz \n4 Internet '));
    var saldoCuentaAnterior = saldoCuenta;
    var costoServicio = [null, 350, 425, 210, 570];
    if (costoServicio[pagarServicio] > saldoCuenta) {
        alert("El monto del servicio supera el monto del saldo de la cuenta");
    }

    else {
        switch (pagarServicio) {
            case 1:
                var nombreServicio = 'Agua';
                restarDinero(costoServicio[pagarServicio]);
                break;
            case 2:
                var nombreServicio = 'Telefono';
                restarDinero(costoServicio[pagarServicio]);
                break;

            case 3:
                var nombreServicio = 'Luz';
                restarDinero(costoServicio[pagarServicio]);
                break;
            case 4:
                var nombreServicio = 'Internet';
                restarDinero(costoServicio[pagarServicio]);
                break;
            default: alert('Ingrese un numero valido');
                return;
        }
        alert(
            'has pagado el servicio: ' + nombreServicio + '\n' +
            'Saldo cuenta: ' + saldoCuentaAnterior + '\n' +
            'Costo del servicio pagado: ' + costoServicio[pagarServicio] + '\n' +
            'Saldo actual: ' + saldoCuenta
        );
    }
    actualizarSaldoEnPantalla();
}
function transferirDinero() {
    var cuentaTransferir = parseInt(prompt('Ingrese cuenta a transferir: '));
    if (cuentaTransferir !== cuentaAmiga1 && cuentaTransferir !== cuentaAmiga2) {
        alert('No se le puede transferir saldo a una cuenta no amiga.');
    }
    else {
        var transferir = parseInt(prompt('Ingrese el monto a transferir: '));
        if (transferir > saldoCuenta) {
            alert('No hay saldo suficiente en tu cuenta para transferir ese monto');
        }
        else if (transferir <= 0) {
            alert('Ingrese un numero valido');
        }
        else {
            saldoCuenta -= transferir;
            alert('Se ha transferido:  ' + transferir + '\n'
                + 'Cuenta destino: ' + cuentaTransferir
            );
        }
    }
    actualizarSaldoEnPantalla();
}

function iniciarSesion() {
    var codVerificacion = '123456';
    var nombreUsuario = "Aguirre Tadeo";
    var codigoIngresado = prompt('Ingresar un Codigo de verificacion');
    if (codVerificacion == codigoIngresado) {
        return alert('Ingresaste a tu Homebanking ' + nombreUsuario + ' ya puedes realizar operaciones.');
    }
    else {
        alert('Codigo de verificacion incorrecto, tu dinero a sido retenido por cuestiones de seguridad');
        saldoCuenta = 0;
    }
}

    


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
