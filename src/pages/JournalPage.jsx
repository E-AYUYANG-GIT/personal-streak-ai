import { useState } from "react";

import JournalHeader from "../components/journal/JournalHeader";
import JournalFilters from "../components/journal/JournalFilters";
import JournalEntry from "../components/journal/JournalEntry";
import TodaySummary from "../components/journal/TodaySummary";
import PreviousEntries from "../components/journal/PreviousEntries";
import RightPanel from "../components/journal/RightPanel";

const INITIAL_ENTRIES = [
  {
    id: 1, date: "2026-07-26", title: "Sunday, July 26",
    preview: "Yesterday was amazing! I stayed focused and finished my backend work...",
    mood: "happy", tags: ["learning"], favorite: true,
  },
  {
    id: 2, date: "2026-07-25", title: "Saturday, July 25",
    preview: "Had a slow start but still managed to complete two important tasks...",
    mood: "neutral", tags: ["coding"], favorite: true,
  },
  {
    id: 3, date: "2026-07-24", title: "Friday, July 24",
    preview: "Reached a new learning milestone today. Feeling motivated!",
    mood: "excited", tags: ["personal"], favorite: true,
  },
];

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [entries, setEntries] = useState(INITIAL_ENTRIES);

  const handleSaveEntry = (entryData) => {
    // TODO: persist to store / backend
    console.log("Saving entry:", entryData);
  };

  const handleAIAction = (actionTitle) => {
    // TODO: wire to AI service
    console.log("AI Action:", actionTitle);
  };

  const filteredEntries =
    activeFilter === "favorites" ? entries.filter((e) => e.favorite)
      : activeFilter === "today" ? entries.filter((e) => {
        const today = new Date().toISOString().slice(0, 10);
        return e.date === today;
      })
        : entries;

  return (
    <div className="jp-layout">
      <main className="jp-main">
        <JournalHeader onNewEntry={() => { }} />
        <JournalFilters active={activeFilter} onChange={setActiveFilter} />

        {/* <JournalEntry onSave={handleSaveEntry} /> THIS WILL BE A MODAL FEATURE IN THE FUTURE FOR NOW IGNORE THIS */}
        <TodaySummary />
        <PreviousEntries entries={filteredEntries} />
      </main>

      <RightPanel onAIAction={handleAIAction} />
    </div>
  );
}