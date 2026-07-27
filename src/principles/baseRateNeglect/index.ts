import type { Principle } from "../types";
import { meta } from "./meta";
import { Illustration } from "./Illustration";
import { Demo } from "./Demo";

export const baseRateNeglect: Principle = { ...meta, Illustration, Demo };
