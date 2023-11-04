import axios from "axios"

export const NavDataLoader = () => {
    const res = axios.get(`/home`)
    .then(res => {
            const brands = JSON.parse(res.data.brands);
            const sneakers = JSON.parse(res.data.categories);
            return { brands, sneakers};
    })
    .catch(err => {
        console.log(err);
        })
        return res;
};

export const heroDataLoader = () => {
    const res = axios.get(`/home`)
    .then(res => {
            const randomProducts = JSON.parse(res.data.products);
            const popularProducts = JSON.parse(res.data.topRatedProducts);
            return {randomProducts, popularProducts};
    })
    .catch(err => {
        console.log(err);
        })
        return res;
  }

  export const SneakerPageLoader = () => {
        // Create an array of Promises for each Axios request
        const sneakerPromise = axios.get(`/product`)
          .then(res => JSON.parse(res.data))
          .catch(err => {
            console.error('Error fetching sneakers:', err);
            return []; // Return an empty array or handle the error as needed
          });
      
        const brandPromise = axios.get(`/brand`)
          .then(res => JSON.parse(res.data))
          .catch(err => {
            console.error('Error fetching brands:', err);
            return []; // Return an empty array or handle the error as needed
          });
      
        const categoryPromise = axios.get(`/category`)
          .then(res => JSON.parse(res.data))
          .catch(err => {
            console.error('Error fetching categories:', err);
            return []; // Return an empty array or handle the error as needed
          });
      
        // Use Promise.all to wait for all promises to resolve
        return Promise.all([sneakerPromise, brandPromise, categoryPromise])
          .then(([allSneakers, brands, categories]) => {
            return { allSneakers, brands, categories };
          })
          .catch(err => {
            console.error('Error loading data:', err);
            throw err; // You can choose to rethrow the error or handle it differently
          });
      };
      
      export const BrandsPageLoader = () => {
        const res = axios.get(`/brand`)
        .then(res => {
          const brands = JSON.parse(res.data);
          return brands;
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
        return res;
      }

      export const fetchUserProfile = async (email, token) => {
        try {
          const response = await axios.post('/api/user-profile', {
            email:email,
        },
           {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          return JSON.parse(response.data);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          return null;
        }
      };

      export const fetchUserCart = async () => {

        if(localStorage.getItem('token')) {
          try {
            const token = localStorage.getItem('token');
            const email = localStorage.getItem('user');
            const response = await axios.post('/api/user_cart', {
              email: email,
          },
          {
            headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
        
            return JSON.parse(response.data);
          } catch (error) {
            // Handle errors, e.g., token expiration
            console.error('Error fetching user profile:', error);
            return null;
          }
        }
        
      };

      export const deleteProductFromCart = async (productId) => {
        try {
          const token = localStorage.getItem('token');
          const email = localStorage.getItem('user');
          const response = await axios.post(`/api/delete_product_from_cart/${productId}`, {
            email: email,
        },
        {
          headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          
            return response; // The request was successful
        } catch (error) {
          console.error('Error deleting product from cart:', error);
          return false; // Handle the error and return a failure flag
        }
      };

      export const removeAllProductsFromCart = async() => {
        try {
          const token = localStorage.getItem('token');
          const email = localStorage.getItem('user');
          const response = await axios.post(`/api/delete_all_products_from_cart`, {
            email: email,
        },
        {
          headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          
            return response;
        } catch (error) {
          console.error('Error deleting product from cart:', error);
          return false;
        }
      };

      export const createOrder = async () => {

        try {
          const token = localStorage.getItem('token');
          const email = localStorage.getItem('user');
          const amount = localStorage.getItem('amount');
          const response = await axios.post(`/api/create_order`, {
            email: email,
            amount: amount,
        },
        {
          headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          return response;

        } catch(error) {
          console.log(error);
        }
      };

      export const getOrders = async () => {

        try {
          const token = localStorage.getItem('token');
          const email = localStorage.getItem('user');
          const response = await axios.post(`/api/get_orders`, {
            email: email,
        },
        {
          headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          return JSON.parse(response.data);

        } catch(error) {
          console.log(error);
        }
      }