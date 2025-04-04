import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="mt-6 flex items-center justify-between">
            <p className="font-extrabold">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-extrabold">Order Date</p>
            <Label>{orderDetails?.orderDate.split("T")[0]}</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-extrabold">Order Price</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-extrabold">Payment method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-extrabold">Payment Status</p>
            <Label>{orderDetails?.paymentStatus}</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-extrabold">Order Status</p>
            <Label>
              <Badge
                className={`px-3 py-1 ${orderDetails?.orderStatus === "confirmed" ? "bg-green-500" : "bg-black"}`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-extrabold">Order Details</div>
            <ul className="grid gap-3">
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item) => (
                    <li className="flex items-center justify-between">
                      <span>Title: {item.title}</span>
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ${item.price}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-extrabold">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>{user.userName}</span>
              <span>{orderDetails?.addressInfo?.address}</span>
              <span>{orderDetails?.addressInfo?.city}</span>
              <span>{orderDetails?.addressInfo?.pincode}</span>
              <span>{orderDetails?.addressInfo?.phone}</span>
              <span>{orderDetails?.addressInfo?.notes}</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;
