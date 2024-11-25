export default function TimelineSegment({
  product,
  index,
  isSelected,
  onSelect,
}: {
  product: { position: string; [key: string]: any }; // Define 'position' and allow additional properties
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}) {
  const isTop = product.position === 'top';
  const hoverColor = '#FE7443';

  return (
    <div
      className={`relative flex-1 h-24 flex items-stretch transition-all duration-300 cursor-pointer group`}
      onClick={() => onSelect(index)}
    >
      {/* Rectangle part */}
      <div
        className={`flex-1 flex items-center justify-center transition-all duration-300 relative group-hover:bg-[#FE7443]`}
        style={{
          backgroundColor: isSelected ? hoverColor : product.color,
        }}
      >
        <span
          className={`text-2xl font-bold z-10 transition-colors duration-300
          ${index > 2 ? 'text-[#323232] group-hover:text-white' : 'text-white'}
          ${isSelected ? 'text-white' : ''}`}
        >
          {product.timeline}
        </span>
      </div>
      {/* Triangle part */}
      <div
        className={`w-8 transition-all duration-300 group-hover:bg-[#FE7443]`}
        style={{
          clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
          backgroundColor: isSelected ? hoverColor : product.color,
        }}
      />
      <div
        className={`absolute text-xl font-bold transition-all duration-300 w-48 text-center
          ${isTop ? '-top-20' : 'bottom-[-5rem]'}
          left-[calc(50%-6rem)]
          ${isSelected ? 'text-[#FE7443]' : 'group-hover:text-[#FE7443]'}
          ${index > 2 ? 'text-[#323232] hover:text-[#FE7443]' : 'text-white'}`}
      >
        {product.title}
      </div>
    </div>
  );
}
