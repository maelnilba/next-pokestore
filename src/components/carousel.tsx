interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  return (
    <div className="carousel carousel-center max-w-full gap-10 p-4 space-x-4 py-10 ">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
