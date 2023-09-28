import { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero, SuperQuality, CustomerReviews, Footer, PopularProducts, Services, Nav, Subscribe} from './sections';

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [bigImg, setBigImg] = useState();
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/`)
      .then(res => {
        const productsArray = JSON.parse(res.data.products);
        const popularProductsArray = JSON.parse(res.data.topRatedProducts);
        setShoes(productsArray);
        setBigImg(productsArray[0].img)
        setPopularProducts(popularProductsArray);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
  <main className="relative">
    <Nav />
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
  <CustomerReviews ></CustomerReviews>
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

export default App;