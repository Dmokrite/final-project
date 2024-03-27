import vine from '@vinejs/vine';

export const practiceValidator = vine.compile(
  vine.object({
    practiceCategoryId: vine.number(),
    practiceName: vine.string(),
  })
);
