import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Label } from "../ui/Label";

const initialFormData = {
  status: "",
};

function AdminOrderDetailsView() {
  const [formData, setFormData] = useState(initialFormData);

  function handleUpdateStatus(event) {
    event.preventDefault();
  }

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="mt-6 flex items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>123456</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>27/12/2025</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>$500</Label>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>In Process</Label>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-medium">Order Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span>Product One</span>
                  <span>$100</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-medium">Shipping Info</div>
              <div className="grid gap-0.5 text-muted-foreground">
                <span>John Doe</span>
                <span>Address</span>
                <span>City</span>
                <span>Phone</span>
                <span>notes</span>
              </div>
            </div>
          </div>

          <div>
            <CommonForm
              formControls={[
                {
                  Label: "Order Status",
                  name: "status",
                  componentType: "select",
                  options: [
                    { id: "pending", Label: "Pending" },
                    { id: "inProcess", Label: "In Process" },
                    { id: "inShipping", Label: "In Shipping" },
                    { id: "delivered", Label: "Delivered" },
                    { id: "rejected", Label: "Rejected" },
                  ],
                },
              ]}
              formData={formData}
              setFormData={setFormData}
              buttonText={"Update Order Status"}
              onSubmit={handleUpdateStatus}
            />
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
