import { Card, Image, CardBody, CardFooter } from "@heroui/react";
import { Link } from "@heroui/react";
import { cn } from "../lib/utils";

export default function ProductCard({
  src,
  title,
  path,
  align
}: {
  src: string,
  title: string,
  path: string,
  align?: 'center' | 'end' | 'start'
}) {
  return (
    <Link href={`${path}`} className="block h-full">
      <Card isHoverable className="border shadow-none rounded-md h-full justify-between">
        <CardBody className={cn(align && `justify-${align}`, "p-0 aspect-square relative overflow-hidden flex flex-initial flex-col items-center")}>
          <Image
            removeWrapper
            alt={title}
            className="object-contain rounded-none !h-auto"
            src={src}
            width={400}
            height={400}
            loading="lazy"
          />
        </CardBody>
        <CardFooter className="p-3 flex-col items-center overflow-visible flex-auto justify-center">
          <h3 className="md:text-lg font-bold text-center">{title}</h3>
        </CardFooter>
      </Card>
    </Link>
  )
}