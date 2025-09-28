// thanks ChatGPT for this component :)
"use client";

import { useMemo } from "react";
import { MapPin, Heart, Sparkles, Compass, ArrowRight } from "lucide-react";

// TODO take a look at this component and redefine the usage of the inputs
// ex. Have backend provide a detailed summary of the user's likes.
type Preference = {
  label: string;
  value: number;
};

type Location = {
  city?: string;
  state?: string;
};

type UserData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  name?: string; // fallback field you already use
  location?: Location;
  city?: string;   // allow flat structure
  state?: string;  // allow flat structure
  narrative?: string;
  preferences?: Preference[];
};

type Props = {
  userData?: UserData;               // <-- loose for now; replace with your real type later
  className?: string;           // optional style override
  onPrimaryAction?: () => void; // e.g., "Refine Preferences"
  onSecondaryAction?: () => void; // e.g., "See Matches"
};

export default function PersonalizedWelcome({
  userData,
  className = "w-[80%] h-auto",
  onPrimaryAction,
  onSecondaryAction,
}: Props) {
  // ----- Fallbacks / derived values -----
  const name: string =
    userData?.firstName ??
    userData?.name ??
    "Friend";

  const city: string | undefined = userData?.location?.city ?? userData?.city;
  const state: string | undefined = userData?.location?.state ?? userData?.state;

  // Preferences array: [{label, value(0..100)}]
  // If user has no data yet, use a tasteful default set.
  const prefs: { label: string; value: number }[] = useMemo(() => {
    const p = userData?.preferences;
    if (Array.isArray(p) && p.length > 0) {
      // ensure safe numbers in 0..100
      return p
        .map((it: Preference) => ({
          label: it.label ?? "Preference",
          value: Math.max(0, Math.min(100, it.value ?? 0)),
        }))
        .slice(0, 6);
    }
    return [
      { label: "Walkability", value: 78 },
      { label: "Quiet Streets", value: 72 },
      { label: "Access to Parks", value: 86 },
      { label: "Modern Interiors", value: 64 },
      { label: "Public Transit", value: 52 },
      { label: "Nightlife", value: 34 },
    ];
  }, [userData]);

  // Narrative text (fallback-friendly)
  const narrative = useMemo(() => {
    if (userData?.narrative) return String(userData.narrative);

    const locationStr =
      city && state ? `${city}, ${state}` : city ? city : state ? state : "your area";
    return [
      `Hi ${name}, based on what we know so far you lean toward calm, livable neighborhoods with easy access to nature and daily essentials.`,
      `Once your profile is complete, we’ll start curating homes and neighborhoods around ${locationStr} that match your vibe—balancing walkability, green space, and quiet streets.`,
      `Finish your profile to unlock smarter picks and a dashboard that adapts to your taste in real time.`,
    ].join(" ");
  }, [name, city, state, userData]);

  // pick top tags from prefs
  const topTags = useMemo(
    () =>
      [...prefs]
        .sort((a, b) => b.value - a.value)
        .slice(0, 3)
        .map((x) => x.label),
    [prefs]
  );

  return (
    <section
      className={`${className} relative`}
      aria-label="Personalized welcome and preference story"
      style={{ fontFamily: "Outfit, ui-sans-serif, system-ui" }}
    >
      <div className="h-full w-full rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Welcome, {name}
            </h2>
            <p className="text-sm md:text-base text-neutral-600 mt-1 flex items-center gap-1.5">
              <Sparkles className="size-4" />
              Your profile will shape smarter recommendations.
            </p>
          </div>
          {(city || state) && (
            <div className="hidden md:flex items-center gap-2 text-sm text-neutral-700 rounded-full border px-3 py-1.5 bg-white">
              <MapPin className="size-4" />
              <span>{city ? city : ""}{city && state ? ", " : ""}{state ? state : ""}</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Narrative + tags */}
          <div className="space-y-5">
            <p className="leading-relaxed text-neutral-800">{narrative}</p>

            {topTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {topTags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium"
                  >
                    <Heart className="size-3.5" />
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onPrimaryAction}
                className="group transition-all duration-300 inline-flex items-center gap-2 rounded-xl border border-neutral-900 bg-neutral-900 text-white px-4 py-2 text-sm hover:opacity-95 active:opacity-90"
              >
                Refine Preferences
                <ArrowRight className="size-4 group-hover:scale-[1.2] duration-200" />
              </button>
              <button
                onClick={onSecondaryAction}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-neutral-600 px-4 py-2 text-sm hover:bg-neutral-300 transition-all duration-300 hover:text-black hover:border hover:border-black"
              >
                See Matches
                <Compass className="size-4" />
              </button>
            </div>
          </div>

          {/* Tiny “What you like” chart (no libs) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">What You Like</h3>
              <span className="text-xs text-neutral-500">Auto-generated preview</span>
            </div>

            <div className="mt-4 space-y-4">
              {prefs.map((p) => (
                <div key={p.label} className="w-full">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-neutral-800">{p.label}</span>
                    <span className="tabular-nums text-neutral-600">{p.value}%</span>
                  </div>
                  {/* bar */}
                  <div className="mt-2 h-2.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${p.value}%`,
                        background:
                          "linear-gradient(90deg, oklch(0.72 0.15 150), oklch(0.64 0.19 180))",
                      }}
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mini legend */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-full"
                      style={{ background: "oklch(0.72 0.15 150)" }} />
                Lifestyle fit
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-full"
                      style={{ background: "oklch(0.64 0.19 180)" }} />
                Access & amenities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle decorative corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 -top-6 -right-6 size-52 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, oklch(0.86 0.08 210), transparent)" }}
      />
    </section>
  );
}
