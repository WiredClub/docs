export type DocPageStatus = 'rascunho' | 'novo' | 'consolidado';

export interface DocPageStatusInfo {
	label: string;
	description: string;
	variant: 'success' | 'note' | 'caution';
}

export const STATUS_MAP: Record<DocPageStatus, DocPageStatusInfo> = {
	consolidado: {
		label: 'Consolidado',
		description: 'Página completa, revisada e consolidada',
		variant: 'success',
	},
	novo: {
		label: 'Novo',
		description: 'Página nova ou recentemente adicionada',
		variant: 'note',
	},
	rascunho: {
		label: 'Rascunho',
		description: 'Página preliminar ou em rascunho',
		variant: 'caution',
	},
};

export function getPageStatus(data?: {
	draft?: boolean;
	sidebar?: { badge?: string | { text?: string } };
}): DocPageStatus {
	const badge = data?.sidebar?.badge;
	const badgeText = (typeof badge === 'string' ? badge : badge?.text)?.trim().toLowerCase();

	if (data?.draft || badgeText === 'rascunho') {
		return 'rascunho';
	}
	if (badgeText === 'novo') {
		return 'novo';
	}
	return 'consolidado';
}

export function getCategoryLabel(id: string): string {
	const normalized = id.replace(/\\/g, '/');
	const parts = normalized.split('/');
	const section = parts[0];

	if (section === 'vamos-comecar') return 'Vamos Começar';
	if (section === 'guias-praticos') return 'Guias Práticos';
	if (section === 'sobre-nos') return 'Sobre Nós';

	if (section === 'referencia') {
		if (parts.length > 2) {
			const sub = parts[1];
			if (sub === 'ativadores') return 'Referência • Ativadores';
			if (sub === 'condicoes') return 'Referência • Condições';
			if (sub === 'contratos') return 'Referência • Contratos';
			if (sub === 'efeitos') return 'Referência • Efeitos';
			if (sub === 'extras') return 'Referência • Extras';
			if (sub === 'seletores') return 'Referência • Seletores';
			if (sub === 'variaveis') return 'Referência • Variáveis';
			if (sub === 'ferramentas-do-criador') return 'Referência • Ferramentas';
			if (sub === 'outros') {
				const leaf = parts[2];
				if (leaf === 'baus') return 'Referência • Baús';
				if (leaf === 'configuradores') return 'Referência • Configuradores';
				if (leaf === 'tabelas-de-classificacao') return 'Referência • Tabelas de Classificação';
				if (leaf === 'utilitarios') return 'Referência • Utilitários';
				return 'Referência • Outros';
			}
		}
		return 'Referência';
	}

	return 'Documentação';
}
