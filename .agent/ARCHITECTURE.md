# Antigravity Kit Architecture

> Comprehensive AI Agent Capability Expansion Toolkit

---

## 📋 Overview

Antigravity Kit is a modular system consisting of:

- **23 Specialist Agents** - Role-based AI personas
- **58+4 Master Skills** - Consolidating 650+ capabilities & patterns
- **22 Workflows** - Slash command procedures

---

## 🏗️ Directory Structure

```plaintext
.agent/
├── ARCHITECTURE.md          # This file
├── CONCEPTS.md              # Rule, Skill, Workflow definitions
├── agents/                  # 20 Specialist Agents
├── skills/                  # 36 Skills
├── workflows/               # 11 Slash Commands
├── rules/                   # Global Rules
└── scripts/                 # Master Validation Scripts
```

---

## 🤖 Agents (15 Master Specialists)

| Agent | Role | Responsibility |
| ----- | ---- | -------------- |
| `orchestrator` | **The Director** | Strategic flow & Final Operation |
| `quality-inspector` | **The Gatekeeper** | Inspection, Validation & Audit (The Final Gate) |
| `project-planner` | **The Architect** | Strategy, Requirements & MVP Mapping |
| `backend-specialist` | **Worker** | Logic, API & Database (SQL Master) |
| `frontend-specialist`| **Worker** | UI, UX & Web Performance |
| `security-auditor` | **Worker** | Defensive & Offensive Security |
| `test-engineer` | **Worker** | Test Infrastructure & TDD |
| `cloud-architect` | **Worker** | CI/CD, Cloud & Deployment |
| `codebase-expert` | **Worker** | Analysis & Refactoring |
| `mobile-developer` | **Worker** | Full-stack Mobile Development |
| `game-developer` | **Worker** | Immersive Experiences |
| `debugger` | **Worker** | Troubleshooting & Hotfixing |
| `seo-specialist` | **Worker** | Growth & Search Optimization |
| `voice-ai-engineer` | **Worker** | Real-time Voice Agents (NEW) |
| `rust-expert` | **Worker** | System Programming (NEW) |
| `react-architect` | **Worker** | Next.js Enterprise Patterns (NEW) |
| `browser-subagent` | **Recon** | Web Reconnaissance & Vision Scraping (NEW) |

---

### 🔄 4-Step Management Cycle (PDCA)

System operates on the classic management framework to ensure continuous quality:

1.  **PLAN (Lập kế hoạch)**: `project-planner` - Defines MVP, PRD, and creates the execution blueprint.
2.  **RECON (Trinh sát)**: `browser-subagent` - Quét Web, cào nội dung DOM (innerText), chụp màn hình Vision.
3.  **DO (Thực hiện)**: **Worker Agents** (Backend, Frontend, etc.) - Build the features according to the plan.
4.  **CHECK (Kiểm tra & Đánh giá)**: `quality-inspector` - Independent audit, chạy tests, phân tích file Vision ảnh.
5.  **ACT (Điều chỉnh & Vận hành)**: `orchestrator` - Refines the output, theo dõi bằng Manager View (Dashboard).

---

## 🧩 Skills (36)

Modular knowledge domains that agents can load on-demand. based on task context.

### Frontend & UI

| Skill | Description |
| ----- | ----------- |
| `nextjs-react-expert` | React & Next.js performance optimization (Vercel - 57 rules) |
| `web-design-guidelines` | Web UI audit - 100+ rules for accessibility, UX, performance (Vercel) |
| `tailwind-patterns` | Tailwind CSS v4 utilities |
| `frontend-design` | UI/UX patterns, design systems |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 fonts |

### Backend & API

| Skill | Description |
| ----- | ----------- |
| `api-patterns` | REST, GraphQL, tRPC |
| `nestjs-expert` | NestJS modules, DI, decorators |
| `nodejs-best-practices` | Node.js async, modules |
| `python-patterns` | Python standards, FastAPI |

### Database

| Skill | Description |
| ----- | ----------- |
| `database-design` | Schema design, optimization |
| `prisma-expert` | Prisma ORM, migrations |

### TypeScript/JavaScript

| Skill | Description |
| ----- | ----------- |
| `typescript-expert` | Type-level programming, performance |

### Cloud & Infrastructure

| Skill | Description |
| ----- | ----------- |
| `docker-expert` | Containerization, Compose |
| `deployment-procedures` | CI/CD, deploy workflows |
| `server-management` | Infrastructure management |

### Testing & Quality

| Skill | Description |
| ----- | ----------- |
| `testing-patterns` | Jest, Vitest, strategies |
| `webapp-testing` | E2E, Playwright |
| `tdd-workflow` | Test-driven development |
| `code-review-checklist` | Code review standards |
| `lint-and-validate` | Linting, validation |

### Security

