'use client';

import {
  BatteryCharging,
  Fingerprint,
  LockKeyhole,
  RadioTower,
  ShieldAlert,
  Signal,
  Wifi,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

const scanItems = ['Kontakte', 'Fotos', 'Standort', 'Kamera', 'Wallet'];

const randomHex = () => Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase();
const randomMb = () => (Math.random() * 8.4 + 1.6).toFixed(1);

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [extracted, setExtracted] = useState('0.0');
  const [packet, setPacket] = useState('0000');
  const [logLines, setLogLines] = useState<string[]>([]);
  const deviceToken = useMemo(() => randomHex(), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => (current >= 100 ? 100 : Math.min(100, current + Math.ceil(Math.random() * 4))));
      setExtracted((current) => (Number(current) >= 682.4 ? '682.4' : (Number(current) + Number(randomMb())).toFixed(1)));
      setPacket(Math.floor(Math.random() * 9000 + 1000).toString());
    }, 420);

    const initialLogs = [
      'initialisiere remote shell ...',
      `lese geraeteprofil: MOBILE-OS_17.6 [${deviceToken}]`,
      `suche offene dienste: ${Math.floor(Math.random() * 5) + 4} gefunden`,
      'verbinde mit datenextraktions-modul ...',
      'analysiere lokale container ...',
      'extrahiere kontakt-index ...',
      'bilde verschluesseltes datenpaket ...',
      `paket #${Math.floor(Math.random() * 9000 + 1000)} wird uebertragen`,
      'pruefe remote persistence ...',
      'warte auf naechsten datenblock ...',
    ];
    setLogLines(initialLogs);
    return () => window.clearInterval(timer);
  }, [deviceToken]);

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
                <span>Daten extrahieren</span>
                <span className="blink">{progress}%</span>
              </div>
              <div className="progress-track">
                <span className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="progress-meta">
                <span>{extracted} MB gelesen</span>
                <span>PKT-{packet}</span>
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

            <div className={`reveal ${progress < 100 ? 'reveal-hidden' : 'reveal-visible'}`}>
              <LockKeyhole className="h-5 w-5" aria-hidden="true" />
              <span>Nur ein Prank. Dein Handy ist sicher.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
