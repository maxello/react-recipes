import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import { getIngredients } from '../lib/utils';
import IngredientTable from './IngredientTable';
import type { IngredientTableCols, IngredientTableRows, Meal } from '../types';

const MealTabs = ({
  data
}: {
  data: Meal
}) => {
  const ingredientList = getIngredients(data, 'strIngredient');
  const measureList = getIngredients(data, 'strMeasure');

  const rows: IngredientTableRows[] = ingredientList.map((item, index) => {
    return {
      key: index + 1,
      ingredient: item,
      measure: measureList[index]
    }
  });

  const cols: IngredientTableCols[] = [{
    key: "ingredient",
    label: "Ingredient",
  },
  {
    key: "measure",
    label: "Measure",
  }];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color={'primary'} fullWidth>
        <Tab key="ingredients" title="Ingredients">
          <IngredientTable rows={rows} cols={cols} />
        </Tab>
        <Tab key="instructions" title="Instructions">
          <Card>
            <CardBody className="p-6">
              {data.strInstructions}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="info" title="Info">
          <Card>
            <CardBody className="gap-4 p-6">
              <div>
                <h4 className="text-secondary">Category:</h4>
                <p>{data.strCategory}</p>
              </div>
              <div>
                <h4 className="text-secondary">Area:</h4>
                <p>{data.strArea}</p>
              </div>
              <div>
                <h4 className="text-secondary">Video:</h4>
                <a target="_blank" className="underline" href={data.strYoutube}>{data.strYoutube}</a>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}

export default MealTabs