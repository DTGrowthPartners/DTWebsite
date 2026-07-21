import React from "react";
import { Globe, MessageCircle, CreditCard, CalendarCheck, Lock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Canales — misma semántica de color que el PMS real, reinterpretada  */
/*  para fondo oscuro (paleta DT).                                     */
/* ------------------------------------------------------------------ */
export const CHANNELS = {
  booking: { label: "Booking", color: "#2C6FE4" },
  directo: { label: "Directo", color: "#22C07D" },
  airbnb: { label: "Airbnb", color: "#F0518B" },
  expedia: { label: "Expedia", color: "#8B5CF6" },
  whatsapp: { label: "WhatsApp", color: "#5BD97B" },
  walkin: { label: "Walk-in", color: "#E0B341" },
} as const;

export type ChannelKey = keyof typeof CHANNELS;

/* ------------------------------------------------------------------ */
/*  Marco de navegador                                                 */
/* ------------------------------------------------------------------ */
export const BrowserFrame = ({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`liquid-glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.55)] min-w-0 max-w-full ${className}`}
  >
    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
      <div className="flex gap-1.5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      </div>
      <div className="flex-1 flex justify-center min-w-0">
        <span className="font-mono text-[10px] text-white/40 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 truncate max-w-full">
          {url}
        </span>
      </div>
      <div className="w-[42px] shrink-0" />
    </div>
    <div className="p-3 md:p-4 bg-[#05070F]/60">{children}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Forecast — grilla habitaciones × días                              */
/* ------------------------------------------------------------------ */
const ROOMS = ["101", "102", "103", "104", "201", "202", "203", "301"];
const DAYS = 16;
const TODAY = 6;

type Res = { room: number; start: number; span: number; guest: string; channel: ChannelKey };

const RESERVATIONS: Res[] = [
  { room: 0, start: 0, span: 4, guest: "M. Restrepo", channel: "booking" },
  { room: 0, start: 6, span: 3, guest: "L. Arango", channel: "directo" },
  { room: 0, start: 11, span: 4, guest: "K. Müller", channel: "airbnb" },
  { room: 1, start: 2, span: 5, guest: "J. Cárdenas", channel: "expedia" },
  { room: 1, start: 9, span: 3, guest: "S. Ortiz", channel: "whatsapp" },
  { room: 2, start: 0, span: 3, guest: "P. Gómez", channel: "directo" },
  { room: 2, start: 5, span: 6, guest: "A. Silva", channel: "booking" },
  { room: 3, start: 3, span: 4, guest: "R. Duarte", channel: "walkin" },
  { room: 3, start: 10, span: 5, guest: "T. Nguyen", channel: "booking" },
  { room: 4, start: 1, span: 4, guest: "C. Beltrán", channel: "whatsapp" },
  { room: 4, start: 7, span: 4, guest: "F. Mejía", channel: "directo" },
  { room: 5, start: 4, span: 7, guest: "D. Villa", channel: "airbnb" },
  { room: 6, start: 0, span: 5, guest: "N. Prieto", channel: "expedia" },
  { room: 6, start: 8, span: 3, guest: "H. Lozano", channel: "directo" },
  { room: 7, start: 2, span: 3, guest: "V. Salas", channel: "booking" },
  { room: 7, start: 9, span: 6, guest: "E. Ferrer", channel: "whatsapp" },
];

const isWeekend = (d: number) => d % 7 === 5 || d % 7 === 6;

export const ForecastMockup = () => (
  <div className="space-y-3">
    {/* KPIs del mes */}
    <div className="grid grid-cols-4 gap-2">
      {[
        { k: "Ocupación", v: "78%" },
        { k: "Noches", v: "312" },
        { k: "Proyectado", v: "$48.2M" },
        { k: "Por cobrar", v: "$6.1M" },
      ].map((m) => (
        <div
          key={m.k}
          className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2 flex flex-col justify-between"
        >
          <div className="font-mono text-[8px] uppercase tracking-[0.12em] md:tracking-[0.18em] text-white/40">
            {m.k}
          </div>
          <div className="font-heading text-sm md:text-base text-white mt-0.5">{m.v}</div>
        </div>
      ))}
    </div>

    <div className="overflow-x-auto">
      <div
        className="grid gap-y-1 min-w-[460px]"
        style={{ gridTemplateColumns: `34px repeat(${DAYS}, minmax(0, 1fr))` }}
      >
        {/* Cabecera de días.
            Ojo: todas las celdas llevan posición explícita. Si se dejan al
            auto-placement, las barras (que sí la llevan) las desplazan y las
            filas quedan corridas. */}
        {Array.from({ length: DAYS }).map((_, d) => (
          <div
            key={`h-${d}`}
            style={{ gridColumn: d + 2, gridRow: 1 }}
            className={`text-center font-mono text-[8px] pb-1 ${
              d === TODAY ? "text-[#26BDF0]" : isWeekend(d) ? "text-white/45" : "text-white/25"
            }`}
          >
            {d + 12}
          </div>
        ))}

        {/* Celdas */}
        {ROOMS.map((room, r) => (
          <React.Fragment key={room}>
            <div
              style={{ gridColumn: 1, gridRow: r + 2 }}
              className="font-mono text-[9px] text-white/45 flex items-center"
            >
              {room}
            </div>
            {Array.from({ length: DAYS }).map((_, d) => (
              <div
                key={`${room}-${d}`}
                style={{ gridColumn: d + 2, gridRow: r + 2 }}
                className={`h-5 md:h-6 rounded-[3px] border ${
                  d === TODAY
                    ? "border-[#26BDF0]/25 bg-[#26BDF0]/[0.06]"
                    : isWeekend(d)
                    ? "border-white/[0.06] bg-white/[0.03]"
                    : "border-white/[0.05] bg-white/[0.012]"
                }`}
              />
            ))}
          </React.Fragment>
        ))}

        {/* Reservas */}
        {RESERVATIONS.map((res, i) => {
          const c = CHANNELS[res.channel].color;
          return (
            <div
              key={i}
              className="h-5 md:h-6 self-center rounded-[4px] border flex items-center px-1.5 overflow-hidden animate-fade-in"
              style={{
                gridColumn: `${2 + res.start} / span ${res.span}`,
                gridRow: res.room + 2,
                background: `linear-gradient(90deg, ${c}66, ${c}26)`,
                borderColor: `${c}80`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12)`,
                animationDelay: `${i * 0.04}s`,
              }}
            >
              <span className="font-mono text-[8px] text-white/90 truncate whitespace-nowrap">
                {res.guest}
              </span>
            </div>
          );
        })}
      </div>
    </div>

    <div className="md:hidden font-mono text-[8px] text-white/30">
      {"// desliza para ver el mes completo →"}
    </div>

    {/* Leyenda */}
    <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-1">
      {Object.entries(CHANNELS).map(([key, ch]) => (
        <span key={key} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-[2px]" style={{ background: ch.color }} />
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
            {ch.label}
          </span>
        </span>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Inicio — resumen del día                                           */
/* ------------------------------------------------------------------ */
const ARRIVALS = [
  { name: "María Restrepo", room: "101", nights: "3 noches", channel: "booking" as ChannelKey, saldo: "$0" },
  { name: "Jorge Cárdenas", room: "102", nights: "5 noches", channel: "expedia" as ChannelKey, saldo: "$420.000" },
  { name: "Camila Beltrán", room: "202", nights: "2 noches", channel: "whatsapp" as ChannelKey, saldo: "$180.000" },
];

export const DashboardMockup = () => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {[
        { k: "Entradas hoy", v: "6" },
        { k: "Salidas hoy", v: "4" },
        { k: "En casa", v: "11" },
        { k: "Disponibles", v: "3" },
      ].map((m, i) => (
        <div
          key={m.k}
          className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 animate-fade-in"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">{m.k}</div>
          <div className="font-heading text-xl md:text-2xl text-white mt-1 leading-none">{m.v}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-2">
      {[
        { k: "Ocupación", v: "78%" },
        { k: "Por cobrar hoy", v: "$1.2M" },
        { k: "Saldo pendiente", v: "$6.1M" },
      ].map((m) => (
        <div key={m.k} className="rounded-lg border border-[#0F76D6]/20 bg-[#0F76D6]/[0.06] px-3 py-2">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/45">{m.k}</div>
          <div className="font-heading text-sm md:text-base text-white mt-0.5">{m.v}</div>
        </div>
      ))}
    </div>

    <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] overflow-hidden">
      <div className="px-3 py-2 border-b border-white/[0.07] font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
        Llegadas de hoy
      </div>
      {ARRIVALS.map((a) => (
        <div
          key={a.name}
          className="flex items-center gap-2.5 px-3 py-2 border-b border-white/[0.04] last:border-0"
        >
          <span
            className="w-1.5 h-6 rounded-full shrink-0"
            style={{ background: CHANNELS[a.channel].color }}
          />
          <div className="min-w-0 flex-1">
            <div className="text-[11px] text-white/90 font-body truncate">{a.name}</div>
            <div className="font-mono text-[8px] text-white/35">
              Hab. {a.room} · {a.nights}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-[9px] text-white/60">{a.saldo}</div>
            <div className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/30">saldo</div>
          </div>
          <div className="w-6 h-6 rounded-md bg-[#5BD97B]/10 border border-[#5BD97B]/25 flex items-center justify-center shrink-0">
            <MessageCircle className="w-3 h-3 text-[#5BD97B]" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Ingresos y Gastos — hoja editable                                  */
/* ------------------------------------------------------------------ */
const LEDGER_DAYS = 7;

const LEDGER: {
  section: string;
  kind: "income" | "expense";
  rows: { label: string; cells: string[]; total: string }[];
}[] = [
  {
    section: "Ingresos",
    kind: "income",
    rows: [
      { label: "Alojamiento", cells: ["1.8", "2.1", "1.4", "2.6", "3.2", "3.9", "2.2"], total: "$17.2M" },
      { label: "Restaurante", cells: ["0.3", "0.4", "0.2", "0.5", "0.7", "0.9", "0.4"], total: "$3.4M" },
      { label: "Tours", cells: ["—", "0.6", "—", "0.4", "0.8", "1.1", "—"], total: "$2.9M" },
    ],
  },
  {
    section: "Gastos",
    kind: "expense",
    rows: [
      { label: "Nómina", cells: ["0.9", "0.9", "0.9", "0.9", "0.9", "0.9", "0.9"], total: "$6.3M" },
      { label: "Servicios", cells: ["0.2", "0.1", "0.2", "0.1", "0.3", "0.2", "0.1"], total: "$1.2M" },
      { label: "Lavandería", cells: ["0.1", "0.2", "0.1", "0.2", "0.3", "0.3", "0.2"], total: "$1.4M" },
    ],
  },
];

export const LedgerMockup = () => (
  <div className="overflow-x-auto">
    <div className="min-w-[440px] space-y-2">
      {/* Cabecera */}
      <div
        className="grid gap-1 items-center"
        style={{ gridTemplateColumns: `84px repeat(${LEDGER_DAYS}, minmax(0,1fr)) 56px` }}
      >
        <div />
        {Array.from({ length: LEDGER_DAYS }).map((_, d) => (
          <div key={d} className="text-center font-mono text-[8px] text-white/30">
            {d + 1}
          </div>
        ))}
        <div className="text-right font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
          Total
        </div>
      </div>

      {LEDGER.map((sec) => (
        <div key={sec.section} className="space-y-1">
          <div
            className="font-mono text-[8px] uppercase tracking-[0.2em] pt-1"
            style={{ color: sec.kind === "income" ? "#26BDF0" : "#F0518B" }}
          >
            {sec.section}
          </div>
          {sec.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 items-center"
              style={{ gridTemplateColumns: `84px repeat(${LEDGER_DAYS}, minmax(0,1fr)) 56px` }}
            >
              <div className="font-body text-[10px] text-white/70 truncate">{row.label}</div>
              {row.cells.map((c, i) => (
                <div
                  key={i}
                  className="h-5 rounded-[3px] border border-white/[0.06] bg-white/[0.02] flex items-center justify-center font-mono text-[8px] text-white/55"
                >
                  {c}
                </div>
              ))}
              <div className="text-right font-mono text-[9px] text-white/75">{row.total}</div>
            </div>
          ))}
        </div>
      ))}

      {/* Utilidad */}
      <div
        className="grid gap-1 items-center pt-2 mt-1 border-t border-white/10"
        style={{ gridTemplateColumns: `84px repeat(${LEDGER_DAYS}, minmax(0,1fr)) 56px` }}
      >
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/80">Utilidad</div>
        {["0.9", "1.9", "0.4", "2.3", "3.2", "4.5", "1.4"].map((c, i) => (
          <div
            key={i}
            className="h-5 rounded-[3px] border border-[#0F76D6]/25 bg-[#0F76D6]/[0.10] flex items-center justify-center font-mono text-[8px] text-white/85"
          >
            {c}
          </div>
        ))}
        <div className="text-right font-mono text-[10px] text-transparent bg-clip-text bg-[linear-gradient(100deg,#0F76D6,#26BDF0_55%,#C2FBFF)]">
          $14.6M
        </div>
      </div>

      <div className="font-mono text-[8px] text-white/30 pt-1">
        {"// totales calculados en vivo · exportable a Excel"}
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Motor de reservas — flujo anti-sobreventa                          */
/* ------------------------------------------------------------------ */
const FLOW = [
  {
    icon: Globe,
    title: "El huésped reserva en tu web",
    body: "El motor cotiza noche a noche con el precio real de temporada. Nunca confía en el precio que manda el navegador.",
  },
  {
    icon: Lock,
    title: "La habitación queda apartada 20 minutos",
    body: "Un bloqueo transaccional impide que dos personas compren la misma habitación al mismo tiempo. Si no paga, el inventario se libera solo.",
  },
  {
    icon: CreditCard,
    title: "Paga con la pasarela",
    body: "Link de pago con IVA desglosado y vencimiento. El webhook llega firmado y, si se cae, un proceso automático concilia igual.",
  },
  {
    icon: CalendarCheck,
    title: "Aparece en el forecast, sin que nadie la digite",
    body: "Se asigna habitación, se notifica en vivo a recepción y salen los correos al hotel y al huésped.",
  },
];

export const BookingFlowMockup = () => (
  <div className="relative">
    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#0F76D6]/60 via-[#26BDF0]/40 to-transparent hidden sm:block" />
    <div className="space-y-4">
      {FLOW.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="relative flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl liquid-glass border border-white/10 flex items-center justify-center shrink-0 relative z-10 bg-[#05070F]">
              <Icon className="w-4 h-4 text-[#26BDF0]" />
            </div>
            <div className="pt-1">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                0{i + 1}
              </div>
              <h3 className="font-heading text-base md:text-lg text-white mt-1 tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/65 font-body font-light max-w-md">{step.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
