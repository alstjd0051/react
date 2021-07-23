import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Oders() {
  const orders = useOrders();
  const prototypes = usePrototypes();

  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You Don't have any orders</div>
          <div className="subtitle">Click on a + to add an orders</div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="body">
        {orders.map((order) => {
          const { id } = order;
          const prototype = prototypes.find((p) => p.id === id);
          return (
            <div className="item" key={id}>
              <div className="img">
                <video src={prototype.thumbnail} />
              </div>
              <div className="content">
                <p className="title">
                  {prototype.title} x {order.quantity}
                </p>
              </div>
              <div className="action">
                <p className="price">$ {prototype.price * order.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
