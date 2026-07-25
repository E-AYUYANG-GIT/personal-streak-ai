import { BookOpen } from "lucide-react";

export default function WindowBar() {
  return (
    <div className="window-bar">
      <div className="window-title">
        <BookOpen size={15} color="#C07F55" />
        Personal Streak AI
      </div>
      <div className="win-controls">
        <button className="win-btn close" aria-label="Close" />
        <button className="win-btn min"   aria-label="Minimise" />
        <button className="win-btn max"   aria-label="Maximise" />
      </div>
    </div>
  );
}