interface GalleryProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Gallery<T>({ items, renderItem }: GalleryProps<T>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {items.map((item, index) => (
        <div key={index} className="box-content flex flex-none">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
