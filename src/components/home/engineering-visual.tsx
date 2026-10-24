import styles from "./engineering-visual.module.css";

/** Conceptual artwork, not a product screenshot or a source-code sample. */
export function EngineeringVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.orbit} />
      <div className={styles.backplate} />

      <div className={styles.window}>
        <div className={styles.chrome}>
          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.tabs}>
            <span className={styles.selected}>Interface</span>
            <span>API</span>
            <span>Integrations</span>
          </div>
        </div>
        <svg className={styles.syntax} viewBox="0 0 440 174" fill="none" strokeWidth="6" strokeLinecap="round" focusable="false">
          <path stroke="#818cf8" d="M10 12h55m12 0h38m12 0h27" />
          <path stroke="#38bdf8" d="M167 12h49" />
          <path stroke="#64748b" strokeWidth="1" d="M20 34v116m24-92v70m24-46v22" />
          <path stroke="#818cf8" d="M37 35h34" />
          <path stroke="#f472b6" d="M60 58h40m-16 24h45m-45 23h45m-69 24h40" />
          <path stroke="#fbbf24" d="M113 58h49" />
          <path stroke="#34d399" d="M175 58h95m-128 24h70m-70 23h113" />
          <path stroke="#60a5fa" d="M226 82h57m-14 23h48m-180 24h66" />
          <path stroke="#94a3b8" d="M37 151h23m-50 22h14" />
        </svg>
        <div className={styles.windowFoot}>
          <span className={styles.componentMark}><span /><span /><span /></span>
          <span>Interface <span className={styles.connector}>/</span> API <span className={styles.connector}>/</span> Integrations</span>
        </div>
      </div>

      <div className={styles.workflow}>
        <p className={styles.label}>Delivery</p>
        <div className={styles.workflowRow}><span className={styles.node} />Interface</div>
        <div className={styles.workflowRow}><span className={styles.node} />API</div>
        <div className={styles.workflowRow}><span className={styles.node} />Integrations</div>
      </div>

      <div className={styles.framework}>
        <span className={styles.frameworkMark}>N</span>
        <div><p>Next.js</p><p className={styles.frameworkDetail}>React · TypeScript</p></div>
      </div>

      <div className={styles.stack}>
        <span className={styles.typescript}>TS</span>
        <span>Tailwind CSS</span>
        <svg width="23" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" focusable="false">
          <path d="M2 8c3-6 6-6 10-3s7 3 10-3M2 14c3-6 6-6 10-3s7 3 10-3" />
        </svg>
      </div>
    </div>
  );
}
