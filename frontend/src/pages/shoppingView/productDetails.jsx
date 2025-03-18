import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "lucide-react";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="grid max-w-[90vw] grid-cols-2 gap-8 sm:max-w-[80vw] sm:p-12 lg:max-w-[70vw]">
        <div className="relative overflow-hidden">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
            <p className="mb-5 mt-4 text-2xl text-muted-foreground">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary ${productDetails?.salePrice > 0 ? "line-through" : ""}`}
            >
              ${productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="text-2xl font-bold text-muted-foreground">
                ${productDetails?.salePrice}
              </p>
            ) : null}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="size-5 fill-primary" />
              <StarIcon className="size-5 fill-primary" />
              <StarIcon className="size-5 fill-primary" />
              <StarIcon className="size-5 fill-primary" />
              <StarIcon className="size-5 fill-primary" />
            </div>
            <span className="text-muted-foreground">(4.5)</span>
          </div>
          <div className="my-5">
            <Button className="w-full">Add to Cart</Button>
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="mb-4 text-xl font-bold">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="size-10 border">
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Moajin Juan</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is an awesome product
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="size-10 border">
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Moajin Juan</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is an awesome product
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="size-10 border">
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Moajin Juan</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                    <StarIcon className="size-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is an awesome product
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2 p-1">
              <Input placeholder="Write a review..." />
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
