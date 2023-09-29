import { Hero, SuperQuality, CustomerReviews, PopularProducts, Services, Subscribe} from '../sections';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  const randomProducts = data.randomProducts;
  const popularProducts = data.popularProducts;
  const bigImg = data.randomProducts[0].img;
  
  return (
  <main className="relative">
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero
      shoes={randomProducts}
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
  </main>
  )
}

export default Home