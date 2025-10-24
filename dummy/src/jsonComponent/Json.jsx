import data from "./data.json";

export function JSON() {
  return (
    <div>
      {data.products.map((item) => (
        <h1 key={item.id}>Item Name: {item.name}, Price: ₹{item.price}</h1>
      ))}
    </div>
  );
}