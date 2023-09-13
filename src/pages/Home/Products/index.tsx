import Carousel from "../../../components/Carousel";
import Categories from "../../../components/Categories";
import Partners from "../../../components/Partners";
import ProductType from "../../../components/ProductType";
import RelatedProducts from "../../../components/RelatedProducts";

export default function Products() {
  return (
    <section>
      <Categories />
      <ProductType />
      <Carousel />
      <Partners />
      <RelatedProducts />
    </section>
  )
}