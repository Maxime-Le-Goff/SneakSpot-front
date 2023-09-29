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

  export const allSneakersLoader = () => {
        const res = axios.get(`http://localhost:8080/api/products`)
       .then(res => {
                const allSneakers = JSON.parse(res.data);
                return {allSneakers};
        })
        .catch(err => {
        console.log(err);
        })
        return res;
  }