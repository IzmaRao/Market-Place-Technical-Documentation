export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'tags',
            type: 'string',
            title: 'Product Tags',
        },
        {
            name: 'sizes',
            type: 'number',
            title: 'Product Sizes',
        },
        {
            name: 'image',
            type: 'string',
            title: 'Image'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
            description: 'Rating of the product'
        },
        {
            name: 'stockQuantity',
            type: 'number',
            title: 'Stock Quantity'
        },
        {
            name: 'id',
            type: 'number',
            title: 'Product ID',
        },
    ]
};
