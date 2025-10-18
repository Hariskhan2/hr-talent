import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type props = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};

const FilterCard = ({ title, children, defaultOpen = true }: props) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="mb-2 border-b border-gray-100 py-2">
            <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => setOpen(!open)}
            >
                <p className="text-xs font-medium">{title}</p>
                {open ? (
                    <ChevronUp size={16} className="text-gray-600" />
                ) : (
                    <ChevronDown size={16} className="text-gray-600" />
                )}
            </div>
            {open && <div className="mt-1">{children}</div>}
        </div>
    );
};

export default FilterCard;