import type { Principle } from "../types";
import { meta } from "./meta";
import { Illustration } from "./Illustration";
import { Demo } from "./Demo";

export const justWorldHypothesis: Principle = { ...meta, Illustration, Demo };
