const pool = require('../config/db');

const getProducts = async (req, res) => {

    const { category } = req.query;

    let allProducts = "SELECT products.id, title, description, price, image_url FROM products";

    const queryParams = []

    if(category) {
        allProducts += " INNER JOIN categories c ON products.category_id = c.id WHERE c.name = $1";
        queryParams.push(category);
    };

    try {
        const response = await pool.query(allProducts, queryParams);
        res.json(response.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('SELECT products.id, title, description, price, image_url FROM products WHERE id = $1', [id]);
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
    getProducts,
    getProductById,
    getCategories,
};