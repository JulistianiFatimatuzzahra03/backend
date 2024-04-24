const db = require("../database/models");
const kategori = require("../database/models/kategori");
const Kategori = db.Kategori;

// Menambah data 
const store = async (req, res) => {
    try {
        const { jenis_kategori } = req.body;
        const save = await Kategori.create({ jenis_kategori });
        res.json({ status: 200, message: 'Success', data: save });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// Menampilkan data kategori
const index = async (req, res) => {
    try {
        const result = await Kategori.findAll({ attributes: ['jenis_kategori'] });
        res.json({ status: 200, message: 'Success', data: result });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// Menampilkan data kategori berdasarkan id
const show = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Kategori.findByPk(id, { attributes: ['jenis_kategori'] });
        const result = data ? { status: 200, message: 'Success', data: data } : { status: 404, message: 'Not found' };
        res.json(result);
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// Mengupdate data kategori berdasarkan id
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = await Kategori.findByPk(id);
        if (kategori) {
            const { jenis_kategori } = req.body;
            await kategori.update({ jenis_kategori });
            res.json({ status: 200, message: 'Success updated' });
        } else {
            res.json({ status: 404, message: `${id} not found in db` });
        }
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// Menghapus data kategori berdasarkan id
const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = await Kategori.findByPk(id);
        if (kategori) {
            await kategori.destroy();
            res.json({ status: 200, message: 'Success deleted' });
        } else {
            res.json({ status: 404, message: `${id} not found in db` });
        }
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

const findOne = (req, res) => {
    Kategori.findByPk(req.params.id, {
        attributes: { exclude: ['password']}
    }).then((kategori) => {
        if (produk){
            res.json({
                message: "produk retrieved successfully.",
                data: kategori,
            });
        } else {
            res.status(404).json({
                message: "kategori retrieved failed",
                data: kategori
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving kategori.",
            data: null,
        });
    });
};


module.exports = {
    index, show, store,
    update, destroy, findOne
}