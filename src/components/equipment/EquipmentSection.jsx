import TitleContentComponent from "../common/TitleContentComponent";
import equipmentInformation from "../../config/siteContent/equipmentInformation";
import EquipmentGrid from "./EquipmentGrid";

const EquipmentSection = () => (
  <TitleContentComponent
    main
    title={equipmentInformation.equipmentSection.title}
    subtitle={equipmentInformation.equipmentSection.subtitle}
  >
    <EquipmentGrid />
  </TitleContentComponent>
);

export default EquipmentSection;
