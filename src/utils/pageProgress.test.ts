import assert from 'node:assert/strict';
import test from 'node:test';
import { getPageStatus, getCategoryLabel, STATUS_MAP } from './pageProgress.ts';

test('getPageStatus identifies draft via draft: true or sidebar badge RASCUNHO', () => {
	assert.equal(getPageStatus({ draft: true }), 'rascunho');
	assert.equal(getPageStatus({ sidebar: { badge: 'RASCUNHO' } }), 'rascunho');
	assert.equal(getPageStatus({ sidebar: { badge: { text: 'rascunho' } } }), 'rascunho');
	assert.equal(getPageStatus({ draft: true, sidebar: { badge: 'NOVO' } }), 'rascunho');
});

test('getPageStatus identifies novo via sidebar badge NOVO', () => {
	assert.equal(getPageStatus({ sidebar: { badge: 'NOVO' } }), 'novo');
	assert.equal(getPageStatus({ sidebar: { badge: { text: 'novo' } } }), 'novo');
	assert.equal(getPageStatus({ sidebar: { badge: '  Novo  ' } }), 'novo');
});

test('getPageStatus defaults to consolidado when neither draft nor novo', () => {
	assert.equal(getPageStatus({}), 'consolidado');
	assert.equal(getPageStatus(undefined), 'consolidado');
	assert.equal(getPageStatus({ sidebar: { badge: undefined } }), 'consolidado');
	assert.equal(getPageStatus({ sidebar: { badge: 'outro' } }), 'consolidado');
});

test('getCategoryLabel maps page ids to intuitive categories', () => {
	assert.equal(getCategoryLabel('vamos-comecar/introducao'), 'Vamos Começar');
	assert.equal(getCategoryLabel('guias-praticos/primeiro-sistema'), 'Guias Práticos');
	assert.equal(getCategoryLabel('sobre-nos/contribuidores'), 'Sobre Nós');
	assert.equal(getCategoryLabel('referencia/glossario'), 'Referência');
	assert.equal(getCategoryLabel('referencia/ativadores/wf_trg_click_furni'), 'Referência • Ativadores');
	assert.equal(getCategoryLabel('referencia/condicoes/wf_cnd_actor_dir'), 'Referência • Condições');
	assert.equal(getCategoryLabel('referencia/efeitos/wf_act_bot_clothes'), 'Referência • Efeitos');
	assert.equal(getCategoryLabel('referencia/seletores/wf_slc_furni_picks'), 'Referência • Seletores');
	assert.equal(getCategoryLabel('referencia/outros/tabelas-de-classificacao/highscore_classic-1'), 'Referência • Tabelas de Classificação');
	assert.equal(getCategoryLabel('referencia/outros/baus/chest_wood'), 'Referência • Baús');
	assert.equal(getCategoryLabel('referencia/outros/utilitarios/wf_antenna1'), 'Referência • Utilitários');
});

test('STATUS_MAP provides labels and descriptions for all statuses', () => {
	assert.equal(STATUS_MAP.consolidado.label, 'Consolidado');
	assert.equal(STATUS_MAP.novo.label, 'Novo');
	assert.equal(STATUS_MAP.rascunho.label, 'Rascunho');
});

