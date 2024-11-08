import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordionConstruct";

const accordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Описание</AccordionTrigger>
        <AccordionContent>
          Кроссовки Ozweego 3 — один из самых известных результатов коллаборации
          adidas Originals × Raf Simons. Сотрудничество спортивного гиганта с
          известным дизайнером высокой моды началось в 2013 году, одним из
          первых покорив новую индустрию роскошных повседневных кроссовок.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default accordion;
