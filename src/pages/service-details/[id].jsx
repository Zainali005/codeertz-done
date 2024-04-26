import React from "react";
import { useRouter } from "next/router";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import { services_data } from "../../data";
import ServiceDetailsMain from "../../components/service-details";

const ServiceDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const service_item = services_data.find(
    (item) => Number(item.id) === Number(id)
  );
  return (
    <Wrapper>
      <SEO pageTitle={"Service Details"} />
      <ServiceDetailsMain service={service_item} />
    </Wrapper>
  );
};

export default ServiceDynamicDetails;

// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }
