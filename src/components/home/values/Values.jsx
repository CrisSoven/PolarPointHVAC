import CardsGrid from "../../common/CardsGrid";
import ValueCard from "./ValueCard";
import homeConfiguration from "../../../config/siteContent/homeConfiguration";

const Values = () => (
  <CardsGrid
    items={homeConfiguration.companyValues.values}
    CardComponent={ValueCard}
    getKey={(item) => item.id}
    getProps={(item) => ({
      iconName: item.iconName,
      title: item.title,
      description: item.description,
      type: item.type,
    })}
  />
);

export default Values;
