// Hand-authored technical drawing of a ball mill — drum, end caps,
// support frame. Strokes use currentColor so the parent can re-tint.
// Locked aspect ratio (viewBox) prevents CLS.

export function BallMillDrawing({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 600 480"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Construction hairlines — very faint */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.18">
        <line x1="0" y1="240" x2="600" y2="240" />
        <line x1="300" y1="0" x2="300" y2="480" />
      </g>

      {/* Concrete base — ground line */}
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.55">
        <line x1="40" y1="420" x2="560" y2="420" />
        <line x1="40" y1="425" x2="560" y2="425" strokeDasharray="2 4" />
      </g>

      {/* Support legs — left */}
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
        <line x1="135" y1="335" x2="105" y2="420" />
        <line x1="165" y1="335" x2="195" y2="420" />
        <line x1="120" y1="380" x2="180" y2="380" strokeWidth="1.25" />
      </g>

      {/* Support legs — right */}
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
        <line x1="435" y1="335" x2="405" y2="420" />
        <line x1="465" y1="335" x2="495" y2="420" />
        <line x1="420" y1="380" x2="480" y2="380" strokeWidth="1.25" />
      </g>

      {/* End bearing — left */}
      <g stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="150" cy="240" rx="22" ry="38" />
        <ellipse cx="150" cy="240" rx="10" ry="18" strokeWidth="1.25" />
      </g>

      {/* End bearing — right */}
      <g stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="450" cy="240" rx="22" ry="38" />
        <ellipse cx="450" cy="240" rx="10" ry="18" strokeWidth="1.25" />
      </g>

      {/* Drum body — main horizontal cylinder */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <line x1="150" y1="125" x2="450" y2="125" />
        <line x1="150" y1="355" x2="450" y2="355" />
      </g>

      {/* Drum end caps — flange details */}
      <g stroke="currentColor" strokeWidth="1.5">
        {/* left flange */}
        <line x1="150" y1="125" x2="135" y2="135" />
        <line x1="150" y1="355" x2="135" y2="345" />
        <line x1="135" y1="135" x2="135" y2="345" />
        {/* right flange */}
        <line x1="450" y1="125" x2="465" y2="135" />
        <line x1="450" y1="355" x2="465" y2="345" />
        <line x1="465" y1="135" x2="465" y2="345" />
      </g>

      {/* Drum ribbing — vertical hairlines along the cylinder */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.45">
        <line x1="200" y1="125" x2="200" y2="355" />
        <line x1="250" y1="125" x2="250" y2="355" />
        <line x1="300" y1="125" x2="300" y2="355" />
        <line x1="350" y1="125" x2="350" y2="355" />
        <line x1="400" y1="125" x2="400" y2="355" />
      </g>

      {/* Loading hatch — top centre */}
      <g stroke="currentColor" strokeWidth="1.5">
        <line x1="275" y1="125" x2="275" y2="100" />
        <line x1="325" y1="125" x2="325" y2="100" />
        <line x1="275" y1="100" x2="325" y2="100" />
        <line x1="280" y1="95" x2="320" y2="95" strokeWidth="1" />
      </g>

      {/* Drive belt to motor — right side */}
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.7">
        <circle cx="510" cy="240" r="16" strokeWidth="1.5" />
        <circle cx="510" cy="240" r="5" />
        {/* belt lines */}
        <line x1="468" y1="222" x2="495" y2="226" />
        <line x1="468" y1="258" x2="495" y2="254" />
      </g>

      {/* Inside drum — grinding ball pattern (3 small circles) */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.35">
        <circle cx="220" cy="320" r="10" />
        <circle cx="260" cy="335" r="14" />
        <circle cx="310" cy="318" r="11" />
        <circle cx="355" cy="338" r="13" />
        <circle cx="395" cy="322" r="9" />
        <circle cx="240" cy="290" r="8" />
        <circle cx="320" cy="290" r="9" />
        <circle cx="380" cy="295" r="7" />
      </g>

      {/* Dimension extension line — top */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.4">
        <line x1="150" y1="70" x2="150" y2="115" />
        <line x1="450" y1="70" x2="450" y2="115" />
        <line x1="150" y1="80" x2="450" y2="80" />
        {/* arrowheads */}
        <path d="M 150 80 L 156 77 L 156 83 Z" fill="currentColor" opacity="0.5" />
        <path d="M 450 80 L 444 77 L 444 83 Z" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
