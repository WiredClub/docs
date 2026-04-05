import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const BasicInfoboxSchema = z.object({
	hide: z.boolean().default(false).describe("Oculta a infobox, mesmo que os campos sejam preenchidos"),
	title: z.string().describe("Título da infobox, geralmente o nome do item ou tema destacado"),
	image: z.union([
		z.string(),
		z.array(z.string()),
	]).optional().describe("URL ou caminho da imagem a ser exibida na infobox, se aplicável"),
})

const FurniInfoboxBaseSchema = BasicInfoboxSchema.extend({
	revision: z.int(),
	classname: z.string(),
	name: z.string().describe("Nome oficial do mobi"),
	description: z
		.string()
		.optional()
		.describe("Descrição conforme o furnidata"),
	product_name: z.string().optional().describe("Nome oficial do mobi no catálogo"),
	image_direction: z.union([0, 1, 2, 3, 4, 5, 6, 7].map(x => z.literal(x))).default(0).describe("Direção da imagem, se aplicável (0-7)"),
	image_animated_state: z.int().default(100).describe("Estado do mobi quando animado, se aplicável (geralmente 0 para estático e 100 para animado)"),
	icon: z.string().optional().describe("URL ou caminho do ícone a ser exibido na infobox, se aplicável"),
	availability: z
		.enum(["No catálogo", "No Clube do Arquiteto", "No catálogo e CA", "Eventos oficiais", "Apenas staff"])
		.optional()
		.describe("Onde o mobi pode ser obtido"),
	price: z.number().optional().describe("Preço em créditos no catálogo"),
	// Se houver a necessidade de incluir outros tipos de moedas como diamantes ou duckets, podemos adicionar campos adicionais aqui ou criar um campo mais genérico para múltiplas moedas.
	release_date: z
		.date()
		.optional()
		.describe("Data de lançamento, com o dia sendo ignorado na exibição"),
});

const WiredInfoboxBaseSchema = FurniInfoboxBaseSchema.extend({
	requires_bot: z
		.boolean()
		.default(false)
		.describe("O Wired precisa de um usuário para ser configurado"),
	requires_furni: z
		.boolean()
		.default(false)
		.describe("O Wired precisa de um mobi selecionado para ser configurado"),
	requires_antena: z
		.boolean()
		.default(false)
		.describe("O Wired precisa de uma antena selecionada para ser configurado"),
	requires_contract: z
		.boolean()
		.default(false)
		.describe("O Wired precisa de um contrato selecionado para ser configurado"),
	requires_chest: z
		.boolean()
		.default(false)
		.describe("O Wired precisa de um baú selecionado para ser configurado"),
	execution_limit: z
		.number()
		.default(100)
		.describe("Limite de execuções que o Wired pode ser executado por tick (0.5 segundos)"),
	execution_limit_per_user: z
		.number()
		.default(100)
		.describe("Limite de execuções que o Wired pode ser executado por usuário por tick (0.5 segundos)"),
});

const TriggerInfoboxBaseSchema = WiredInfoboxBaseSchema.extend({
	type: z.literal("Ativador").describe("Tipo do Wired: Ativador"),
	additional_sources: z
		.array(
			z.enum([
				"Bots especificados pelo nome",
				"Habbo especificado pelo nome",
				"Usuário alcançado",
				"Usuário clicado",
				"Usuário acionador",
				"Item de ativação",
			])
		).optional().describe("Fontes adicionais que podem ser usados por Efeitos ao acionar este Wired"),
});

const EffectInfoboxBaseSchema = WiredInfoboxBaseSchema.extend({
	type: z.literal("Efeito").describe("Tipo do Wired: Efeito"),
	has_negative_version: z
		.boolean()
		.default(false)
		.describe("Se o efeito uma versão negativa para ser acionada caso as condições não sejam atendidas"),
	negative_revision: z.int().optional().describe("Revisão da versão negativa do efeito, se aplicável"),
	negative_classname: z.string().optional().describe("Classname da versão negativa do efeito, se aplicável"),
});

const ConditionInfoboxBaseSchema = WiredInfoboxBaseSchema.extend({
	type: z.literal("Condição").describe("Tipo do Wired: Condição"),
	has_negative_version: z
		.boolean()
		.default(false)
		.describe("Se a condição uma versão negativa para representar a lógica inversa"),
	negative_revision: z.int().optional().describe("Revisão da versão negativa da condição, se aplicável"),
	negative_classname: z.string().optional().describe("Classname da versão negativa da condição, se aplicável"),
});

const AddOnInfoboxBaseSchema = WiredInfoboxBaseSchema.extend({
	type: z.literal("Extra").describe("Tipo do Wired: Extra"),
});

export const WiredInfoboxSchema = z.discriminatedUnion("type", [
	TriggerInfoboxBaseSchema,
	EffectInfoboxBaseSchema,
	ConditionInfoboxBaseSchema,
	AddOnInfoboxBaseSchema,
]).describe("Esquema para infoboxes de Wired, com campos específicos para cada tipo");

const CompleteInfoboxSchema = z.union([
	WiredInfoboxSchema,
	BasicInfoboxSchema,
])
	.describe("Esquema completo para infoboxes, incluindo campos básicos e específicos para Wired");

export type BasicInfobox = z.infer<typeof BasicInfoboxSchema>;
export type WiredInfoboxBase = z.infer<typeof WiredInfoboxBaseSchema>;
export type TriggerInfobox = z.infer<typeof TriggerInfoboxBaseSchema>;
export type EffectInfobox = z.infer<typeof EffectInfoboxBaseSchema>;
export type ConditionInfobox = z.infer<typeof ConditionInfoboxBaseSchema>;
export type AddonInfobox = z.infer<typeof AddOnInfoboxBaseSchema>;
export type WiredInfobox = z.infer<typeof WiredInfoboxSchema>;
export type WiredInfoboxType = WiredInfobox["type"];
export type CompleteInfobox = z.infer<typeof CompleteInfoboxSchema>;

export const collections = {
	docs: defineCollection({
		loader: docsLoader(), schema: docsSchema({
			extend: z.object({
				infobox: CompleteInfoboxSchema.optional().describe("Infobox personalizada para destacar informações-chave do documento"),
			})
		})
	}),
};
