import { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero, SuperQuality, CustomerReviews, PopularProducts, Services, Subscribe} from '../sections';
import { Footer, Nav } from '../components';

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const [bigImg, setBigImg] = useState();
  const [popularProducts, setPopularProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/`)
      .then(res => {
        const brandsArray = JSON.parse(res.data.brands);
        const productsArray = JSON.parse(res.data.products);
        const popularProductsArray = JSON.parse(res.data.topRatedProducts);
        setShoes(productsArray);
        setBigImg(productsArray[0].img)
        setPopularProducts(popularProductsArray);
        setBrands(brandsArray);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
  <main className="relative">
    <Nav 
      brands={brands}
    />
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero
      shoes={shoes}
      bigImg={bigImg}
    />
  </section>
  <section className="padding">
  <PopularProducts 
    popularProducts={popularProducts}
  />
  </section>
  <section className="padding">
  <SuperQuality />
  </section>
  <section className="padding-x py-10">
  <Services />
  </section>
  <section className="padding">
  </section>
  <section className="bg-pale-blue padding">
  <CustomerReviews />
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
  <Subscribe />
  </section>
  <section className="bg-black padding-x padding-t pb-8">
  <Footer />
  </section>
  </main>
  )
}

export default Home