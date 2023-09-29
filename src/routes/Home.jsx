import { Hero, SuperQuality, CustomerReviews, PopularProducts, Services, Subscribe} from '../sections';
import { Footer } from '../components';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  const randomProducts = data.randomProducts;
  const popularProducts = data.popularProducts;
  
  return (
  <main className="relative">
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero
      shoes={randomProducts}
      bigImg={data}
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