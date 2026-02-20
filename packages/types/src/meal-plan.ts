import { z } from 'zod';
import { BaseEntitySchema } from './common';

// Macronutrient schema
export const MacroNutrientsSchema = z.object({
  calories: z.number().min(0),
  protein: z.number().min(0), // grams
  carbs: z.number().min(0),   // grams
  fat: z.number().min(0),     // grams
  fiber: z.number().min(0).optional(), // grams
});

export type MacroNutrients = z.infer<typeof MacroNutrientsSchema>;

// Meal type enum
export const MealTypeSchema = z.enum(['breakfast', 'lunch', 'dinner', 'snack']);
export type MealType = z.infer<typeof MealTypeSchema>;

// Recipe schema
export const RecipeSchema = BaseEntitySchema.extend({
  name: z.string(),
  description: z.string().optional(),
  instructions: z.array(z.string()),
  cookingTime: z.number().min(0), // minutes
  servings: z.number().min(1),
  macros: MacroNutrientsSchema,
  ingredients: z.array(z.object({
    itemId: z.string(),
    quantity: z.number(),
    unit: z.string(),
  })),
  tags: z.array(z.string()).optional(),
});

export type Recipe = z.infer<typeof RecipeSchema>;

// Meal schema
export const MealSchema = BaseEntitySchema.extend({
  type: MealTypeSchema,
  name: z.string(),
  macros: MacroNutrientsSchema,
  recipe: RecipeSchema.optional(),
  deliveryOption: z.object({
    vendor: z.string(),
    itemId: z.string(),
    name: z.string(),
    price: z.number(),
    eta: z.number(), // minutes
  }).optional(),
  scheduledFor: z.date(),
});

export type Meal = z.infer<typeof MealSchema>;

// Meal plan schema
export const MealPlanSchema = BaseEntitySchema.extend({
  userId: z.string(),
  date: z.date(),
  meals: z.array(MealSchema),
  totalMacros: MacroNutrientsSchema,
  targetMacros: MacroNutrientsSchema,
  status: z.enum(['draft', 'active', 'completed']),
});

export type MealPlan = z.infer<typeof MealPlanSchema>; 