interface NumberInputProps {
  quantity: number;
  onChange: (q: number) => void;
  rangeQuantity: {
    min: number;
    max: number;
  };
  label?: string;
}
export const QuantityInput: React.FC<NumberInputProps> = ({
  quantity,
  onChange,
  rangeQuantity,
  label,
}) => {
  return (
    <div className="h-max w-32">
      {label && (
        <label
          htmlFor="custom-input-number"
          className="w-full text-gray-700 text-sm font-semibold"
        >
          {label}
        </label>
      )}
      <div className="flex flex-row h-10 w-full rounded-lg bg-transparent">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onChange(
              quantity - 1 < rangeQuantity.min
                ? rangeQuantity.min
                : quantity - 1
            );
          }}
          className=" bg-base-200 text-gray-600 hover:text-gray-700 hover:bg-base-100 active:bg-base-300 h-full w-20 rounded-l cursor-pointer outline-none focus:outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full bg-base-200 font-semibold text-md hover:text-black focus:text-black focus:bg-base-100 flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          min={rangeQuantity.min}
          max={rangeQuantity.max}
          value={quantity}
          onChange={(e) => {
            e.stopPropagation();
            e.target.value
              ? +e.target.value >= +e.target.max
                ? onChange(+e.target.max)
                : +e.target.value <= +e.target.min
                ? onChange(+e.target.min)
                : onChange(+e.target.value)
              : onChange(+e.target.min);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onChange(
              quantity + 1 > rangeQuantity.max
                ? rangeQuantity.max
                : quantity + 1
            );
          }}
          className="bg-base-200 text-gray-600 hover:text-gray-700 hover:bg-base-100 active:bg-base-300 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
