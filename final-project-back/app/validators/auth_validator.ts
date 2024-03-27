import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    firstname: vine.string(),
    lastname: vine.string(),
    nickname: vine.string().minLength(3).maxLength(20),
    email: vine
      .string()
      .email()
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()

        return !user
      }),
    password: vine.string().minLength(8).maxLength(32),
    niss: vine.string().fixedLength(15),
    address: vine.object({
      street: vine.string(),
      number: vine.string(),
      city: vine.string(),
      zip_code: vine.number(),
    }),
  })
)
