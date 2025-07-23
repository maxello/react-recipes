import { Button, Image, Link } from "@heroui/react";
import MealTabs from './MealTabs';
import { transformStringToArray } from '../lib/utils';
import type { Meal } from "../types";

const MealDetails = ({
  data
}: {
  data: Meal
}) => {
  const tags = data.strTags && transformStringToArray(data.strTags, ',');
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-6">
      <div className="flex flex-col gap-3">
        <div className="rounded-small overflow-hidden">
          <Image
            removeWrapper
            alt={data.strMeal}
            className="object-contain rounded-none !h-auto"
            src={data.strMealThumb}
            width={600}
            height={600}
          />
        </div>
        {tags && (
          <div className="flex gap-2 flex-nowrap">
            {tags.map((tag) => (
              <Button
                key={tag}
                as={Link}
                color="secondary"
                href={`/search/?q=${tag}`}
                variant="ghost"
                size="sm"
                className="border-[1px]"
              >
                {tag}
              </Button>
            ))}
          </div>
        )}
      </div>
      <MealTabs data={data} />
    </div>
  )
}

export default MealDetails