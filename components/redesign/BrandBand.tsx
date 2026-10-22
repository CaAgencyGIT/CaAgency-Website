import { bandBrands } from '@/lib/data/redesign-media'

export default function BrandBand() {
  return (
    <div className="rd-brand-band" aria-label="Brands">
      {bandBrands.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </div>
  )
}
