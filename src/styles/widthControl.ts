/**
 * Shared page-width wrapper class for the whole site.
 *
 * - Centers content once it reaches `max-width: 1440px`.
 * - Responsive horizontal insets: 6 (mobile/sm) → 12 (lg) → 24 (xl) → 30 (2xl).
 *
 * Usage:
 *   import { widthControlClass } from "@/styles/widthControl";
 *   <div className={widthControlClass}>...</div>
 *
 * The inset is implemented with padding (not margin) because `mx-auto` and
 * `mx-6` cannot coexist: auto margins are what center the 1440px column.
 */
export const widthControlClass =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-6 lg:px-12 xl:px-24 2xl:px-30";
