## Summary

**Candidato:** Felipe de Lima Santiago · https://www.linkedin.com/in/felipelsantiago/

- Challenge **001 — Diagnóstico de Churn RavenStack**: cruzamento das **5 tabelas**, tese **porta giratória** (600 eventos vs 110 churn líquido; US$ 665k MRR revolving).
- Entregáveis CEO: relatórios, fila CS (MRR × risco), playbook, impacto MRR, **Command Center React** (filtros globais + período + drill-down).
- Metodologia e alinhamento ao case: `submissions/felipe/docs/METODOLOGIA.md`
- Autoverificação: `python submissions/felipe/solution/verify_submission.py`

## Test plan

**Windows (recomendado — um comando):**

- [ ] `cd submissions\felipe` → **`start.bat`**
  - Instala deps Python, confere CSVs (já vêm no PR), pula pipeline/build se `dist/` + bundle existirem, sobe **http://127.0.0.1:8765**
  - Para rodar pipeline + testes de ponta a ponta de novo: apague `solution/command-center/dist/index.html` e rode `start.bat` outra vez (refaz análise, npm build, verify, pytest).

**Leitura CEO (~5 min):**

- [ ] `submissions/felipe/solution/reports/ceo_one_pager.md`

**Opcional (Linux/macOS ou auditoria manual):** ver `submissions/felipe/README.md` e `solution/README.md`.

## Process log

`submissions/felipe/process-log/PROCESS-LOG.md`
