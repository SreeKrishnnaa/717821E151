import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const ProductList = ({ products }) => {
  const rootStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  };

  return (
    <div style={rootStyle}>
      <Typography variant="h4" gutterBottom>
        goforMart
      </Typography>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={product.productName}
              secondary={`Price: $${product.price} |  Rating: ${product.rating} | Discount: ${product.discount}%`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProductList;
