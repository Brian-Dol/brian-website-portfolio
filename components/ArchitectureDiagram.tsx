"use client";

import { useState } from "react";
import type { ArchDiagram } from "@/lib/architectureDiagrams";

export default function ArchitectureDiagram({ diagram }: { diagram: ArchDiagram }) {
  const [activeId, setActiveId] = useState(diagram.nodes[0].id);
  const active = diagram.nodes.find((node) => node.id === activeId) ?? diagram.nodes[0];
  const layers = Array.from(new Set(diagram.nodes.map((node) => node.layer))).sort((a, b) => a - b);

  const connected = new Set<string>([active.id, ...(active.to ?? [])]);
  diagram.nodes.forEach((node) => {
    if (node.to?.includes(active.id)) connected.add(node.id);
  });

  const labelOf = (id: string) => diagram.nodes.find((node) => node.id === id)?.label ?? id;
  const feeds = diagram.nodes.filter((node) => node.to?.includes(active.id)).map((node) => node.id);

  return (
    <div className="arch">
      <p className="arch-intro">{diagram.intro}</p>
      <div className="arch-canvas" role="group" aria-label="Architecture diagram. Select a component for details.">
        {layers.map((layer, index) => (
          <div className="arch-layer" key={layer}>
            {index > 0 && (
              <span className="arch-arrow" aria-hidden="true">
                →
              </span>
            )}
            <div className="arch-column">
              {diagram.nodes
                .filter((node) => node.layer === layer)
                .map((node) => (
                  <button
                    type="button"
                    key={node.id}
                    className={`arch-node${node.id === active.id ? " is-active" : ""}${
                      connected.has(node.id) ? "" : " is-dim"
                    }`}
                    aria-pressed={node.id === active.id}
                    onClick={() => setActiveId(node.id)}
                  >
                    <small>{node.tag}</small>
                    <strong>{node.label}</strong>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="arch-detail" aria-live="polite">
        <p className="arch-detail-tag">{active.tag.toUpperCase()}</p>
        <h3>{active.label}</h3>
        <p>{active.description}</p>
        {(feeds.length > 0 || (active.to?.length ?? 0) > 0) && (
          <p className="arch-links">
            {feeds.length > 0 && (
              <span>
                <b>Receives from:</b> {feeds.map(labelOf).join(", ")}
              </span>
            )}
            {(active.to?.length ?? 0) > 0 && (
              <span>
                <b>Sends to:</b> {active.to!.map(labelOf).join(", ")}
              </span>
            )}
          </p>
        )}
      </div>
      {diagram.note && <p className="arch-note">{diagram.note}</p>}
    </div>
  );
}
