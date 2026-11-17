const modelo = require('../Model/gastos_modelos');
class GastosController{
    static async obtenerGastos(req,res){

            const gastos = await modelo.obtenerGastos();
            return res.json(gastos);
    }
};
module.exports = GastosController;