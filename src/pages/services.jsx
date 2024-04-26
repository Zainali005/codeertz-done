import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceMain from "../components/services/service-1";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service'} />
      <ServiceMain/>
    </Wrapper>
  )
}
