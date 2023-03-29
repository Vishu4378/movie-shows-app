import { normalize, schema } from "normalizr";
import shows from "./shows.json";
const showSchema = new schema.Entity("shows");
const normalizedData = normalize(shows, [showSchema]);
console.log(normalizedData);
export default normalizedData.entities.shows || {};
