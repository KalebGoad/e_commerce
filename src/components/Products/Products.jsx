import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, category }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

    const parseCat = (cat) => {
      
        try {
          console.log(cat);
          let fields = cat.split(',')
          console.log(fields);
          let result = fields[1].substring(
            fields[1].search('{Category:')+11, fields[1].indexOf('}'));
          console.log(cat.search('{Category:')+11);
          console.log(cat.indexOf('}'));
          console.log(result);
          return result;
        } catch (error) {
          return error;
        }
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
                </Grid>:null
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
                parseCat(product.description) === "Legs" ? 
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>:null
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
                parseCat(product.description) === "Misc" ? 
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>:null
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
