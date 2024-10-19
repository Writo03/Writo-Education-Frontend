import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FiChevronDown } from "react-icons/fi";

// Context
const AccordionContext = createContext(undefined);

// Custom hook for context
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

// Main Components
export const Accordion = ({
  children,
  defaultValue,
  type = "single",
  className = "",
}) => {
  const [openItems, setOpenItems] = useState(
    defaultValue ? [defaultValue] : [],
  );

  const toggleItem = useCallback(
    (value) => {
      setOpenItems((prev) => {
        if (type === "single") {
          return prev.includes(value) ? [] : [value];
        }
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      });
    },
    [type],
  );

  const contextValue = useMemo(
    () => ({
      openItems,
      toggleItem,
      type,
    }),
    [openItems, toggleItem, type],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`w-full space-y-2 ${className}`} role="presentation">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, value, className = "" }) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(value);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isOpen,
        onToggle: () => toggleItem(value),
      });
    }
    return child;
  });

  return (
    <div
      className={`rounded-lg border border-gray-200 ${className}`}
      data-state={isOpen ? "open" : "closed"}
      role="presentation"
    >
      {childrenWithProps}
    </div>
  );
};

export const AccordionTrigger = ({
  children,
  className = "",
  isOpen,
  onToggle,
  icon,
}) => {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-t-lg bg-white p-4 text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className} `}
      onClick={onToggle}
      aria-expanded={isOpen}
      type="button"
    >
      <div className="flex items-center">
        {icon && <span className="mr-2 hidden text-[#488b80] sm:block">{icon}</span>}
        <span className="font-medium text-gray-900">{children}</span>
      </div>
      <FiChevronDown
        className={`h-5 w-5 text-[#488b80] transition-transform duration-200 ${isOpen ? "rotate-180 transform" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
};

export const AccordionContent = ({ children, className = "", isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"} ${className} `}
      role="region"
      aria-hidden={!isOpen}
    >
      <div className="bg-white p-4 text-gray-600">{children}</div>
    </div>
  );
};
