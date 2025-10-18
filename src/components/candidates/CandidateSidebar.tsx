import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import FilterCard from "./FilterCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Minus, Plus, X } from "lucide-react";

type props = {
  onclose: () => void;
}

const CandidateSidebar = ({ onclose }: props) => {
  type AiScoreKeys = "Cultural Fit" | "Confidence" | "Skills Match" | "Honesty / Integrity";
  const [years, setYears] = React.useState(1);

  const increaseYears = () => setYears((prev) => Math.min(prev + 1, 50));
  const decreaseYears = () => setYears((prev) => Math.max(prev - 1, 0));

  const [aiScores, setAiScores] = React.useState<Record<AiScoreKeys, number>>({
    "Cultural Fit": 27,
    Confidence: 37,
    "Skills Match": 67,
    "Honesty / Integrity": 47,
  });

  const handleSliderChange = (label: string, value: number[]) => {
    setAiScores((prev) => ({ ...prev, [label]: value[0] }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 max-[900px]:h-screen overflow-y-auto hide-scrollbar">
      <div className="flex justify-between">
        <h2 className="text-[16px] mb-3">Filters</h2>
        <X strokeWidth={3} onClick={onclose} className="h-6 w-6 hidden max-[900px]:block cursor-pointer border p-1 rounded" />
      </div>

      <FilterCard title="Department">
        <Select>
          <SelectTrigger className="bg-[#F3F3F3] border-0 h-8 text-xs">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </FilterCard>

      <FilterCard title="Position">
        <Select>
          <SelectTrigger className="bg-[#F3F3F3] border-0 h-8 text-xs">
            <SelectValue placeholder="Select Role/Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontend">Frontend Developer</SelectItem>
            <SelectItem value="backend">Backend Developer</SelectItem>
            <SelectItem value="uiux">UI/UX Designer</SelectItem>
          </SelectContent>
        </Select>
      </FilterCard>

      <FilterCard title="AI context tags">
        <Select>
          <SelectTrigger className="bg-[#F3F3F3] border-0 h-8 text-xs">
            <SelectValue placeholder="e.g., High Technical Fit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">High Technical Fit</SelectItem>
            <SelectItem value="managerial">Managerial Fit</SelectItem>
            <SelectItem value="creative">Creative Fit</SelectItem>
          </SelectContent>
        </Select>
      </FilterCard>

      <FilterCard title="Years of Experience">
        <div className="flex items-center gap-2">
          <input
            type="text"
            disabled
            value={years}
            className="bg-[#F3F3F3] rounded-[5px] text-xs p-2 flex-1"
          />
          <div className="flex bg-[#E3F1FF] rounded-[5px]">
            <button
              onClick={decreaseYears}
              className="py-1.5 px-2 flex items-center justify-center text-sm"
            >
              <Minus size={18} />
            </button>
            <button
              onClick={increaseYears}
              className="py-1.5 px-2 flex border-l border-white items-center justify-center text-sm"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </FilterCard>


      <FilterCard title="Employment Type">
        {["Full-time", "Part-time", "Contract"].map((type) => (
          <div key={type} className="flex items-center space-x-2 mb-2">
            <Checkbox id={type} className="data-[state=checked]:bg-[#E3F1FF]" />
            <label htmlFor={type} className="text-xs">
              {type}
            </label>
          </div>
        ))}
      </FilterCard>

      <FilterCard title="Work Type">
        {["On-site", "Remote", "Hybrid"].map((type) => (
          <div key={type} className="flex items-center space-x-2 mb-2">
            <Checkbox id={type} className="data-[state=checked]:bg-[#E3F1FF]" />
            <label htmlFor={type} className="text-xs">
              {type}
            </label>
          </div>
        ))}
      </FilterCard>

      <FilterCard title="Location">
        <Select>
          <SelectTrigger className="bg-[#F3F3F3] border-0 h-8 text-xs">
            <SelectValue placeholder="All Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="lahore">Lahore</SelectItem>
            <SelectItem value="karachi">Karachi</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-[11px] text-gray-500 my-2">
          Radius: {aiScores["Cultural Fit"]} miles
        </p>
        <Slider
          defaultValue={[47]}
          max={100}
          step={1}
          onValueChange={(val) =>
            setAiScores((prev) => ({ ...prev, "Cultural Fit": val[0] }))
          }
        />
      </FilterCard>

      <FilterCard title="AI Scores">
        {(Object.keys(aiScores) as AiScoreKeys[]).map((label) => (
          <div key={label} className="mb-2">
            <div className="flex justify-between text-[11px] mb-1">
              <span>{label}</span>
              <span>{aiScores[label]}%</span>
            </div>
            <Slider
              value={[aiScores[label]]}
              max={100}
              step={1}
              onValueChange={(value) => handleSliderChange(label, value)}
            />
          </div>
        ))}

      </FilterCard>

      <FilterCard title="Sort by">
        <Select>
          <SelectTrigger className="bg-[#F3F3F3] border-0 h-8 text-xs">
            <SelectValue placeholder="e.g., Sort by Score" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="score">Sort by Score</SelectItem>
            <SelectItem value="experience">Sort by Experience</SelectItem>
          </SelectContent>
        </Select>
      </FilterCard>

      {/* Profile Quality */}
      <FilterCard title="Profile Quality">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ai-verified"
              className="data-[state=checked]:bg-[#E3F1FF]"
            />
            <label htmlFor="ai-verified" className="text-xs">
              Only show AI-verified profiles
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="low-confidence"
              className="data-[state=checked]:bg-[#E3F1FF]"
            />
            <label htmlFor="low-confidence" className="text-xs">
              Hide low-confidence scores (&lt; 50%)
            </label>
          </div>
        </div>
      </FilterCard>


      <FilterCard title="Salary">
        <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
          <span>Min</span>
          <span>Max</span>
        </div>
        <Slider defaultValue={[20, 80]} min={0} max={100} step={1} />
      </FilterCard>


      <div className="flex flex-col gap-2 mt-4">
        <button className="w-full text-sm bg-[#E3F1FF] text-black py-2 rounded">
          Apply Filter
        </button>
        <button className="w-full text-sm bg-[#F3F3F3] py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CandidateSidebar;
