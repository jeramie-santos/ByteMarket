const pool = require('../config/db');

const getAllProducts = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM products');
        res.json(response.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (response.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(response.rows[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getCategories = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM categories');
        res.json(response.rows);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getCategories,
};