export type Conta = {
  conta_id: string;
  nome_conta: string;
  industria: string;
  pais: string;
  canal_aquisicao: string;
  plano_atual: string;
  em_trial: string;
  mrr_usd: number;
  status_conta: string;
  churn_liquido: boolean;
  eventos_churn: number;
  data_cadastro?: string | null;
  data_ultimo_churn?: string | null;
  data_ultimo_uso?: string | null;
  score_risco?: number | null;
  faixa_risco?: string | null;
  prioridade_mrr?: number | null;
  motivo_risco?: string | null;
  taxa_escalacao_pct?: number;
};

export type Bundle = {
  meta: { produto: string; versao: string; autor: string; design_ref: string };
  narrativa_executiva: { headline: string; bullets: string[] };
  kpis_globais: Record<string, number>;
  contas: Conta[];
  uso_mensal_por_industria: { month: string; industry: string; total_usage: number }[];
  filtros_disponiveis: Record<string, string[] | string> & {
    periodo_meses?: string[];
    periodo_min?: string;
    periodo_max?: string;
  };
};

export type FilterState = {
  status_conta: string[];
  industria: string[];
  canal_aquisicao: string[];
  plano_atual: string[];
  faixa_risco: string[];
  em_trial: string;
  escalacao_acima: boolean;
  periodo_inicio: string;
  periodo_fim: string;
};

export const emptyFilters = (): FilterState => ({
  status_conta: [],
  industria: [],
  canal_aquisicao: [],
  plano_atual: [],
  faixa_risco: [],
  em_trial: "",
  escalacao_acima: false,
  periodo_inicio: "",
  periodo_fim: "",
});
