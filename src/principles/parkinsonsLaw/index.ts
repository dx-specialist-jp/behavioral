import type { Principle } from "../types";
import { meta } from "./meta";
import { Illustration } from "./Illustration";
import { Demo } from "./Demo";

export const parkinsonsLaw: Principle = { ...meta, Illustration, Demo };
