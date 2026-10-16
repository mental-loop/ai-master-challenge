## Summary

**Candidato:** Felipe de Lima Santiago · https://www.linkedin.com/in/felipelsantiago/

- Challenge **001 — Diagnóstico de Churn RavenStack**: cruzamento das **5 tabelas**, tese **porta giratória** (600 eventos vs 110 churn líquido; US$ 665k MRR revolving).
- Entregáveis CEO: relatórios, fila CS (MRR × risco), playbook, impacto MRR, **Command Center React** (filtros globais + período + drill-down).
- Metodologia e alinhamento ao case: `submissions/felipe/docs/METODOLOGIA.md`
- Autoverificação: `python submissions/felipe/solution/verify_submission.py`

## Test plan

- [ ] CSVs Kaggle em `submissions/felipe/data/` (ou `start.bat` no Windows)
- [ ] `cd submissions/felipe/solution && pip install -r requirements.txt && python run_analysis.py`
- [ ] `cd command-center && npm install && npm run build`
- [ ] `python verify_submission.py` e `pytest analytics/tests/`
- [ ] `python serve_dashboard.py` — http://127.0.0.1:8765
- [ ] `reports/ceo_one_pager.md` (~5 min)

## Process log

`submissions/felipe/process-log/PROCESS-LOG.md`
