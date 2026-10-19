import { describe, expect, it } from "vitest";
import { getRecommendation } from "./engine";
import { Condition, Device } from "./types";

const ALL_DEVICES: Device[] = ["phone", "tablet", "laptop", "charger", "other"];
const ALL_CONDITIONS: Condition[] = ["working", "partial", "damaged", "not_working", "old_unused"];

describe("Recommendation Engine (§4.3 & §4.4)", () => {
  describe("Every Device x Condition combination produces a valid recommendation", () => {
    ALL_DEVICES.forEach((device) => {
      ALL_CONDITIONS.forEach((condition) => {
        it(`returns valid recommendation for ${device} + ${condition}`, () => {
          const result = getRecommendation(device, condition);

          // 1. Must return a recognized action
          expect(["reuse_or_donate", "repair_first", "tradein_or_donate", "recycle"]).toContain(
            result.action
          );

          // 2. Headline must be non-empty string
          expect(result.headline).toBeTruthy();
          expect(result.headline.trim().length).toBeGreaterThan(0);

          // 3. Why statement must be non-empty string
          expect(result.why).toBeTruthy();
          expect(result.why.trim().length).toBeGreaterThan(0);

          // 4. Alternatives must not include the primary action
          expect(result.alternatives).not.toContain(result.action);

          // 5. Checklists: non-chargers must have non-empty data prep checklist
          expect(Array.isArray(result.checklist)).toBe(true);
          expect(result.checklist.length).toBeGreaterThan(0);

          if (device !== "charger") {
            const checklistText = result.checklist.join(" ").toLowerCase();
            expect(checklistText).toMatch(/back up|reset|sign out|remove/i);
          } else {
            // Charger must have safety inspection and NO data wiping steps
            const checklistText = result.checklist.join(" ").toLowerCase();
            expect(checklistText).not.toMatch(/icloud|google account|factory reset|sim card/i);
            expect(checklistText).toMatch(/inspect|cable|damage|fraying/i);
          }
        });
      });
    });
  });

  describe("Specific draft rules and ambiguous resolution cases", () => {
    it("handles partial charger by prioritizing repair_first with recycle alternative", () => {
      const rec = getRecommendation("charger", "partial");
      expect(rec.action).toBe("repair_first");
      expect(rec.alternatives).toContain("recycle");
    });

    it("handles old_unused phone by prioritizing tradein_or_donate with recycle alternative", () => {
      const rec = getRecommendation("phone", "old_unused");
      expect(rec.action).toBe("tradein_or_donate");
      expect(rec.alternatives).toContain("recycle");
    });

    it("handles damaged charger by advising recycle", () => {
      const rec = getRecommendation("charger", "damaged");
      expect(rec.action).toBe("recycle");
    });

    it("handles working laptop by recommending reuse_or_donate", () => {
      const rec = getRecommendation("laptop", "working");
      expect(rec.action).toBe("reuse_or_donate");
      expect(rec.alternatives).toContain("tradein_or_donate");
    });
  });
});