| Skill | Description |
| ----- | ----------- |
| `vulnerability-scanner` | Security auditing, OWASP |
| `red-team-tactics` | Offensive security |

### Architecture & Planning

| Skill | Description |
| ----- | ----------- |
| `app-builder` | Full-stack app scaffolding |
| `architecture` | System design patterns |
| `plan-writing` | Task planning, breakdown |
| `brainstorming` | Socratic questioning |

### Mobile

| Skill | Description |
| ----- | ----------- |
| `mobile-design` | Mobile UI/UX patterns |

### Game Development

| Skill | Description |
| ----- | ----------- |
| `game-development` | Game logic, mechanics |

### SEO & Growth

| Skill | Description |
| ----- | ----------- |
| `seo-fundamentals` | SEO, E-E-A-T, Core Web Vitals |
| `geo-fundamentals` | GenAI optimization |

### Shell/CLI

| Skill | Description |
| ----- | ----------- |
| `bash-linux` | Linux commands, scripting |
| `powershell-windows` | Windows PowerShell |

### Other

| Skill | Description |
| ----- | ----------- |
| `clean-code` | Coding standards (Global) |
| `behavioral-modes` | Agent personas |
| `parallel-agents` | Multi-agent patterns |
| `mcp-builder` | Model Context Protocol |
| `documentation-templates` | Doc formats |
| `i18n-localization` | Internationalization |
| `performance-profiling` | Web Vitals, optimization |
| `systematic-debugging` | Troubleshooting |

---

## 🔄 Workflows (11)

Slash command procedures. Invoke with `/command`.

| Command | Description |
| ------- | ----------- |
| `/brainstorm` | Socratic discovery |
| `/create` | Create new features |
| `/debug` | Debug issues |
| `/deploy` | Deploy application |
| `/enhance` | Improve existing code |
| `/orchestrate` | Multi-agent coordination |
| `/plan` | Task breakdown |
| `/preview` | Preview changes |
| `/status` | Check project status |
| `/test` | Run tests |
| `/ui-ux-pro-max` | Design with 50 styles |

---

## 🎯 Skill Loading Protocol

```plaintext
User Request → Skill Description Match → Load SKILL.md
                                            ↓
                                    Read references/
                                            ↓
                                    Read scripts/
```

### Skill Structure

```plaintext
skill-name/
├── SKILL.md           # (Required) Metadata & instructions
├── scripts/           # (Optional) Python/Bash scripts
├── references/        # (Optional) Templates, docs
└── assets/            # (Optional) Images, logos
```

### Enhanced Skills (with scripts/references)

| Skill | Files | Coverage |
| ----- | ----- | -------- |
| `typescript-expert` | 5 | Utility types, tsconfig, cheatsheet |
| `ui-ux-pro-max` | 27 | 50 styles, 21 palettes, 50 fonts |
| `app-builder` | 20 | Full-stack scaffolding |

---

## � Scripts (2)

Master validation scripts that orchestrate skill-level scripts.

### Master Scripts

| Script | Purpose | When to Use |
| ------ | ------- | ----------- |
| `checklist.py` | Priority-based validation (Core checks) | Development, pre-commit |
| `verify_all.py` | Comprehensive verification (All checks) | Pre-deployment, releases |

### Usage

```bash
# Quick validation during development
python .agent/scripts/checklist.py .

# Full verification before deployment
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

### What They Check

**checklist.py** (Core checks):

- Security (vulnerabilities, secrets)
- Code Quality (lint, types)
- Schema Validation
- Test Suite
- UX Audit
- SEO Check

**verify_all.py** (Full suite):

- Everything in checklist.py PLUS:
- Lighthouse (Core Web Vitals)
- Playwright E2E
- Bundle Analysis
- Mobile Audit
- i18n Check

For details, see [scripts/README.md](scripts/README.md)

---

## 📊 Statistics

| Metric | Value |
| ------ | ----- |
| **Total Agents** | 20 |
| **Total Master Skills** | 22 (Covering 550+ capabilities) |
| **Total Workflows** | 11 |
| **Total Scripts** | 2 (master) + 18 (skill-level) |
| **Coverage** | ~90% web/mobile development |

---

## 🔗 Quick Reference

| Need | Agent | Skills |
| ---- | ----- | ------ |
| Web App | `frontend-specialist` | nextjs-react-expert, frontend-design |
| API | `backend-specialist` | api-patterns, nodejs-best-practices |
| Mobile | `mobile-developer` | mobile-design |
| Database | `database-architect` | database-design, prisma-expert |
| Security | `security-auditor` | vulnerability-scanner |
| Testing | `test-engineer` | testing-patterns, webapp-testing |
| Debug | `debugger` | systematic-debugging |
| Plan | `project-planner` | brainstorming, plan-writing |
| Recon/Scraping | `browser-subagent`| browser-subagent-core |
