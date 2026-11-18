const modelo = require('../Model/categorias_modelos');
class CategoriasController{
    static async obtenerCategorias(req,res){

            const categorias = await modelo.obtenerCategorias();
            return res.json(categorias);
    }
};
module.exports = CategoriasController;
