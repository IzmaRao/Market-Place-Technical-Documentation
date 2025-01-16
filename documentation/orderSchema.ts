
import { Rule } from 'sanity';

export const order = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
          name: 'customerId',
          title: 'Customer ID',
          type: 'number',
          validation: (Rule: Rule) => Rule.required().min(1).error('Customer ID must be a positive number.'),
        },
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'productId',
                  title: 'Product ID',
                  type: 'number',
                  validation: (Rule: Rule) => Rule.required().min(1).error('Product ID must be a positive number.'),
                },
                {
                  name: 'quantity',
                  title: 'Quantity',
                  type: 'number',
                  validation: (Rule: Rule) => Rule.required().min(1).error('Quantity must be at least 1.'),
                },
              ],
              preview: {
                select: {
                  title: 'productId',
                  subtitle: 'quantity',
                },
              },
            },
          ],
          validation: (Rule: Rule) => Rule.required().min(1).error('At least one product is required.'),
        },
        {
          name: 'paymentStatus',
          title: 'Payment Status',
          type: 'string',
          options: {
            list: [
              { title: 'Paid', value: 'Paid' },
              { title: 'Pending', value: 'Pending' },
              { title: 'Failed', value: 'Failed' },
            ],
          },
          validation: (Rule: Rule) => Rule.required().error('Payment status is required.'),
        },
        {
          name: 'orderId',
          title: 'Order ID',
          type: 'number',
          validation: (Rule: Rule) => Rule.required().min(1).error('Order ID must be a positive number.'),
        },
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              { title: 'Order Created', value: 'Order Created' },
              { title: 'Shipped', value: 'Shipped' },
              { title: 'Delivered', value: 'Delivered' },
              { title: 'Cancelled', value: 'Cancelled' },
            ],
          },
          validation: (Rule: Rule) => Rule.required().error('Order status is required.'),
        },
        {
          name: 'message',
          title: 'Message',
          type: 'string',
          validation: (Rule: Rule) => Rule.required().error('A message is required.'),
        },
      ],
};
