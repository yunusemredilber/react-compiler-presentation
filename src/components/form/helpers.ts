import { DISTRICT_LIST } from "../../data/location";
import { increaseRenderCount } from "../../util/render-stats-data";

export function getDistrictList(cityId?: number | null) {
  increaseRenderCount("filter-district-list");

  if (!cityId) {
    return DISTRICT_LIST;
  }

  return DISTRICT_LIST.filter((district) => district.cityId === cityId);
}
