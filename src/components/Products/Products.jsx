import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, category }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

 const parseCat = (cat) => {
   
  let fields = cat.split(',')

  let result = fields[0].substring(cat.search('{Category:')+10, cat.indexOf('}'));
  console.log(result);
  return result;

};

  
    switch (category) {
      case "Hands":
        return (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                parseCat(product.description) === "Hands" ? 
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>: null
              ))}
            </Grid>
          </main>
        );
        // break;
      case "Legs":
        return (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </main>
        );
        // break;
      case "Misc":
        return (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </main>
        );
        // break;
      default:
        return (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </main>
        );
    }


};

export default Products;
