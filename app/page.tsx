import {
  BatteryCharging,
  Fingerprint,
  LockKeyhole,
  RadioTower,
  ShieldAlert,
  Signal,
  Wifi,
} from 'lucide-react';
import type { CSSProperties } from 'react';

const logLines = [
  'initialisiere remote shell ...',
  'lese geraeteprofil: MOBILE-OS_17.6',
  'suche offene dienste: 7 gefunden',
  'kopiere kontakte.db [##########] 100%',
  'extrahiere fotos.cache [########--] 82%',
  'entschluessle standortverlauf ...',
  'kamera-zugriff vorbereitet',
  'mikrofon-stream gespiegelt',
  'root-token akzeptiert: 0xA91F',
  'persistenz wird installiert ...',
];

const scanItems = ['Kontakte', 'Fotos', 'Standort', 'Kamera', 'Wallet'];

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="matrix-rain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <section className="relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center px-4 py-8 sm:px-8">
        <div className="phone-frame">
          <div className="phone-glass">
            <div className="phone-status" aria-label="Telefonstatus">
              <span>18:44</span>
              <div className="flex items-center gap-1.5">
                <Signal className="h-4 w-4" aria-hidden="true" />
                <Wifi className="h-4 w-4" aria-hidden="true" />
                <BatteryCharging className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              </div>
            </div>

            <div className="breach-panel">
              <div className="alert-ring" aria-hidden="true">
                <ShieldAlert className="h-12 w-12" />
              </div>
              <p className="threat-label">SECURITY BREACH</p>
              <h1>HANDY WIRD GEHACKT</h1>
              <p className="subcopy">
                Zugriff erkannt. Schutzmodus konnte nicht gestartet werden.
              </p>
            </div>

            <div className="progress-cluster" aria-label="Hackfortschritt">
              <div className="flex items-center justify-between text-xs uppercase text-red-200">
                <span>Systemscan</span>
                <span className="blink">97%</span>
              </div>
              <div className="progress-track">
                <span className="progress-fill" />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2" aria-label="Betroffene Bereiche">
              {scanItems.map((item, index) => (
                <div
                  className="data-tile"
                  key={item}
                  style={{ '--delay': `${index * 0.18}s` } as CSSProperties}
                >
                  <span className="tile-pulse" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="terminal" aria-label="Systemprotokoll">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <strong>root@phone:/private</strong>
              </div>
              <div className="terminal-body">
                {logLines.map((line, index) => (
                  <p
                    key={line}
                    style={{ '--line-delay': `${index * 0.42}s` } as CSSProperties}
                  >
                    <span>&gt;</span> {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="control-strip">
              <div>
                <p className="text-xs uppercase text-red-200/70">Remote Signal</p>
                <p className="flex items-center gap-2 text-sm text-red-50">
                  <RadioTower className="h-4 w-4 text-red-300" aria-hidden="true" />
                  Verbindung instabil
                </p>
              </div>
              <div className="finger-lock" aria-hidden="true">
                <Fingerprint className="h-6 w-6" />
              </div>
            </div>

            <div className="reveal">
              <LockKeyhole className="h-5 w-5" aria-hidden="true" />
              <span>Nur ein Prank. Dein Handy ist sicher.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
