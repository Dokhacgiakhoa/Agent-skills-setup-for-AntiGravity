# PLAN: Upgrade Core Architecture to Context-Aware Rules

> **Goal**: Refactor `.agent/rules` from a monolithic design to a modular, context-aware structure leveraging Antigravity's advanced triggers (Glob, Model Decision).

---

## 1. Analysis & Strategy

**Current State:**
- Single `GEMINI.md` file doing everything.
- Wasted context tokens (loading Backend rules when working on CSS).
- Lack of file-specific enforcement.

**Target State:**
- **Modular**: Separate files for Security, Frontend, Backend, DevOps.
- **Context-Aware**:
  - `glob`: Load Frontend rules ONLY for `.tsx/.css`.
  - `model_decision`: Load Debug rules ONLY when needed.
  - `always_on`: Keep Security & Personality active globally.

---

## 2. Execution Phase (Task Breakdown)

### Phase 2.1: Refactor Global Rules (`rules/`)

- [ ] **Update `GEMINI.md`**
  - **Trigger**: `always_on`
  - **Content**: Agent Identity, Core Ethics, PDCA Cycle, Socratic Gate.
  
- [ ] **Create `security.md`**
  - **Trigger**: `always_on`
  - **Content**: OWASP Top 10, Secret Management, `rm -rf` protection.

- [ ] **Create `frontend.md`**
  - **Trigger**: `glob: "**/*.{js,jsx,ts,tsx,css,scss,html}"`
  - **Content**: UI/UX Premium, Component patterns, State management.

- [ ] **Create `backend.md`**
  - **Trigger**: `glob: "**/*.{py,js,ts,go,rs,sql,php}"` (Exclude frontend-only paths if possible, or assume overlap)
  - **Content**: API Standards, DB Schema 3NF, Error Handling.

- [ ] **Create `debug.md`**
  - **Trigger**: `model_decision` ("When the user needs to fix bugs, analyze errors, or troubleshoot issues.")
  - **Content**: Root cause analysis, systematically reading files, test-first fix.

### Phase 2.2: Standardize Workflows (`workflows/`)

- [ ] Audit all 11 workflows.
- [ ] Ensure valid YAML frontmatter with `description` for correct Slash Command mapping.

### Phase 2.3: System Synchronization

- [ ] Update `setup.js` to ensure recursive copying of the new `rules/` structure.
- [ ] Update `README.vi.md` to explain the new "Context-Aware Rule System".

---

## 3. Verification Checklist

1. **Security Check**: Is `security.md` loaded even when editing a simple text file? (Yes, via `always_on`).
2. **Context Check**: Does `frontend.md` load when I open `App.tsx`?
3. **Smart Check**: Does `debug.md` load when I say "Fix this error"?

---

## 4. Agent Assignments

- **Architect**: `project-planner` (Created this plan)
- **Implementer**: `orchestrator` (Will execute file creations)
- **Validator**: `quality-inspector` (Will verify rule triggers)
