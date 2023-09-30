import { services } from "../constants"
import { ServiceCard } from "../components"

const Services = () => {
  return (
    <section className="max-container flex justy-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard 
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services