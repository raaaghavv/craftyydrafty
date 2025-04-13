import React from "react";
import "./KeyMetrics.css";

function KeyMetrics() {
  return (
    <section aria-label="Key Metrics" class="metrics-grid">
      <div class="metric-item">
        <dt class="metric-value">500+</dt>
        <dd class="metric-label">Happy Students</dd>
      </div>
      <div class="metric-item">
        <dt class="metric-value">98%</dt>
        <dd class="metric-label">Satisfaction Rate</dd>
      </div>
      <div class="metric-item">
        <dt class="metric-value">1K+</dt>
        <dd class="metric-label">Gifts Packaged</dd>
      </div>
    </section>
  );
}

export default KeyMetrics;
