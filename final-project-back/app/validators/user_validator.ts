import vine from '@vinejs/vine'

export const patchUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().maxLength(20).optional(),
    lastname: vine.string().maxLength(20).optional(),
    nickname: vine.string().minLength(3).maxLength(20).optional(),
    email: vine
      .string()
      .email()
      .maxLength(254)
      .optional(),
    password: vine.string().minLength(8).maxLength(32).optional(),
    niss: vine.string().maxLength(15).optional(),
    address: vine
      .object({
        street: vine.string(),
        number: vine.string(),
        city: vine.string(),
        zip_code: vine.number(),
      })
      .optional(),
  })
)

export const userExistValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().exists(async (query, id) => {
        const user = await query.from('users').where('id', id).first()
        return !!user
      }),
    }),
  })
)
