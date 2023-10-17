import axios from "axios"

export const NavDataLoader = () => {
    const res = axios.get(`http://localhost:8080/api/`)
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
    const res = axios.get(`http://localhost:8080/api/`)
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
        const sneakerPromise = axios.get(`http://localhost:8080/api/product`)
          .then(res => JSON.parse(res.data))
          .catch(err => {
            console.error('Error fetching sneakers:', err);
            return []; // Return an empty array or handle the error as needed
          });
      
        const brandPromise = axios.get(`http://localhost:8080/api/brand`)
          .then(res => JSON.parse(res.data))
          .catch(err => {
            console.error('Error fetching brands:', err);
            return []; // Return an empty array or handle the error as needed
          });
      
        const categoryPromise = axios.get(`http://localhost:8080/api/category`)
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
        const res = axios.get(`http://localhost:8080/api/brand`)
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

      export const fetchUserProfile = async (token) => {
        try {
          const response = await axios.get('http://localhost:8080/api/user-profile', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          // The user data is in response.data.user
          return JSON.parse(response.data);
        } catch (error) {
          // Handle errors, e.g., token expiration
          console.error('Error fetching user profile:', error);
          return null; // Return null or handle the error as needed
        }
      };

      export const fetchUserCart = async () => {

        if(localStorage.getItem('token')) {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/api/user_cart', {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
        
            return JSON.parse(response.data);
          } catch (error) {
            // Handle errors, e.g., token expiration
            console.error('Error fetching user profile:', error);
            return null; // Return null or handle the error as needed
          }
        }
        
      };
      