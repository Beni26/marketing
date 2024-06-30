import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionProps {
  id: number;
  openAccordionId: number | null;
  setOpenAccordionId: React.Dispatch<React.SetStateAction<number | null>>;
  question: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  openAccordionId,
  setOpenAccordionId,
  question,
  content,
}) => {
  const isOpen = id === openAccordionId;
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setOpenAccordionId(isOpen ? null : id);
  };

  return (
    <div>
      <div className="border rounded-lg overflow-hidden">
        <div
          className="bg-gray-100 font-bold p-4 rounded-lg flex items-center justify-between cursor-pointer"
          onClick={toggleAccordion}
        >
          <p className="text-accent">
            {question}
          </p>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
        <div
          ref={contentRef}
          className="transition-max-height duration-500 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          <section className="p-4 text-accent text-[15px] text-md leading-7">
            <p>{content}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
