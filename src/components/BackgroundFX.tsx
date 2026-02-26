export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base tone and broad color wash. */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 opacity-85 bg-gradient-to-br from-slate-950 via-zinc-950 to-indigo-950/75" />

      {/* Layered grids and speckle texture to keep the background from feeling flat. */}
      <div
        className="
          absolute inset-0 opacity-[0.16]
          [background-image:linear-gradient(to_right,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)]
          [background-size:128px_128px]
        "
      />

      <div
        className="
          absolute inset-0 opacity-[0.08]
          [background-image:linear-gradient(to_right,rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.10)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div
        className="
          absolute inset-0 opacity-[0.14]
          [background-image:radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />
      <div
        className="
          absolute inset-0 opacity-[0.08]
          [background-image:radial-gradient(rgba(56,189,248,0.18)_1px,transparent_1px)]
          [background-size:48px_48px]
          [background-position:12px_18px]
        "
      />

      {/* Directional light accents and final vignette for depth. */}
      <div className="absolute left-[52%] top-[24%] h-px w-[520px] bg-cyan-300/25 blur-[1px]" />
      <div className="absolute left-[70%] top-[40%] h-px w-[460px] bg-cyan-300/18 blur-[1px]" />

      <div className="absolute right-[-140px] top-[60%] h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-cyan-500/18 blur-3xl" />
      <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-indigo-500/16 blur-3xl" />

      <div
        className="
          absolute inset-0 opacity-[0.06] mix-blend-overlay
          [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          [background-size:100%_6px]
        "
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.92))]" />
    </div>
  );
}
