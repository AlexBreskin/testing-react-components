import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import * as nasa from '../io/nasa';
import RoverSearch from './RoverSearch';

export const rovers = [
  { name: "Spirit", activePeriod: ["2004-01-05", "2010-03-21"] },
  { name: "Opportunity", activePeriod: ["2004-01-26", "2018-06-11"] },
  { name: "Curiosity", activePeriod: ["2012-08-07", "2019-09-28"] }
];

export const cameras = {
  FHAZ: "Front Hazard Avoidance Camera",
  RHAZ: "Rear Hazard Avoidance Camera",
  MAST: "Mast Camera",
  CHEMCAM: "Chemistry and Camera Complex",
  MAHLI: "Mars Hand Lens Imager",
  MARDI: "Mars Descent Imager",
  NAVCAM: "Navigation Camera",
  PANCAM: "Panoramic Camera",
  MINITES: "Miniature Thermal Emission Spectrometer (Mini-TES)"
};

export const roverSelection = {
  spirit: true,
  opportunity: true,
  curiosity: true
};

export const stateChunk = {
  rovers: rovers, 
  cameras: cameras, 
  roverSelection,
  earth_date: "2019-09-28",
  camera: "FHAZ",
  photos: [{"id":689597,"sol":2540,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FLB_622990123EDR_F0763002FHAZ00341M_.JPG","earth_date":"2019-09-28","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2540,"max_date":"2019-09-28","total_photos":366206,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":689598,"sol":2540,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02540/opgs/edr/fcam/FRB_622990123EDR_F0763002FHAZ00341M_.JPG","earth_date":"2019-09-28","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2540,"max_date":"2019-09-28","total_photos":366206,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}}]
};

export const reducer = (state = stateChunk, action) => {
  switch (action.type) {
    case "CRITERIA": {
      return {
        ...state,
        ...action.criteria
      };
    }
    case "CRITERIA_CHANGE_FULFILLED": {
      return {
        ...state,
        photos: action.payload.map((response) => response.photos).flat()
      };
    }
    default: return state;
  }
};

const ConnectedRoverSearch = connect(
  (state) => state,
  (dispatch) => ({
    onCriteriaChange: (criteria) => {
      dispatch({type: "CRITERIA", criteria});
    },
    onSearch: debounce((criteria) => {
      dispatch({type: "CRITERIA_CHANGE", criteria, payload: nasa.searchImages(criteria) });
    }, 500)
  })
)(RoverSearch);

export default ConnectedRoverSearch;
