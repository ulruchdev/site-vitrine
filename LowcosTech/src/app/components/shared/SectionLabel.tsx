import { BRAND } from '../../../core/constants';

interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      className="inline-block px-4 py-1 rounded-full text-sm mb-6"
      style={{ backgroundColor: BRAND.orangeAlpha, color: BRAND.terracotta }}
    >
      {children}
    </div>
  );
}
