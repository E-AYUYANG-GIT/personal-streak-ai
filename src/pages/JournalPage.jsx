import { useState } from "react";

import JournalHeader from "../components/journal/JournalHeader";
import JournalFilters from "../components/journal/JournalFilters";
import PreviousEntries from "../components/journal/PreviousEntries";
import RightPanel from "../components/journal/RightPanel";
import EntryPage from "../components/journal/entries/EntryPage";

const INITIAL_ENTRIES = [
  {
    id: 1,
    date: "2026-07-26",
    title: "Sunday, July 26",
    preview: "Yesterday was amazing! I stayed focused and finished my backend work...",
    content: "Yesterday was amazing! I stayed focused and finished my backend work. Refactored state management and cleared out two blocking issues.",
    mood: "😊",
    tags: ["learning"],
    favorite: true,
  },
  {
    id: 2,
    date: "2026-07-25",
    title: "Saturday, July 25",
    preview: "Had a slow start but still managed to complete two important tasks...",
    content: "Had a slow start but still managed to complete two important tasks. Took rest in the afternoon and recharged for the week ahead.",
    mood: "😐",
    tags: ["coding"],
    favorite: true,
  },
  {
    id: 3,
    date: "2026-07-24",
    title: "Friday, July 24",
    preview: "Reached a new learning milestone today. Feeling motivated!",
    content: "Reached a new learning milestone today. Feeling motivated! Reviewed SQL query execution plans and indexed key tables.",
    mood: "🤩",
    tags: ["personal"],
    favorite: true,
  },
];

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleSaveEntry = (entryData) => {
    const todayISO = new Date().toISOString().slice(0, 10);

    const formattedEntry = {
      id: entryData.id || Date.now(),
      date: todayISO,
      title: entryData.title || `Reflection • ${todayISO}`,
      preview: entryData.content ? entryData.content.slice(0, 90) + "..." : "",
      content: entryData.content || "",
      mood: entryData.mood || "😊",
      tags: entryData.tags || ["personal"],
      favorite: false,
    };

    setEntries((prev) => [formattedEntry, ...prev]);
  };

  const handleDeleteEntry = (entryId) => {
    setEntries((prev) => prev.filter((e) => e.id !== entryId));
    setSelectedEntry(null);
  };

  const handleAIAction = (actionTitle) => {
    // TODO: wire to AI service
    console.log("AI Action:", actionTitle);
  };

  const filteredEntries =
    activeFilter === "favorites"
      ? entries.filter((e) => e.favorite)
      : activeFilter === "today"
      ? entries.filter((e) => {
          const today = new Date().toISOString().slice(0, 10);
          return e.date === today;
        })
      : entries;

  return (
    <div className="jp-layout">
      <main className="jp-main">
        {selectedEntry ? (
          <EntryPage
            entry={selectedEntry}
            onBack={() => setSelectedEntry(null)}
            onDelete={handleDeleteEntry}
          />
        ) : (
          <>
            <JournalHeader onNewEntry={handleSaveEntry} />
            <JournalFilters active={activeFilter} onChange={setActiveFilter} />

            {/* <JournalEntry onSave={handleSaveEntry} /> THIS WILL BE A MODAL FEATURE IN THE FUTURE FOR NOW IGNORE THIS */}
            <PreviousEntries
              entries={filteredEntries}
              onEntryClick={(entry) => setSelectedEntry(entry)}
            />
          </>
        )}
      </main>

      <RightPanel onAIAction={handleAIAction} />
    </div>
  );
}