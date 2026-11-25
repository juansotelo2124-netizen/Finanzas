const database = require("../db/conexion_db");
class GastosModel{
    static async obtenerGastos(){
        const [resultado] = await database.query("SELECT gastos.monto, categorias.nombre FROM gastos inner join categorias ON gastos.id_categoria = categorias.id_categoria LIMIT 100");
    
        console.log(resultado)
        return resultado
    
    }
}
module.exports = GastosModel;


