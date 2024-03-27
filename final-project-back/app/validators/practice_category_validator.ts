import vine from '@vinejs/vine';

export const practiceCategoryValidator = vine.compile(
  vine.object({
    categoryName: vine.string(),
  })
);
