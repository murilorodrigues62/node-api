const mongoose = require('mongoose');

const Produt = mongoose.model('Product');

module.exports = {

    // get sem filtro
    async index(req, res) {
        const { page } = req.query;        
        const products = await Produt.paginate({}, {page, limit: 10});

        return res.json(products);

    },

    // post
    async insert(req, res) {
        const produt = await Produt.create(req.body);

        return res.json(produt);
    },

    // get com filtro
    async select(req, res) {
        const produt = await Produt.findById(req.params.id);

        return res.json(produt);

    },

    // put
    async update(req, res) {
        // Encontra pelo id e atualizar com o que vem no req.body
        // new: true faz com que retorna para o product já com as alterações
        const product = await Produt.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // delete
    async delete(req, res) {
        await Produt.findByIdAndRemove(req.params.id);

        return res.send();
    }
};